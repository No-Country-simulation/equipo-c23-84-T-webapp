import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const StaticMap = ({ lat, lng }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBe13Fyguf2fFjpe2EtDCan36tmwjznnOQ', // Reemplaza con tu API Key
  });

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};
export default StaticMap;