import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardMedia, Snackbar, Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const EstimationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedImages } = location.state || {};

 

  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setTimeout(() => {
      navigate('/'); // Navigate back to the home page after a short delay
    }, 2000); // Delay for 2 seconds before navigating
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box padding={4}>
      <Typography variant="h4" gutterBottom align="center">Selected Design By You</Typography>

      {/* Display all selected images */}
      {selectedImages && (
        <Grid container spacing={2}>
          {Object.entries(selectedImages).map(([section, imageData]) => (
            <Grid item xs={12} sm={6} md={4} key={section}>
              <Card sx={{ maxWidth: 345, marginBottom: 4 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={imageData.image}
                  alt={imageData.title}
                />
                <Typography variant="h6" align="center">{imageData.title}</Typography>
                <Typography variant="subtitle2" align="center">{section.replace(/([A-Z])/g, ' $1')}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Form for user input */}
      <form onSubmit={handleSubmit}>
       
        <Box display="flex" justifyContent="center" marginTop={4}>
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: 'orange', color: '#fff' }}
          >
            Get Estimate
          </Button>
        </Box>
      </form>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message="Successfully got estimated items!"
        autoHideDuration={2000}
      />
    </Box>
  );
};

export default EstimationForm;
