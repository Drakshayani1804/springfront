import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';

const Recommendations = () => {
  const [homeSize, setHomeSize] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const locations = [
    { value: 'India', label: 'India' },
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Houston', label: 'Houston' },
    // Add more locations as needed
  ];

  // Mapping of home sizes to recommendations and images
  const recommendationsData = {
    small: {
      recommendations: [
        "Consider using light colors to make the space feel larger.",
        "Utilize multi-functional furniture to save space.",
        "Incorporate mirrors to enhance light and openness."
      ],
      extraTexts: [
        "Light colors can reflect more light and create a sense of airiness in small spaces.",
        "Multi-functional furniture helps in maximizing utility without cluttering your home.",
        "Mirrors can create the illusion of depth and brightness in your interior."
      ],
      images: [
        "https://i.pinimg.com/originals/de/3d/86/de3d86e1c52002de2a7daff7502809b9.jpg",
        "https://kmhp.in/wp-content/uploads/2022/12/Untitled-2-copy-Recovered-Recovered-Recovered-Recovered-Recovered.jpg",
        "https://cdn.mos.cms.futurecdn.net/4JYQdDeJCyqffe2CQ7mCXT.jpg",
      ],
    },
    medium: {
      recommendations: [
        "Add an accent wall for a pop of color.",
        "Create defined spaces using rugs.",
        "Incorporate vertical storage solutions."
      ],
      extraTexts: [
        "An accent wall can serve as a focal point and add personality to your room.",
        "Rugs can help delineate areas in open spaces, making your layout more functional.",
        "Vertical storage solutions are great for saving floor space while keeping things organized."
      ],
      images: [
        "https://www.anikasdiylife.com/wp-content/uploads/2023/07/DIY-accent-wall-ideas-6-1200x675.jpg",
        "https://images.squarespace-cdn.com/content/v1/5cc872a00cf57da3780b6c1e/1619288867973-NCOV67GPEQ4ZQXGNGJ28/camila+isaksson++or+living4media.jpg",
        "https://www.bhg.com/thmb/uThMqBqyBYmq77oTkn6QMIQT320=/1244x0/filters:no_upscale():strip_icc()/closet-door-hanging-storage-racks-c9e91c70-b25e59c64338450fb5a0ebec3ae960e9.jpg",
      ],
    },
    large: {
      recommendations: [
        "Incorporate open shelving for a modern look.",
        "Use statement furniture pieces to fill large spaces.",
        "Consider an open floor plan for a more inviting feel."
      ],
      extraTexts: [
        "Open shelving can make your kitchen or living area feel more spacious and organized.",
        "Statement furniture adds character and can serve as a great conversation starter.",
        "An open floor plan allows for fluid movement between spaces and enhances social interactions."
      ],
      images: [
        "https://www.huntskitchendesigns.com/wp-content/uploads/2023/08/Open-Shelving-in-a-Modern-Farmhouse-Kitchen.jpg",
        "https://www.inspiredspaces.com.au/wp-content/uploads/residential-home-botttom.jpg",
        "https://www.bhg.com/thmb/YTw7HI21hzaIyAwu_d0MIg19wL4=/1504x0/filters:no_upscale():strip_icc()/pink-blue-open-concept-living-room-9a9fb413-85abea3632e84146bed7b8690b8cd16b.jpg",
      ],
    },
  };

  const handleSubmit = () => {
    // Validate input
    if (!homeSize || !location) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);

    // Determine size category based on input
    let sizeCategory;
    if (homeSize < 1000) {
      sizeCategory = 'small';
    } else if (homeSize < 2000) {
      sizeCategory = 'medium';
    } else {
      sizeCategory = 'large';
    }

    // Simulate API call with setTimeout
    setTimeout(() => {
      const newRecommendations = recommendationsData[sizeCategory].recommendations;
      const images = recommendationsData[sizeCategory].images;
      const extraTexts = recommendationsData[sizeCategory].extraTexts;

      setRecommendations(newRecommendations.map((rec, index) => ({
        text: rec,
        extraText: extraTexts[index],
        image: images[index],
      })));
      setLoading(false);
    }, 2000); // Simulate a 2 second API response
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Get Personalized Recommendations</h1>

      {/* Display the image first */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <img
          src="https://ucarecdn.com/665d42ec-ec35-4b4b-9e76-4a0d2eee613b/" // Image URL
          alt="Home Interior Recommendation"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </div>

      {/* Form fields below the image */}
      <div className="grid grid-cols-2 gap-4">
        <TextField
          label="Home Size (sq ft)"
          variant="outlined"
          fullWidth
          value={homeSize}
          onChange={(e) => setHomeSize(e.target.value)}
          type="number" // Set input type to number
          inputProps={{ min: 0 }} // Prevent negative numbers
        />
        <TextField
          select
          label="Location"
          variant="outlined"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      {/* Center the button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading} // Disable button while loading
        >
          {loading ? <CircularProgress size={24} /> : 'Get Recommendations'}
        </Button>
      </div>

      {/* Display the recommendations */}
      {recommendations.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl mb-4">Your Recommendations:</h2>

          {/* Use flexbox to alternate image positions */}
          <div>
            {recommendations.map((rec, index) => (
              <div key={index} className="mb-4" style={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', alignItems: 'center' }}>
                {index % 2 === 0 && (
                  <img
                    src={rec.image}
                    alt={`Recommendation ${index + 1}`}
                    style={{ width: '700px', height: '500px', marginRight: '16px', borderRadius: '5px' }} // Set image size
                  />
                )}
                <div style={{ maxWidth: '600px' }}>
                  <p>{rec.text}</p>
                  <p style={{ color: '#555', fontSize: '0.9em' }}>{rec.extraText}</p> {/* Extra paragraph for additional context */}
                </div>
                {index % 2 !== 0 && (
                  <img
                    src={rec.image}
                    alt={`Recommendation ${index + 1}`}
                    style={{ width: '700px', height: '500px', marginLeft: '16px', borderRadius: '5px' }} // Set image size
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
