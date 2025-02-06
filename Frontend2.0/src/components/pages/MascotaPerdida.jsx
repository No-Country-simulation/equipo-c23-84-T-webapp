import React, { useState, useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pets, setPets] = useState([]); // Estado para almacenar los datos de la API
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para obtener los datos de la API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        // Obtener el token JWT del localStorage
        const token = localStorage.getItem('jwtToken');

        if (!token) {
          throw new Error('No se encontró el token de autenticación');
        }

        // Verificar si el token ha expirado
        const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar el payload del token
        const expirationDate = new Date(payload.exp * 1000); // Convertir a fecha legible
        const now = new Date();

        if (now > expirationDate) {
          throw new Error('El token ha expirado. Por favor, inicia sesión nuevamente.');
        }

        // Hacer la solicitud a la API con el token en las cabeceras
        const response = await fetch('https://apipetmap.onrender.com/reportes/traer', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // Verificar si la respuesta es válida
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        // Parsear la respuesta como JSON
        const data = await response.json();
        setPets(data); // Guardar los datos en el estado
      } catch (error) {
        setError(error.message); // Guardar el mensaje de error
      } finally {
        setLoading(false); // Finalizar la carga
      }
    };

    fetchPets();
  }, []);

  // Filtrar mascotas según el término de búsqueda
  const filteredPets = pets.filter((pet) =>
    pet.nombreMascota.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mostrar un mensaje de carga o error
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

        {/* Campo de búsqueda */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control form-control-petData"
            placeholder="Buscar mascota por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Lista de mascotas */}
        <div>
          {filteredPets.length > 0 ? (
            <div className="row">
              {filteredPets.map((pet) => (
                <div key={pet.idReporte} className="col-md-4 mb-4">
                  <div className="card">
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