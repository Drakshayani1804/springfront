import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const message = await response.text();
        alert(message);
        navigate('/'); // Redirect to homepage or another page
      } else {
        const error = await response.text();
        alert(`Error: ${error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during sign-in. Please try again.');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/thumbnails/031/420/179/small_2x/simple-chair-interior-design-with-simple-white-copy-space-background-ai-generated-photo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '030303', fontWeight: 'bold' }}
      >
        Sign In
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        width="300px"
        gap={2}
        p={3}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '10px',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#ff8033',
            '&:hover': {
              backgroundColor: '#e6732f',
            },
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
