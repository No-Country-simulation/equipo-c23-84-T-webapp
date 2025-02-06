import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para navegar

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const token = localStorage.getItem('jwtToken');

        if (!token) {
          throw new Error('No se encontró el token de autenticación');
        }

        const payload = JSON.parse(atob(token.split('.')[1]));
        const expirationDate = new Date(payload.exp * 1000);
        const now = new Date();

        if (now > expirationDate) {
          throw new Error('El token ha expirado. Por favor, inicia sesión nuevamente.');
        }

        const response = await fetch('https://apipetmap.onrender.com/reportes/traer', {
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
        setPets(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const filteredPets = pets.filter((pet) =>
    pet.nombreMascota.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Base de Datos de Búsqueda de Mascotas Perdidas</h1>
        <p className="text-center">
          Consulta nuestra base de datos de mascotas perdidas para encontrar a tu compañero peludo.
        </p>

        <div className="mb-4">
          <input
            type="text"
            className="form-control form-control-petData"
            placeholder="Buscar mascota por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          {filteredPets.length > 0 ? (
            <div className="row">
              {filteredPets.map((pet) => (
                <div key={pet.idReporte} className="col-md-4 mb-4">
                  <div className="card" onClick={() => navigate(`/pet/${pet.idReporte}`)} style={{ cursor: 'pointer' }}>
                    <img
                      src={pet.urlFotoMascota}
                      className="card-img-top"
                      alt={pet.nombreMascota}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{pet.nombreMascota}</h5>
                      <h6>{pet.fechaReporte}</h6>
                      <p className="card-text">
                        Tipo: {pet.especieMascota} <br />
                        Raza: {pet.razaMascota} <br />
                        Ubicación: {pet.ubicacionReporte}
                      </p>
                      <div>
                        <h6>Compartir</h6>
                        <a
                          href="#"
                          className="social-a"
                          aria-label="Facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="social-icon fab fa-facebook fa-2x"></i>
                        </a>
                        <a
                          href="#"
                          className="social-a"
                          aria-label="Instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="social-icon fab fa-instagram fa-2x"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No se encontraron mascotas.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;