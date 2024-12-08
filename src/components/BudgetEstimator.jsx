// src/components/BudgetEstimator.jsx

import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const BudgetEstimator = () => {
  const [area, setArea] = useState('');
  const [type, setType] = useState('');
  const [estimate, setEstimate] = useState(null);

  const handleEstimate = () => {
    if (!area || !type) {
      alert('Please fill out all fields!');
      return;
    }

    // Simple estimation logic based on type and area
    const ratePerSqFt = type === 'Renovation' ? 50 : 30; // Example rates
    const totalCost = area * ratePerSqFt;
    setEstimate(totalCost);
  };

  return (
    <Box className="budget-estimator" sx={{ p: 2, maxWidth: 400, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Budget Estimator
      </Typography>

      {/* Add an image */}
      <img
        src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/10145854/most-beautiful-houses2.png" // Replace with your desired image URL
        alt="Budget Estimator"
        style={{ width: '1000%', height: 'auto', marginBottom: '16px' }}
      />

      <TextField
        label="Area (sq ft)"
        type="number"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        fullWidth
        margin="normal"
        size="small" // Make the text box smaller
        placeholder="Enter area in sq ft" // Added placeholder
      />
      <TextField
        label="Type of Work"
        select
        value={type}
        onChange={(e) => setType(e.target.value)}
        fullWidth
        margin="normal"
        size="small" // Make the text box smaller
        placeholder="Select type" // Added placeholder
      >
        <option value="Renovation">Renovation</option>
        <option value="Furnishing">Furnishing</option>
      </TextField>

      <Box textAlign="center" mt={2}>
        <Button onClick={handleEstimate} variant="contained" color="primary">
          Get Estimate
        </Button>
      </Box>

      {estimate !== null && (
        <Typography variant="h6" mt={2}>
          Estimated Budget: ${estimate}
        </Typography>
      )}
    </Box>
  );
};

export default BudgetEstimator;
