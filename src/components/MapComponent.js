import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  // Default position and zoom level
  const position = [51.505, -0.09];  // Replace with coordinates you want to center the map on

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}  // Adjust height/width as necessary
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          This is your location! Add a description or any info here.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
