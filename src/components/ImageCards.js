import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ImageCards = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState({
    livingRoom: null,
    diningRoom: null,
    bathroom: null,
    kitchen: null,
    bedroom: null,
  });

  const sections = [
    {
      title: 'Living Room Designs',
      sectionKey: 'livingRoom',
      cards: [
        { image: 'https://i.pinimg.com/564x/80/0a/c0/800ac0ad32e58c20163d4579fc22128b.jpg', title: 'Living Room Design 1' },
        { image: 'https://edwardgeorgelondon.com/wp-content/uploads/content/modern_living_room3.png', title: 'Living Room Design 2' },
        { image: 'https://www.home-designing.com/wp-content/uploads/2018/01/zebra-rug-spotty-artwork-animal-living-room.jpg', title: 'Living Room Design 3' },
        { image: 'https://i.pinimg.com/originals/73/7a/ea/737aea1388d490926b0b9c58b8442ea3.jpg', title: 'Living Room Design 4' },
      ],
    },
    {
      title: 'Dining Room Designs',
      sectionKey: 'diningRoom',
      cards: [
        { image: 'https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2013/4/25/0/DP_Joel-Snayd-white-country-dining-room_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1405485055886.jpeg', title: 'Dining Room Design 1' },
        { image: 'https://www.home-designing.com/wp-content/uploads/2018/12/luxury-dining-room-chair-set.jpg', title: 'Dining Room Design 2' },
        { image: 'https://media.designcafe.com/wp-content/uploads/2020/01/21004041/dining-room-furniture-design-for-your-home.jpg', title: 'Dining Room Design 3' },
        { image: 'https://dlifeinteriors.com/wp-content/uploads/2022/03/copper-lattice.jpg', title: 'Dining Room Design 4' },
      ],
    },
    {
      title: 'Bathroom Designs',
      sectionKey: 'bathroom',
      cards: [
        { image: 'https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/bathroom-1713420270-gtUqd/br-29-1719573012-mtLKs.jpg', title: 'Bathroom Design 1' },
        { image: 'https://i.pinimg.com/736x/67/ff/5c/67ff5cd8f8a2dfe9d9f0c72c822fd9f5.jpg', title: 'Bathroom Design 2' },
        { image: 'https://img.freepik.com/premium-photo/sleek-pink-bathroom-with-modern-designs_674594-17557.jpg', title: 'Bathroom Design 3' },
        { image: 'https://hips.hearstapps.com/hmg-prod/images/ken-fulk09-1526332905.jpg?crop=1xw:0.9370960792761741xh;center,top&resize=1200:*', title: 'Bathroom Design 4' },
      ],
    },
    {
      title: 'Kitchen Designs',
      sectionKey: 'kitchen',
      cards: [
        { image: 'https://hips.hearstapps.com/hmg-prod/images/kitchen-remodel-ideas-hbx120121kristinfine-008-1651168839.jpg', title: 'Kitchen Design 1' },
        { image: 'https://st.hzcdn.com/simgs/pictures/kitchens/kitchen-echelon-custom-homes-img~dc212f970ecd0e33_14-3297-1-76daf7c.jpg', title: 'Kitchen Design 2' },
        { image: 'https://edwardgeorgelondon.com/wp-content/uploads/2024/08/Fall-garland-framing-kitchen-window-adding-coziness.webp', title: 'Kitchen Design 3' },
        { image: 'https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/oMAk6TAaBIDzkkwrBWiAEQ2MUBP2yAgEi0oC6e~tplv-tej9nj120t-origin.webp', title: 'Kitchen Design 4' },
      ],
    },
    {
      title: 'Bedroom Designs',
      sectionKey: 'bedroom',
      cards: [
        { image: 'https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D', title: 'Bedroom Design 1' },
        { image: 'https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/87548199-8d16-4ef9-8936-3deddb562666/_353fe5d1-7914-4789-baa4-ce5fe493a977.jpeg?format=500w', title: 'Bedroom Design 2' },
        { image: 'https://st.hzcdn.com/simgs/feb15ca30249c3b3_8-4086/traditional-kids.jpg', title: 'Bedroom Design 3' },
        { image: 'https://www.decorpot.com/images/184430647top-10-kids-bedroom-interior-design-ideas-for-home-2023-2024.jpg', title: 'Bedroom Design 4' },
      ],
    },
  ];

  const handleCardClick = (sectionKey, card) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [sectionKey]: card, // Store the selected image for this section
    }));
  };

  const handleNext = () => {
    // Ensure all sections have a selected image
    if (Object.values(selectedImages).every((image) => image !== null)) {
      navigate('/estimation-form', { state: { selectedImages } });
    } else {
      alert('Please select an image from each section before proceeding.');
    }
  };

  return (
    <Box padding={4}>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: 4 }}>
        Choose Your Design
      </Typography>

      {sections.map((section) => (
        <Box key={section.sectionKey} marginBottom={6}>
          <Typography variant="h5" gutterBottom>{section.title}</Typography>
          <Grid container spacing={2} justifyContent="center">
            {section.cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    maxWidth: 345,
                    border: selectedImages[section.sectionKey]?.image === card.image ? '2px solid orange' : 'none',
                    borderRadius: '15px',
                    boxShadow: 3,
                  }}
                  onClick={() => handleCardClick(section.sectionKey, card)} // Store the selected image
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt={card.title}
                    sx={{ cursor: 'pointer', borderRadius: '15px 15px 0 0', objectFit: 'cover' }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

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

export default ImageCards;
