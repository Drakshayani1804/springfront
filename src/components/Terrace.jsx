import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const terraceIdeas = [
  {
    title: "Cozy Garden",
    imageSrc: "https://www.fabmood.com/wp-content/uploads/2024/07/cozy-garden-light-4.jpg",
    estimatedCost: "$2,000",
    location: { lat: 51.505, lng: -0.09 }, // Example location (London)
  },
  {
    title: "Modern Terrace",
    imageSrc: "https://i.pinimg.com/736x/d1/34/65/d13465740b5b67b09b779bce920c80cc.jpg",
    estimatedCost: "$3,500",
    location: { lat: 40.7128, lng: -74.0060 }, // Example location (New York)
  },
  {
    title: "Tropical Vibes",
    imageSrc: "https://lifewall.in/wp-content/uploads/2023/06/Tropical-Theme-Blog-Banner.jpg",
    estimatedCost: "$4,000",
    location: { lat: -23.5505, lng: -46.6333 }, // Example location (São Paulo)
  },
  {
    title: "Glass fireplace",
    imageSrc: "https://imgmedia.lbb.in/media/2023/09/650a8ce32571b42e8b4a9147_1695190243384.jpg",
    estimatedCost: "$5,500",
    location: { lat: 48.8566, lng: 2.3522 }, // Example location (Paris)
  },
  {
    title: "Pergola",
    imageSrc: "https://www.veikous.com/cdn/shop/files/9_1852438b-79b2-43d2-bd88-24263a3a614a_800x.jpg?v=1713777351",
    estimatedCost: "$3,000",
    location: { lat: 28.7041, lng: 77.1025 }, // Example location (New Delhi, India)
  },
  {
    title: "Get gorgeous lights",
    imageSrc: "https://imgmedia.lbb.in/media/2023/09/650a8ce32571b42e8b4a9149_1695190243455.jpg",
    estimatedCost: "$1,500",
    location: { lat: 35.6762, lng: 139.6503 }, // Example location (Tokyo)
  },
  {
    title: "Warm Terrace",
    imageSrc: "https://lifewall.in/wp-content/uploads/2023/05/image-5-1536x1024.png",
    estimatedCost: "$2,500",
    location: { lat: -33.8688, lng: 151.2093 }, // Example location (Sydney)
  },
  {
    title: "Bespoke Gardens",
    imageSrc: "https://lifewall.in/wp-content/uploads/2023/05/image-4-1536x1024.png",
    estimatedCost: "$4,500",
    location: { lat: 55.7558, lng: 37.6173 }, // Example location (Moscow)
  },
  {
    title: "Small Pools",
    imageSrc: "https://images.homify.com/v1441055859/p/photo/image/689779/DSC_6787.jpg",
    estimatedCost: "$10,500",
    location: { lat: 37.7749, lng: -122.4194 }, // Example location (San Francisco)
  },
  // Add more ideas as needed
];

const Terrace = () => {
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 28.7041, lng: 77.1025 }); // Default map center (New Delhi)

  const handleSelection = (idea) => {
    setSelectedIdea(idea);
    setMapCenter(idea.location); // Center map on the selected idea's location
  };

  const handleSubmit = () => {
    // Logic for what happens on submission
    alert(`You selected: ${selectedIdea.title}\nEstimated Cost: ${selectedIdea.estimatedCost}`);
  };

  return (
    <Box padding={4} bgcolor="#fff">
      <Typography variant="h4" gutterBottom textAlign="center">
        Terrace Ideas
      </Typography>
      
      {/* Map Section */}
      <MapContainer center={mapCenter} zoom={4} style={{ height: "400px", width: "100%", marginBottom: '20px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedIdea && (
          <Marker position={selectedIdea.location}>
            <Popup>{selectedIdea.title}</Popup>
          </Marker>
        )}
      </MapContainer>
      
      {/* Terrace Ideas Section */}
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        {terraceIdeas.map((idea, index) => (
          <Box
            key={index}
            bgcolor={selectedIdea?.imageSrc === idea.imageSrc ? 'orange' : 'transparent'}
            borderRadius={2}
            padding={2}
            margin={1}
            width="350px" // Increased width for larger images
            boxShadow="0 2px 5px rgba(0,0,0,0.1)"
            onClick={() => handleSelection(idea)} // Handle image selection
            sx={{ cursor: 'pointer' }} // Pointer cursor on hover
          >
            <img 
              src={idea.imageSrc} 
              alt={idea.title} 
              style={{ width: '100%', height: '250px', borderRadius: '8px', objectFit: 'cover' }} // Increased height for better visibility
            />
            <Typography variant="h6" textAlign="center">{idea.title}</Typography>
            {selectedIdea?.imageSrc === idea.imageSrc && (
              <Typography variant="body1" textAlign="center" color="green">
                Estimated Cost: {idea.estimatedCost}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
      
      {/* Submit Button Section */}
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ backgroundColor: 'orange', color: '#fff' }}
          disabled={!selectedIdea} // Disable button if no idea is selected
        >
         Pick Your Favorite
        </Button>
      </Box>
    </Box>
  );
};

export default Terrace;
