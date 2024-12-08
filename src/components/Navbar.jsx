import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, TextField, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the ShoppingCart icon

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to the SearchResults page with the query as a parameter
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'orange' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Property Enhancement
          </Typography>

          {/* Search bar */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSearchSubmit}>
              <TextField
                variant="outlined"
                placeholder="Search..."
                size="small"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ backgroundColor: 'white', borderRadius: 1 }}
              />
            </form>
          </Box>

          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/recommendations">Recommendations</Button>
          <Button color="inherit" component={Link} to="/tools">Tools</Button>
          <Button color="inherit" component={Link} to="/about">About Us</Button>
        
          <Button color="inherit" component={Link} to="/livingroomview">Living Room View</Button>
          
          {/* Cart icon instead of text */}
          <Button color="inherit" component={Link} to="/cart">
            <ShoppingCartIcon />
          </Button>
          
          <Button color="inherit" component={Link} to="/signin">Sign In</Button>
          <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
