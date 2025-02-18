import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const FormularioReportarMascota = () => {
  const cloud_name = "dcapyxmud";
  const preset_name = "ja274ixty";
  const googleMapsApiKey = "AIzaSyBe13Fyguf2fFjpe2EtDCan36tmwjznnOQ";

  const [mapCenter, setMapCenter] = useState({ lat: -34.6037, lng: -58.3816 });
  const [markerPosition, setMarkerPosition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isReportSuccess, setIsReportSuccess] = useState(false);
  const [isUnnamedPet, setIsUnnamedPet] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    nombreMascota: "",
    especieMascota: "",
    razaMascota: "",
    descripcionMascota: "",
    urlFotoMascota: "",
    tipoReporte: "PERDIDA",
    fechaReporte: "",
    ubicacionReporte: "",
    contacto: "",
    idUsuario: "",
    nombreUsuario: "juan perez",
    correoUsuario: "juanperez@gmail.com",
  });

  const [razasDisponibles, setRazasDisponibles] = useState([]);

  const especiesYRazas = {
    Perro: ["Labrador", "Pastor Alemán", "Bulldog Francés", "Golden Retriever", "Chihuahua", "Poodle", "Beagle", "Rottweiler", "Boxer", "Dálmata", "Collie", "Otra"],
    Gato: ["Siamés", "Persa", "Maine Coon", "Bengalí", "Ragdoll", "Esfinge", "British Shorthair", "Abisinio", "Birmano", "Siberiano", "Otra"],
    Ave: ["Canario", "Periquito", "Cacatúa", "Guacamayo", "Loro", "Otra"],
    Roedor: ["Hámster", "Cobaya", "Chinchilla", "Rata", "Ratón", "Otra"],
    Reptil: ["Iguana", "Serpiente", "Tortuga", "Camaleón", "Otra"],
    Otra: ["Otra"]
  };

  useEffect(() => {
    const isFilled =
      (isUnnamedPet || formData.nombreMascota.trim() !== "") &&
      formData.especieMascota.trim() !== "" &&
      formData.razaMascota.trim() !== "" &&
      formData.descripcionMascota.trim() !== "" &&
      formData.fechaReporte.trim() !== "" &&
      formData.fechaReporte <= new Date().toISOString().split('T')[0] &&
      formData.ubicacionReporte.trim() !== "" &&
      formData.contacto.trim() !== "" &&
      formData.urlFotoMascota.trim() !== "";

    setIsFormValid(isFilled);
  }, [formData, isUnnamedPet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "especieMascota") {
      setRazasDisponibles(especiesYRazas[value] || []);
      setFormData((prevState) => ({ ...prevState, razaMascota: "" }));
    }
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    setFormData((prevState) => ({
      ...prevState,
      ubicacionReporte: `${lat}, ${lng}`,
    }));
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", preset_name);

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const file = await response.json();
      const image = file.secure_url;
      setTimeout(() => {
        setFormData((prevState) => ({
          ...prevState,
          urlFotoMascota: image,
        }));
        setIsLoading(false);
      }, 5000);
    } catch (error) {
      console.log("Error uploading: ", error);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const token = localStorage.getItem("jwtToken");
    if (!token) {
      throw new Error("No se encontró el token de autenticación");
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId || decodedToken.sub;

      const formDataWithUserId = { ...formData, idUsuario: userId };

      if (isUnnamedPet) {
        formDataWithUserId.nombreMascota = "Sin nombre";
      }

      const response = await fetch("https://apipetmap.onrender.com/reportes/crear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formDataWithUserId),
      });

      if (response.ok) {
        setIsReportSuccess(true);
        setTimeout(() => {
          window.location.href = "/paginainicio";
        }, 2000);
      } else {
        throw new Error("Error al enviar el reporte");
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage("No se pudo crear el reporte. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center">Te Ayudaremos A Encontrar A Tu Mascota</h2>
      <p className="text-center text-muted">
        Con nuestro servicio de geolocalización, encontrarás a tu mascota de
        manera rápida y eficiente.
      </p>
      <div className="row mt-4">
        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre de la mascota</label>
              <input
                className="form-control FormularioReportarMascota"
                type="text"
                name="nombreMascota"
                value={formData.nombreMascota}
                onChange={handleChange}
                required
                disabled={isUnnamedPet}
              />
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="unnamedPet"
                  checked={isUnnamedPet}
                  onChange={(e) => setIsUnnamedPet(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="unnamedPet">
                  La mascota no tiene nombre
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Especie</label>
                <select
                  className="form-select"
                  name="especieMascota"
                  value={formData.especieMascota}
                  onChange={handleChange}
                  required
                >
                  <option value="">Elegir especie...</option>
                  {Object.keys(especiesYRazas).map((especie, index) => (
                    <option key={index} value={especie}>
                      {especie}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Raza</label>
                <select
                  className="form-select"
                  name="razaMascota"
                  value={formData.razaMascota}
                  onChange={handleChange}
                  required
                >
                  <option value="">Elegir raza...</option>
                  {razasDisponibles.map((raza, index) => (
                    <option key={index} value={raza}>
                      {raza}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción Mascota</label>
              <textarea
                className="form-control FormularioReportarMascota"
                rows="3"
                name="descripcionMascota"
                value={formData.descripcionMascota}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Fecha de la pérdida</label>
                <input
                  type="date"
                  className="form-control FormularioReportarMascota"
                  name="fechaReporte"
                  value={formData.fechaReporte}
                  onChange={handleChange}
                  max={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Última ubicación</label>
                <input
                  type="text"
                  className="form-control FormularioReportarMascota"
                  placeholder="Click en mapa.."
                  readOnly
                  name="ubicacionReporte"
                  value={formData.ubicacionReporte}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Contacto</label>
              <input
                type="text"
                className="form-control FormularioReportarMascota"
                name="contacto"
                value={formData.contacto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Foto de la mascota</label>
              <input
                type="file"
                className="form-control FormularioReportarMascota"
                onChange={(e) => uploadImage(e)}
                accept=".png, .jpg, .jpeg"
                required
              />
              {isLoading && (
                <div className="spinner-border text-primary mt-2" role="status">
                  <span className="visually-hidden">Subiendo imagen...</span>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-danger w-100" disabled={!isFormValid || isLoading || isSubmitting}>
              {isSubmitting ? "Enviando reporte..." : "Reportar Mascota Perdida"}
            </button>
          </form>
        </div>

        <div className="col-md-5">
          <div className="card p-3">
            <div className="card-body">
              <h5 className="card-title">
                ¿Quieres ponerte en contacto directamente?
              </h5>
              <p className="text-muted">
                Para más información, contáctanos a través de los siguientes
                medios.
              </p>
              <p>
                <strong>Correo:</strong> contacto@petmap.com
              </p>
              <p>
                <strong>Teléfono:</strong> (414) 687 - 5892
              </p>
            </div>
          </div>

          <div
            className="mb-3"
            style={{ height: "400px", width: "100%", marginTop: "20px" }}
          >
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <GoogleMap
                mapContainerStyle={{ height: "100%", width: "100%" }}
                center={mapCenter}
                zoom={12}
                onClick={handleMapClick}
              >
                {markerPosition && <Marker position={markerPosition} />}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
      {isReportSuccess && (
        <div className="alert alert-success" role="alert">
          ¡Reporte registrado con éxito!
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default FormularioReportarMascota;