import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { TextField, Button, Typography, Box, Snackbar } from '@mui/material';

const ConsultationBooking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Generate a preview for images
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result); // Set the preview image URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBooking = () => {
    if (!name || !email || !date || !selectedFile) {
      alert('Please fill out all fields and upload a file!');
      return;
    }

    // EmailJS sending logic
    const formData = {
      name,
      email,
      date,
    };

    emailjs
      .send(
        'service_98vxa9v', // Replace with your EmailJS Service ID
        'template_b3wy95g', // Replace with your EmailJS Template ID
        formData,
        'VBzrhfELGVeM8LzL0' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response.text);
          setEmailSent(true);
          setName('');
          setEmail('');
          setDate('');
          setSelectedFile(null);
          setPreview('');
        },
        (error) => {
          console.error('Error sending email:', error);
          setEmailError(true);
        }
      );
  };

  return (
    <Box sx={{ maxWidth: '100vw', mx: 'auto', pb: 4 }} id="consultation-booking">
      {/* Title: Book a Consultation */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ padding: '16px 0', fontWeight: 'bold' }}
      >
        Book a Consultation
      </Typography>

      {/* Full-width Image with increased height */}
      <Box sx={{ position: 'relative', width: '100%', mb: 2 }}>
        <img
          src="https://www.skygreeninterior.com/wp-content/uploads/2023/06/Interior-consulting.jpg"
          alt="Consultation Address"
          style={{
            width: '100%',
            height: '700px',
            objectFit: 'cover',
            display: 'block',
            margin: '0 auto',
          }}
        />
        {/* Overlay Form Positioned in the Middle of the Image */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            p: 3,
            borderRadius: 2,
            maxWidth: '400px',
            width: '90%',
          }}
        >
          <TextField
            label="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            size="medium"
            variant="outlined"
          />
          <TextField
            label="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            size="medium"
            variant="outlined"
          />
          <TextField
            label="Preferred Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
            size="medium"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{ mt: 2 }}
          >
            Upload File
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>

          {/* Preview the uploaded file */}
          {preview && (
            <Box
              sx={{
                mt: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="body1">Preview:</Typography>
              <img
                src={preview}
                alt="Selected File"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  marginTop: '8px',
                }}
              />
            </Box>
          )}

          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBooking}
              sx={{
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#155a9e',
                },
              }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={emailSent}
        autoHideDuration={4000}
        onClose={() => setEmailSent(false)}
        message="Email sent successfully!"
      />

      {/* Error Snackbar */}
      <Snackbar
        open={emailError}
        autoHideDuration={4000}
        onClose={() => setEmailError(false)}
        message="Failed to send email. Please try again."
      />
    </Box>
  );
};

export default ConsultationBooking;
