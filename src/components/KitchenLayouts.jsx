import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const KitchenLayouts = () => {
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // State to track selected image index
  const [formData, setFormData] = useState({
    width: '',
    length: '',
    height: '',
  });

  const layoutData = [
    {
      image: 'https://images.woodenstreet.de/image/data/modular%20kitchen/fusionstraight.jpg',
      title: 'Straight Layout',
      points: [
        'Ideal for narrow spaces',
        'Efficient workflow with easy access',
        'Minimalist design for a clean look',
      ],
    },
    {
      image: 'https://a.storyblok.com/f/188515/1200x800/f20952efdb/november-2020-001.jpg',
      title: 'L-Shaped Layout',
      points: [
        'Great for corners and open spaces',
        'Offers a lot of counter space',
        'Encourages social interaction',
      ],
    },
    {
      image: 'https://www.mydomaine.com/thmb/dldSV3U8tHJ2d3EIw9pSPi50i6Y=/2500x0/filters:no_upscale():strip_icc()/180601_Proem_Ranc0776-58c2377ccda14cf5b67ec01708afc0fd.jpg',
      title: 'Open Layout',
      points: [
        'Seamless integration with living areas',
        'Bright and airy feel',
        'Promotes family interaction',
      ],
    },
    {
      image: 'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202307/parallel-kitchen-colour-combination/parallel-white-kitchen.jpg',
      title: 'Parallel Layout',
      points: [
        'Efficient for large spaces',
        'Allows multiple cooks to work simultaneously',
        'Provides ample storage and counter space',
      ],
    },
  ];

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      // Check if form fields are filled
      if (formData.width && formData.length && formData.height) {
        // Navigate to the kitchen design features page
        navigate('/kitchen-design-features', { state: { layout: layoutData[selectedImageIndex], measurements: formData } });
      } else {
        alert("Please fill in all measurement fields before proceeding!"); // Alert if no measurements are entered
      }
    } else {
      alert("Please select a layout before proceeding!"); // Alert if no layout is selected
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box padding={4}>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: 4 }}>
        Choose Your Kitchen Layout
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid container item xs={12} justifyContent="center">
          {layoutData.map((layout, index) => (
            <Grid item key={index} xs={12} sm={6} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  maxWidth: 345,
                  border: selectedImageIndex === index ? '2px solid orange' : 'none', // Orange border for selected layout
                  borderRadius: '15px', // Equal border radius for the card
                  boxShadow: 3, // Optional shadow for depth
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={layout.image}
                  alt={layout.title}
                  onClick={() => setSelectedImageIndex(index)} // Set the selected image index on click
                  sx={{
                    cursor: 'pointer',
                    borderRadius: '15px 15px 0 0', // Rounded top corners only
                    objectFit: 'cover', // Ensures the image covers the area nicely
                  }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{layout.title}</Typography>
                  <ul>
                    {layout.points.map((point, i) => (
                      <li key={i}>
                        <Typography variant="body2">{point}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Measurement Form */}
      <Box marginTop={4}>
        <Typography variant="h5" gutterBottom align="center">
          Enter Measurements (Standard Size: 11 ft)
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <TextField
            label="Width (ft)"
            name="width"
            variant="outlined"
            value={formData.width}
            onChange={handleChange}
            required
          />
          <TextField
            label="Length (ft)"
            name="length"
            variant="outlined"
            value={formData.length}
            onChange={handleChange}
            required
          />
          <TextField
            label="Height (ft)"
            name="height"
            variant="outlined"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </Box>
      </Box>

      {/* Next Button */}
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ backgroundColor: 'orange', color: '#fff' }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default KitchenLayouts;
