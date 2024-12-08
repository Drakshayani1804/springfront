import React from 'react';
import { Box, Typography } from '@mui/material';

// Sample images and their estimated costs for the Pooja Room
const poojaRoomItems = [
  {
    id: 1,
    title: 'Traditional Wooden Mandir',
    imageSrc: 'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2019/11/15095615/wooden-mandir-design-cover.png',
    estimatedCost: 3000,
    description: 'A beautiful wooden mandir with traditional carvings, perfect for a homely pooja space.',
    type: 'Wooden',
  },
  {
    id: 1,
    title: 'Traditional Wooden Mandir',
    imageSrc: 'https://i.ytimg.com/vi/LTIBp9WSU5A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAciHHEM8xV9jmcWHbDk4tJf-x8YQ',
    estimatedCost: 5000,
    description: 'A beautiful wooden mandir with traditional carvings, perfect for a homely pooja space.',
    type: 'Wooden',
  },
  {
    id: 2,
    title: 'Modern Wall Mounted Mandir',
    imageSrc: 'https://media.designcafe.com/wp-content/uploads/2020/09/30122619/wall-mounted-mandir-designs-with-box-shaped-mandir-design-1.jpg',
    estimatedCost: 8000,
    description: 'Sleek and modern, this wall-mounted mandir design saves space and adds elegance.',
    type: 'Modern',
  },
  {
    id: 2,
    title: 'Modern Wall Mounted Mandir',
    imageSrc: 'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/11/26160055/mandir-design-in-wall.jpg',
    estimatedCost: 8000,
    description: 'Sleek and modern, this wall-mounted mandir design saves space and adds elegance.',
    type: 'Modern',
  },
  {
    id: 3,
    title: 'Modern Marble Mandir',
    imageSrc: 'https://www.decorpot.com/images/91767480010-best-marble-temple-for-home-ideas-in-2024.jpg',
    estimatedCost: 8000,
    description: 'Sleek and modern, this  Marble mandir design saves space and adds elegance.',
    type: 'Marble',
  },
  {
    id: 3,
    title: 'Modern Marble Mandir',
    imageSrc: 'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/01/22114341/marble-mandir-designs-for-indian-homes-1.jpg',
    estimatedCost: 8000,
    description: 'Sleek and modern, this  Marble mandir design saves space and adds elegance.',
    type: 'Marble',
  },
  {
    id: 4,
    title: 'Modern Minimalistic Mandir',
    imageSrc: 'https://i.ytimg.com/vi/kNFmo7ZSulg/maxresdefault.jpg',
    estimatedCost: 8000,
    description: 'Sleek and modern, this Minimalistic  mandir design saves space and adds elegance.',
    type: 'Minimalistic',
  },
  {
    id: 4,
    title: 'Modern Minimalistic Mandir',
    imageSrc: 'https://homebazaar-blog.s3.ap-south-1.amazonaws.com/knowledge/wp-content/uploads/2023/03/16115038/Modern-Mandir-Design-For-Home.jpg',
    estimatedCost: 8000,
    description: 'Sleek and modern, this Minimalistic mandir design saves space and adds elegance.',
    type: 'Minimalistic',
  },
  {
    id: 5,
    title: 'Modern Glass Mandir',
    imageSrc: 'https://i.pinimg.com/736x/9c/1f/19/9c1f19b0f1bed5a6294dcd882410e87e.jpg',
    estimatedCost: 8000,
    description: 'Sleek and modern, this Glass mandir design saves space and adds elegance.',
    type: 'Glass',
  },
  {
    id: 5,
    title: 'Modern Glass Mandir',
    imageSrc: 'https://in.saint-gobain-glass.com/sites/in.saint-gobain-glass.com/files/inline-images/pooja%20room%20glass%20door%20designs.jpg',
    estimatedCost: 8000,
    description: 'Sleek and modern, this Glass mandir design saves space and adds elegance.',
    type: 'Glass',
  },

  // Other items...
];

const PoojaRoom = () => {
  // Group items by type
  const groupedItems = {
    'Wooden Mandirs': poojaRoomItems.filter(item => item.type === 'Wooden'),
    'Modern Mandirs': poojaRoomItems.filter(item => item.type === 'Modern'),
    'Marble Mandirs': poojaRoomItems.filter(item => item.type === 'Marble'),
    'Minimalistic Mandirs': poojaRoomItems.filter(item => item.type === 'Minimalistic'),
    'Glass Mandirs': poojaRoomItems.filter(item => item.type === 'Glass'),
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Pooja Room Designs</Typography>
      {Object.keys(groupedItems).map((type, typeIndex) => (
        <Box key={type} sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>{type}</Typography>
          {groupedItems[type].map((item, index) => (
            <Box
              key={item.id}
              display="flex"
              flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}  // Alternating layout
              alignItems="center"
              sx={{ marginBottom: 4 }}
            >
              <Box sx={{ flex: '1 1 50%', padding: 2 }}>
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  style={{ width: '100%', borderRadius: 8 }}
                />
              </Box>
              <Box sx={{ flex: '1 1 50%', padding: 2 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  Estimated Cost: ₹{item.estimatedCost}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default PoojaRoom;
