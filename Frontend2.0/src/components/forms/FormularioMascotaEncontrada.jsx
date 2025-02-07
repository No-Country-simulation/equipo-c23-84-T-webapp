import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const FormularioMascotaEncontrada = () => {
   

  const cloud_name = "dcapyxmud";
  const preset_name = "ja274ixty";
  const googleMapsApiKey = "AIzaSyBe13Fyguf2fFjpe2EtDCan36tmwjznnOQ";

  const [mapCenter, setMapCenter] = useState({ lat: -34.6037, lng: -58.3816 }); // Coordenadas de Buenos Aires por defecto
  const [markerPosition, setMarkerPosition] = useState(null);

  const [formData, setFormData] = useState({
      nombreMascota: "",
      especieMascota: "",
      razaMascota: "",
      descripcionMascota: "",
      urlFotoMascota: "",
      tipoReporte: "HALLAZGO",
      fechaReporte: "",
      ubicacionReporte: "",
      contacto: "",
      idUsuario: "",
      nombreUsuario: "juan perez",
      correoUsuario: "juanperez@gmail.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    console.log(cloud_name,preset_name);
    
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', preset_name);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: 'POST',
        body: data
      });

      const file = await response.json();
      const image = file.secure_url;
      console.log(image);
      
      setFormData(prevState => ({
        ...prevState,
        urlFotoMascota: image
      }));

    } catch (error) {
      console.log('Error uploading: ', error);
    }
  };

  const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(formData); 
  
          const token = localStorage.getItem("jwtToken");
          if (!token) {
            throw new Error('No se encontró el token de autenticación');
          }
  
          try {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId || decodedToken.sub;
            console.log(userId);
  
            //setFormData({...formData, idUsuario: userId}); es asíncrono, no asegura llegar a setear el id antes del fetch
            const formDataWithUserId = { ...formData, idUsuario: userId }; 
            
            try {
              const response = await fetch('http://localhost:8080/reportes/crear', {      //http://apipetmap.onrender.com/reportes/crear
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(formDataWithUserId),
              });
    
              const result = await response.json();
              window.location.href = "/paginainicio";
    
              if (!response.ok) {
                  throw new Error('Error')
              }
              else {
                  
              }
            } catch (error) {
              console.error(error.message);
              }
            
  
          } catch (error) {
            console.error("Error al decodificar el token: ", error);
          }
      };
    
    return (
        <div className="container py-5">
          <h2 className="text-center fw-bold">Te ayudaremos a reunir a esta mascota con su dueño</h2>
          <p className="text-center text-muted">
            Con nuestro servicio de geolocalización, encontrarás al dueño de la mascota de manera rápida y eficiente. Estamos aquí para ayudarte a reunir familias.
          </p>

          <div className="row mt-4">
            <div className="col-md-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre de la mascota </label>
                  <input 
                    className="form-control FormularioReportarMascota" 
                    type="text" 
                    name="nombreMascota" 
                    value={formData.nombreMascota} 
                    onChange={handleChange} />
                </div>
    
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Especie</label>
                    <select 
                      className="form-select" 
                      name="especieMascota" 
                      value={formData.especieMascota} 
                      onChange={handleChange}
                    >
                      <option value="">Elegir especie..</option>
                      <option value="Perro">Perro</option>
                      <option value="Gato">Gato</option>
                      <option value="Otra">Otra</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Raza</label>
                    <select 
                      className="form-select" 
                      name="razaMascota" 
                      value={formData.razaMascota} 
                      onChange={handleChange}  
                    >
                      <option value="">Elegir raza..</option>
                      <option value="Siames">Siames</option>
                      <option value="Pitbull">Pitbull</option>
                      <option value="Labrador">Labrador</option>
                      <option value="Pastor Aleman">Pastor Aleman</option>
                      <option value="Galgo">Galgo</option>
                      <option value="Bulldog Frances">Bulldog Frances</option>
                      <option value="Collie">Collie</option>
                      <option value="Otra">Otra</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Descripción Mascota</label>
                  <textarea 
                    className="form-control FormularioReportarMascota" rows="3" 
                    name="descripcionMascota" 
                    value={formData.descripcionMascota} 
                    onChange={handleChange}>
                  </textarea>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Fecha de la pérdida</label>
                    <input 
                      type="date" 
                      className="form-control FormularioReportarMascota" 
                      name="fechaReporte" 
                      value={formData.fechaReporte} 
                      onChange={handleChange} required />
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
                      onChange={handleChange} required />
                  </div>
                </div>
    
                
                <div className="mb-3">
                  <label className="form-label">Contacto</label>
                  <input 
                    type="text" 
                    className="form-control FormularioReportarMascota" 
                    name="contacto" 
                    value={formData.contacto} 
                    onChange={handleChange}></input>
                </div>

                <div className="mb-3">
                  <label className="form-label">Foto de la mascota</label>
                  <input 
                    type="file" 
                    className="form-control FormularioReportarMascota" 
                    onChange={(e)=>uploadImage(e)} 
                    accept=".png, .jpg, .jpeg" />
                </div>
    
              
    
    
                <button type="submit" className="btn btn-danger w-100">Reportar Mascota Encontrada</button>
              </form>
            </div>
    
            <div className="col-md-5">
              <div className="card p-3">
                <div className="card-body">
                  <h5 className="card-title">¿Quieres ponerte en contacto directamente?</h5>
                  <p className="text-muted">Para más información, contáctanos a través de los siguientes medios.</p>
                  <p><strong>Correo:</strong> contacto@petmap.com</p>
                  <p><strong>Teléfono:</strong> (414) 687 - 5892</p>
                </div>
              </div>

              <div className="mb-3" style={{ height: "400px", width: "100%", marginTop: "20px" }}>
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
        </div>
      );
};

export default FormularioMascotaEncontrada;