import React, { useState } from 'react';
import { Typography, Box, Grid, IconButton, Button, Divider } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Paintings', price: 20, quantity: 1 },
    { id: 2, name: 'Wall decor', price: 50, quantity: 2 },
    

  ]);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is currently empty.</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {cartItems.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 1,
                    border: '1px solid #ccc',
                    borderRadius: 1,
                  }}
                >
                  <Box>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2">Price: ${item.price}</Typography>
                    <Typography variant="body2">
                      Subtotal: ${item.price * item.quantity}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      color="primary"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      <Remove />
                    </IconButton>
                    <Typography variant="body1" sx={{ mx: 2 }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      color="primary"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      <Add />
                    </IconButton>
                  </Box>

                  <IconButton
                    color="secondary"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6">
              Total: ${calculateTotal().toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleCheckout} // Handle checkout action
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
