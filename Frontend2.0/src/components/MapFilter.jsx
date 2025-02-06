import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '80%',
  height: '300px',
};

const center = {
  lat: -34.6037, // Latitud y longitud inicial (por ejemplo, Buenos Aires)
  lng: -58.3816,
};

const MapFilter = ({ onLocationSelect }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBe13Fyguf2fFjpe2EtDCan36tmwjznnOQ', // Reemplaza con tu API Key
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });
    onLocationSelect({ lat, lng }); // Envía las coordenadas al componente padre
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
      onClick={handleMapClick}
    >
      {selectedLocation && <Marker position={selectedLocation} />}
    </GoogleMap>
  );
};

export default MapFilter;