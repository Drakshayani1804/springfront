import React, { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { Box, Typography, Button } from '@mui/material';
import ConsultationBooking from '../components/ConsultationBooking';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Home = () => {
  const [mediaType, setMediaType] = useState('video'); // State to track whether 'video' or 'panorama' is selected

  // Function to handle button clicks
  const handleButtonClick = (type) => {
    setMediaType(type);
  };

  return (
    <div>
      <ImageCarousel />

      {/* Book a Free Consultation Section */}
      <Box padding={4} bgcolor="#f5f5f5" textAlign="center" boxShadow="none">
        <Typography variant="h4" gutterBottom>
          Book a Free Consultation
        </Typography>
        <Button variant="contained" color="primary" href="#consultation-booking">
          Schedule Now
        </Button>
      </Box>

      {/* Consultation Booking Form */}
      <ConsultationBooking />

      {/* Tools for Home Designing Section */}
      <Box padding={4} bgcolor="#fff" textAlign="center" boxShadow="none">
        <Typography variant="h4" gutterBottom>
          Interior Cost Estimator
        </Typography>

        <Box display="flex" justifyContent="space-around" flexWrap="wrap">
          <ServiceCard title="Full Home" description="Get an approximate costing for your full home interiors." route="/full-home" />
          <ServiceCard title="Kitchen" description="Get an approximate costing for your kitchen interior." route="/kitchen" />
          <ServiceCard title="Wardrobe" description="Get an approximate costing for your wardrobe." route="/wardrobe" />
          <ServiceCard title="Terrace Ideas" description="Estimate costs for your Terrace design." route="/terrace" />
          <ServiceCard title="Pooja Room" description="Calculate the budget for your Pooja Room makeover." route="/poojaroom" />
        </Box>
      </Box>

      {/* Our Works Section */}
      <Box padding={4} bgcolor="#f5f5f5" textAlign="center">
        <Typography variant="h4" gutterBottom>
          Our Works
        </Typography>
        <Box display="flex" justifyContent="space-around" flexWrap="wrap">
          <WorkCard imageSrc="https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/w_2560%2Cc_limit/modern-living-room-decor-1366x768.jpg" title="Living Room Design" />
          <WorkCard imageSrc="https://www.interiorzine.com/wp-content/uploads/2018/06/open-concept-kitchen-interiorzine.jpg" title="Kitchen Renovation" />
          <WorkCard imageSrc="https://i.ytimg.com/vi/CNgm_MmHWUg/maxresdefault.jpg" title="Garden Makeover" />
          <WorkCard imageSrc="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/nine-small-house-interior-design-hacks/two-seater-couches-and-wall-mounts-design-hack.jpg"title="living room"/>
          <WorkCard imageSrc="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/08/22123320/forest-themed-kids-bedroom-design.jpg" title="Child room Makeover" />
        </Box>
      </Box>

      {/* New Section for Video and Panorama */}
      <Box padding={4} bgcolor="#fff" textAlign="center" boxShadow="none">
        <Typography variant="h4" gutterBottom>
          What You Can Make
        </Typography>

        {/* Button container */}
        <Box display="flex" justifyContent="center" alignItems="center" marginBottom={2}>
          <Button
            onClick={() => handleButtonClick('video')}
            variant={mediaType === 'video' ? 'contained' : 'outlined'}
            sx={{
              borderRadius: '50px',
              backgroundColor: mediaType === 'video' ? '#333' : 'transparent',
              color: mediaType === 'video' ? '#fff' : '#333',
              marginRight: '10px',
              padding: '10px 20px',
            }}
          >
            Video
          </Button>
          <Button
            onClick={() => handleButtonClick('panorama')}
            variant={mediaType === 'panorama' ? 'contained' : 'outlined'}
            sx={{
              borderRadius: '50px',
              backgroundColor: mediaType === 'panorama' ? '#333' : 'transparent',
              color: mediaType === 'panorama' ? '#fff' : '#333',
              padding: '10px 20px',
            }}
          >
            Panorama
          </Button>
        </Box>

        {/* Video Player */}
        <Box>
          {mediaType === 'video' ? (
            <video width="1000" controls autoPlay>
              <source src="./video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video width="800" controls autoPlay>
              <source src="./video/panorama.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Box>
      </Box>

      {/* User Feedback Section */}
      <Box padding={2} bgcolor="#fff" textAlign="center">
        <Typography variant="h4" gutterBottom>
         Feedbacks
        </Typography>
        <Box display="flex" justifyContent="space-around" flexWrap="wrap">
          <FeedbackCard 
            imageSrc="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?cs=srgb&dl=pexels-minan1398-672444.jpg&fm=jpg" 
            feedback="The design process was seamless and the results exceeded my expectations!"
          />
          <FeedbackCard 
            imageSrc="https://img.freepik.com/premium-photo/beautiful-usa-girl-friendly-carefree-smile-looking-positive-relaxed-happy_564692-49201.jpg" 
            feedback="Fantastic service! My home looks amazing and the team was professional throughout."
          />
          <FeedbackCard 
            imageSrc="https://i.pinimg.com/550x/f1/79/3e/f1793e26bd3372a59d97ecfe18732749.jpg" 
            feedback="Highly recommend! They truly understand customer needs and deliver quality work."
          />
        </Box>
      </Box>

      {/* Footer Section */}
      <Box padding={2} bgcolor="#333" color="#fff" textAlign="center">
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </Typography>
        <Typography variant="body2">
          Contact: info@yourcompany.com | Phone: (123) 456-7890
        </Typography>
      </Box>
    </div>
  );
};

// Service Card Component with routing
const ServiceCard = ({ title, description, route }) => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  return (
    <Box 
      bgcolor="transparent" 
      borderRadius={2} 
      padding={2} 
      margin={1} 
      width="200px"
      sx={{
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Button 
        variant="contained" 
        style={{ backgroundColor: 'orange', color: '#fff', marginTop: '1rem' }} 
        onClick={() => navigate(route)} // Navigate to the specific route on button click
      >
        Calculate
      </Button>
    </Box>
  );
};

// Work Card Component for displaying works
const WorkCard = ({ imageSrc, title }) => {
  return (
    <Box 
      bgcolor="transparent" 
      borderRadius="50%" 
      margin={1} 
      width="200px" 
      height="200px"
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      sx={{
        overflow: 'hidden',
        border: '2px solid #ddd',
        position: 'relative',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)', // Click effect for the works section
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <img src={imageSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
    </Box>
  );
};

// Feedback Card Component for displaying user feedback
const FeedbackCard = ({ imageSrc, feedback }) => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      margin={2} 
      bgcolor="transparent"
      height="300px"
      width="250px"
      sx={{
        position: 'relative', // To position text on the image
        overflow: 'hidden', 
      }}
    >
      <img src={imageSrc} alt="User" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1rem' }} />
      <Typography variant="body1" textAlign="center">{feedback}</Typography>
    </Box>
  );
};

export default Home;
