import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
} from '@mui/material';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card payment
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Simulate payment submission
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 500, margin: 'auto', boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      {isSubmitted ? (
        <Typography variant="h6" color="success.main">
          Payment Successful! Thank you for your purchase.
        </Typography>
      ) : (
        <>
          <Typography variant="body1" gutterBottom>
            Please select your payment method and proceed with the details.
          </Typography>

          {/* Payment Method Selection */}
          <RadioGroup
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            sx={{ marginBottom: 2 }}
          >
            <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
            <FormControlLabel value="paytm" control={<Radio />} label="Paytm" />
          </RadioGroup>

          {paymentMethod === 'card' ? (
            <form onSubmit={handleSubmit}>
              {/* Card Payment Fields */}
              <Box sx={{ display: 'flex', alignItems: 'center', marginY: 1 }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="Visa"
                  width="40"
                  height="25"
                  style={{ marginRight: '10px' }}
                />
                <TextField
                  label="Card Number"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Box>
              <Grid container spacing={2} sx={{ marginY: 1 }}>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Date (MM/YY)"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CVV"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    type="password"
                  />
                </Grid>
              </Grid>
              <TextField
                label="Name on Card"
                name="nameOnCard"
                value={paymentDetails.nameOnCard}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Proceed to Pay
              </Button>
            </form>
          ) : (
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <Typography variant="h6" gutterBottom>
                Scan the QR Code to Pay via Paytm
              </Typography>
              <img
                src="https://www.lyra.com/in/wp-content/uploads/sites/8/2020/05/OQ-Code-Payments.png" // Replace with actual QR code URL
                alt="Paytm QR Code"
                style={{ width: '200px', height: '200px', marginBottom: '10px' }}
              />
              <Typography variant="body2" color="textSecondary">
                Use your Paytm app to scan the code and complete the payment.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={() => setIsSubmitted(true)}
              >
                Confirm Payment
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Checkout;
