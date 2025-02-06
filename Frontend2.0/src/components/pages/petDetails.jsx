import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { id } = useParams(); // Obtener el ID de la mascota de la URL
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const token = localStorage.getItem('jwtToken');

        if (!token) {
          throw new Error('No se encontró el token de autenticación');
        }

        const response = await fetch(`https://apipetmap.onrender.com/reportes/traer/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setPet(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center">Cargando...</p>;
  }

  if (error) {
    return (
      <p className="text-center">
        Error: {error}. <a href="/login">Inicia sesión nuevamente</a>.
      </p>
    );
  }

  if (!pet) {
    return <p className="text-center">No se encontró la mascota.</p>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pet.urlFotoMascota}
            alt={pet.nombreMascota}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <p className="text-muted">Mascota &nbsp; | &nbsp; {pet.especieMascota} &nbsp; | &nbsp; Perdido</p>
          <h2 className="fw-bold">{pet.nombreMascota}</h2>
          <p>{pet.nombreUsuario} reportó esta mascota</p>
          <p><strong>{pet.fechaReporte}</strong></p>
          <ul>
            <li>Raza: {pet.razaMascota}</li>
            <li>Descripción: {pet.descripcionMascota}</li>
          </ul>
          <p className="fw-bold">Ayuda a compartir en tus redes</p>
          <div>
            <button className="btn btn-light me-2"><i className="fa-brands fa-facebook"></i> Facebook</button>
            <button className="btn btn-light me-2"><i className="fa-brands fa-instagram"></i> Twitter</button>
            <button className="btn btn-light"><i className="fa-brands fa-twitter"></i> Instagram</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;