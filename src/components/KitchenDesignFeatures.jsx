import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const KitchenDesignFeatures = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // State to manage visibility of images and descriptions
  const [visibleFeature, setVisibleFeature] = useState(null);

  // Retrieve layout and measurements from the location state
  const { layout, measurements } = location.state || {};

  // Static features data with images and descriptions
  const featuresData = [
    {
      title: 'Safety Measures',
      description: 'Implement necessary safety measures to ensure a safe cooking environment. This includes having fire extinguishers accessible, using non-slip mats, and ensuring that sharp tools are stored safely.',
      image: 'https://wonderfulkitchens.com.au/wp-content/uploads/2024/01/kitchen-fire-safety.png',
    },
    {
      title: 'Countertop Material',
      description: 'Choose from various materials for your countertops, such as granite, quartz, or butcher block. Each material has its own pros and cons regarding durability, maintenance, and aesthetics.',
      image: 'https://st.hzcdn.com/simgs/pictures/kitchens/kitchen-echelon-custom-homes-img~dc212f970ecd0e33_14-3297-1-76daf7c.jpg',
    },
    {
      title: 'Ventilation',
      description: 'Ensure proper airflow with effective ventilation systems for a comfortable kitchen. This may include range hoods, exhaust fans, and windows to allow fresh air circulation.',
      image: 'https://www.shutterstock.com/image-photo/countertop-different-cooking-utensils-ingredients-260nw-2253078797.jpg',
    },
    {
      title: 'Storage',
      description: 'Ample storage options to keep your kitchen organized and clutter-free. Consider incorporating cabinets, shelves, and drawers to maximize space efficiency.',
      image: 'https://designerati.co.uk/wp-content/uploads/2023/09/Christopher-Peters-Walnut-Cottage-11.jpg',
    },
    {
      title: 'Lighting Type',
      description: 'Choose energy-efficient lighting options for a well-lit kitchen space. Options include LED recessed lights, pendant fixtures, and under-cabinet lighting for better visibility.',
      image: 'https://www.jaquar.com/images/uploaded/Oil%20Bath%20Benefits/Kitchen%20lighting%20pillar/Basics-of-Kitchen-Lighting-Design.png',
    },
    {
      title: 'Color Palette',
      description: 'Select a harmonious color palette that reflects your style and taste. Consider using neutral tones for a timeless look or bold colors for a vibrant kitchen atmosphere.',
      image: 'https://www.shutterfly.com/ideas/wp-content/uploads/2017/06/Kitchen14.jpg',
    },
  ];

  const handleGetEstimate = () => {
    // Show a success message and return to the home page
    alert('Successfully got your estimate!');
    navigate('/'); // Navigate back to the home page
  };

  return (
    <Box padding={4}>
      <Typography variant="h4" gutterBottom align="center">
        Kitchen Design Features
      </Typography>

      <Typography variant="h6">Selected Layout: {layout.title}</Typography>
      <Typography variant="body1">Measurements: {JSON.stringify(measurements)}</Typography>

      <Grid container spacing={4} marginTop={4}>
        {featuresData.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              onMouseEnter={() => setVisibleFeature(index)} // Show description on mouse enter
              onMouseLeave={() => setVisibleFeature(null)} // Hide description on mouse leave
            >
              {visibleFeature === index ? (
                <CardContent>
                  <Typography variant="h6">{feature.title}</Typography>
                  <Typography variant="body2" color="text.secondary" marginTop={2}>
                    {feature.description}
                  </Typography>
                </CardContent>
              ) : (
                <CardMedia
                  component="img"
                  height="140"
                  image={feature.image}
                  alt={feature.title}
                  sx={{ cursor: 'pointer' }} // Change cursor to pointer
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button
          variant="contained"
          onClick={handleGetEstimate}
          sx={{ backgroundColor: 'orange', color: '#fff' }}
        >
          Get Estimate
        </Button>
      </Box>
    </Box>
  );
};

export default KitchenDesignFeatures;
