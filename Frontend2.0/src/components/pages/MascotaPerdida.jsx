import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MapFilter from '../../components/MapFilter';

const MascotaPerdida = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    especie: '',
    raza: '',
    tipoReporte: '',
  });
  const [locationFilter, setLocationFilter] = useState(null); // Coordenadas seleccionadas en el mapa
  const [selectedRadius, setSelectedRadius] = useState(20); // Radio de búsqueda en km

  // Función para calcular la distancia entre dos coordenadas (fórmula de Haversine)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const R = 6371; // Radio de la Tierra en km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  // Obtener las mascotas desde la API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) throw new Error('No se encontró el token de autenticación');

        const payload = JSON.parse(atob(token.split('.')[1]));
        const expirationDate = new Date(payload.exp * 1000);
        if (new Date() > expirationDate) throw new Error('Token expirado');

        const response = await fetch('https://apipetmap.onrender.com/reportes/traer', {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) throw new Error(`Error ${response.status}`);
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

  // Ordenar las mascotas por fecha (más recientes primero)
  const sortedPets = [...pets].sort((a, b) => {
    const dateA = new Date(a.fechaReporte);
    const dateB = new Date(b.fechaReporte);
    return dateB - dateA; // Orden descendente
  });

  // Filtros combinados
  const filteredPets = sortedPets.filter(pet => {
    const matchesSearch = pet.nombreMascota.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEspecie = !filters.especie || pet.especieMascota === filters.especie;
    const matchesRaza = !filters.raza || pet.razaMascota === filters.raza;
    const matchesTipo = !filters.tipoReporte || pet.tipoReporte === filters.tipoReporte;

    // Filtro de ubicación con mapa
    let matchesLocation = true;
    if (locationFilter && pet.ubicacionReporte) {
      const [petLat, petLon] = pet.ubicacionReporte.split(',').map(Number);
      const distance = calculateDistance(locationFilter.lat, locationFilter.lng, petLat, petLon);
      matchesLocation = distance <= selectedRadius; // Usa el radio seleccionado
    }

    return matchesSearch && matchesEspecie && matchesRaza && matchesTipo && matchesLocation;
  });

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center">Error: {error}. <a href="/login">Iniciar sesión</a></p>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Base de Datos de Mascotas Perdidas</h1>

      {/* Filtros de búsqueda */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="row g-2 mb-3">
          {/* Filtro de especie */}
          <div className="col-md-3">
            <select
              className="form-control"
              value={filters.especie}
              onChange={(e) => setFilters({ ...filters, especie: e.target.value })}
            >
              <option value="">Todas las especies</option>
              {[...new Set(pets.map(p => p.especieMascota))].map((especie, i) => (
                <option key={i} value={especie}>{especie}</option>
              ))}
            </select>
          </div>

          {/* Filtro de raza */}
          <div className="col-md-3">
            <select
              className="form-control"
              value={filters.raza}
              onChange={(e) => setFilters({ ...filters, raza: e.target.value })}
            >
              <option value="">Todas las razas</option>
              {[...new Set(pets.map(p => p.razaMascota))].map((raza, i) => (
                <option key={i} value={raza}>{raza}</option>
              ))}
            </select>
          </div>

          {/* Filtro de tipo de reporte */}
          <div className="col-md-3">
            <select
              className="form-control"
              value={filters.tipoReporte}
              onChange={(e) => setFilters({ ...filters, tipoReporte: e.target.value })}
            >
              <option value="">Todos los reportes</option>
              {['PERDIDA', 'HALLAZGO'].map((tipo, i) => (
                <option key={i} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>

          {/* Input para el radio personalizado */}
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Radio en km"
              value={selectedRadius}
              onChange={(e) => setSelectedRadius(Number(e.target.value))}
              min="1"
            />
          </div>
        </div>

        {/* Mapa interactivo */}
        <div className="mb-4">
          <h5>Selecciona ubicación en el mapa (radio: {selectedRadius} km):</h5>
          <MapFilter onLocationSelect={setLocationFilter} selectedLocation={locationFilter} />
          {locationFilter && (
            <button
              className="btn btn-danger mt-2"
              onClick={() => setLocationFilter(null)}
            >
              Quitar filtro de ubicación
            </button>
          )}
        </div>
      </div>

      {/* Listado de mascotas */}
      <div className="row">
        {filteredPets.length > 0 ? (
          filteredPets.map(pet => (
            <div key={pet.idReporte} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={pet.urlFotoMascota} className="card-img-top" alt={pet.nombreMascota} />
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to={`/pet/${pet.idReporte}`} className="text-decoration-none">
                      {pet.nombreMascota}
                    </Link>
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">{pet.fechaReporte}</small><br />
                    Especie: {pet.especieMascota}<br />
                    Raza: {pet.razaMascota}<br />
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No se encontraron mascotas.</p>
        )}
      </div>
    </div>
  );
};

export default MascotaPerdida;