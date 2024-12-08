import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BHKSelection = () => {
  const [bhk, setBhk] = useState('');
  const [size, setSize] = useState('');
  const [roomCounts, setRoomCounts] = useState({
    livingRoom: 0,
    kitchen: 0,
    bedroom: 0,
    bathroom: 0,
    dining: 0,
  });
  const navigate = useNavigate();

  const handleBhkChange = (event) => {
    setBhk(event.target.value);
    setSize(''); // Reset size selection whenever a new BHK type is chosen
    setRoomCounts({ livingRoom: 0, kitchen: 0, bedroom: 0, bathroom: 0, dining: 0 }); // Reset room counts
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  // Get the max room count limit based on BHK type
  const getMaxRoomCount = () => {
    switch (bhk) {
      case '1bhk':
        return 1;
      case '4bhk':
        return 4;
      case '5bhk':
        return 10;
      default:
        return 3; // For 2BHK and 3BHK
    }
  };

  const handleRoomCountChange = (room) => {
    const maxCount = getMaxRoomCount();
    setRoomCounts((prevCounts) => ({
      ...prevCounts,
      [room]: Math.min(prevCounts[room] + 1, maxCount),
    }));
  };

  const handleRoomCountDecrease = (room) => {
    setRoomCounts((prevCounts) => ({
      ...prevCounts,
      [room]: Math.max(prevCounts[room] - 1, 0), // Prevent going below 0
    }));
  };

  const handleSubmit = () => {
    // Navigate to the images page when "Next" button is clicked
    navigate('/image-cards');
  };

  return (
    <Box padding={4} display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card sx={{ maxWidth: 500, width: '100%', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">Select your BHK type</Typography>
          <Box margin={2}>
            <FormControl fullWidth>
              <InputLabel id="bhk-label">BHK Type</InputLabel>
              <Select
                labelId="bhk-label"
                id="bhk"
                value={bhk}
                label="BHK Type"
                onChange={handleBhkChange}
              >
                <MenuItem value="1bhk">1 BHK</MenuItem>
                <MenuItem value="2bhk">2 BHK</MenuItem>
                <MenuItem value="3bhk">3 BHK</MenuItem>
                <MenuItem value="4bhk">4 BHK</MenuItem>
                <MenuItem value="5bhk">5 BHK+</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Size Dropdown for 2, 3, 4 BHK */}
          {(bhk === '2bhk' || bhk === '3bhk' || bhk === '4bhk') && (
            <Box margin={2}>
              <FormControl fullWidth>
                <InputLabel id="size-label">Size</InputLabel>
                <Select
                  labelId="size-label"
                  id="size"
                  value={size}
                  label="Size"
                  onChange={handleSizeChange}
                >
                  <MenuItem value="small">Small (Below 800 sq ft)</MenuItem>
                  <MenuItem value="large">Large (Above 800 sq ft)</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}

          {/* Heading for room selection */}
          <Typography variant="h6" gutterBottom align="center">
            Select the rooms you’d like us to design
          </Typography>

          {/* Room Count Selection */}
          {['livingRoom', 'kitchen', 'bedroom', 'bathroom', 'dining'].map((room) => (
            <Box key={room} display="flex" alignItems="center" justifyContent="space-between" margin={1}>
              <Typography variant="body1">{room.charAt(0).toUpperCase() + room.slice(1)}</Typography>
              <Box display="flex" alignItems="center">
                <Button
                  onClick={() => handleRoomCountDecrease(room)}
                  variant="contained"
                  sx={{
                    borderRadius: '50%',
                    minWidth: '30px',
                    height: '30px',
                    padding: 0,
                    backgroundColor: 'orange',
                    color: 'white',
                    '&:hover': { backgroundColor: '#FF9500' },
                  }}
                >
                  -
                </Button>
                <Typography marginX={1}>{roomCounts[room]}</Typography>
                <Button
                  onClick={() => handleRoomCountChange(room)}
                  variant="contained"
                  sx={{
                    borderRadius: '50%',
                    minWidth: '30px',
                    height: '30px',
                    padding: 0,
                    backgroundColor: 'orange',
                    color: 'white',
                    '&:hover': { backgroundColor: '#FF9500' },
                  }}
                >
                  +
                </Button>
              </Box>
            </Box>
          ))}

          {/* Submit button */}
          <Box display="flex" justifyContent="center" marginTop={4}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{ backgroundColor: 'orange', color: '#fff' }}
              disabled={!bhk || (bhk === '2bhk' && !size)} // Disable if no selection is made
            >
              Next
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BHKSelection;
