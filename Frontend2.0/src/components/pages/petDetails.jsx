import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaticMap from '../StaticMap';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) throw new Error('No se encontró el token de autenticación');

        const response = await fetch(`https://apipetmap.onrender.com/reportes/traer/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) throw new Error(`Error ${response.status}`);
        
        const data = await response.json();
        setPet(data);

        // Extraer coordenadas solo si existen
        if (data?.ubicacionReporte) {
          const [lat, lng] = data.ubicacionReporte.split(',').map(Number);
          setCoordinates({ lat, lng });
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  // 1. Manejar estado de carga
  if (loading) {
    return <p className="text-center">Cargando...</p>;
  }

  // 2. Manejar errores
  if (error) {
    return (
      <p className="text-center">
        Error: {error}. <a href="/login">Inicia sesión nuevamente</a>.
      </p>
    );
  }

  // 3. Verificar si pet es null después de la carga
  if (!pet) {
    return <p className="text-center">No se encontró la mascota.</p>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          {/* 4. Usar operador condicional para propiedades */}
          <img
            src={pet?.urlFotoMascota || 'https://via.placeholder.com/400'} // Imagen por defecto
            alt={pet?.nombreMascota || 'Mascota'}
            className="img-fluid rounded mb-4"
          />
          
          {/* 5. Validar coordenadas antes de mostrar mapa */}
          {coordinates.lat && coordinates.lng ? (
            <div className="mt-4">
              <h4>Ubicación reportada</h4>
              <StaticMap lat={coordinates.lat} lng={coordinates.lng} />
            </div>
          ) : (
            <p className="text-muted">No hay ubicación disponible.</p>
          )}
        </div>

        <div className="col-md-6">
          {/* 6. Usar operadores de encadenamiento opcional */}
          <p className="text-muted">
            {pet?.especieMascota || 'Especie no especificada'} | 
            {pet?.tipoReporte || 'Tipo no especificado'}
          </p>
          
          <h2 className="fw-bold">{pet?.nombreMascota || 'Nombre no disponible'}</h2>
          
          <div className="mb-4">
            <p><strong>Reportado por:</strong> {pet?.nombreUsuario || 'Anónimo'}</p>
            <p><strong>Fecha:</strong> {pet?.fechaReporte ? new Date(pet.fechaReporte).toLocaleDateString() : 'No especificada'}</p>
            <p><strong>Raza:</strong> {pet?.razaMascota || 'No especificada'}</p>
            <p><strong>Contacto:</strong> {pet?.contacto || 'No disponible'}</p>
            <p><strong>Descripción:</strong> {pet?.descripcionMascota || 'Sin descripción'}</p>
          </div>

          <div className="border-top pt-3">
            <h5>Compartir en redes sociales</h5>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary">
                <i className="fab fa-facebook me-2"></i>Facebook
              </button>
              <button className="btn btn-outline-info">
                <i className="fab fa-twitter me-2"></i>Twitter
              </button>
              <button className="btn btn-outline-danger">
                <i className="fab fa-instagram me-2"></i>Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;