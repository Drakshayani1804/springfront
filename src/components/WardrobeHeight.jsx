import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WardrobeHeight = () => {
  const [selectedHeight, setSelectedHeight] = useState('');
  const [selectedWardrobeType, setSelectedWardrobeType] = useState('');
  const [selectedDoorHandle, setSelectedDoorHandle] = useState('');
  const [selectedLighting, setSelectedLighting] = useState('');
  const navigate = useNavigate();

  const handleHeightChange = (height) => {
    setSelectedHeight(height);
  };

  const handleWardrobeTypeChange = (type) => {
    setSelectedWardrobeType(type);
  };

  const handleDoorHandleChange = (handle) => {
    setSelectedDoorHandle(handle);
  };

  const handleLightingChange = (lighting) => {
    setSelectedLighting(lighting);
  };

  
  const handleSubmit = () => {
    if (selectedHeight && selectedWardrobeType && selectedDoorHandle && selectedLighting) {
     // Show a popup message
     alert('Successfully selected!');

     // Navigate to the home page after 2 seconds
     setTimeout(() => {
       navigate('/'); // Navigate to the home page
     }, 2000);
   }   
     else {
      alert('Please select height, type of wardrobe, door/handle type, and lighting.');
    }
  };

  const wardrobeTypes = [
    { name: 'Sliding Wardrobe', image: 'https://veneto.co.in/wp-content/uploads/2023/02/veneto-5.webp' },
    { name: 'Walk-in Wardrobe', image: 'https://static.wixstatic.com/media/29ebc0_b32e529ffc784a0396497ec6d5482aac~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/29ebc0_b32e529ffc784a0396497ec6d5482aac~mv2.jpg' },
    { name: 'Standalone Wardrobe', image: 'https://www.cuckooland.com/blog/wp-content/uploads/2020/06/All-Black-Simple-4-Door-Wardrobe.jpg' },
    { name: 'Mirrored Wardrobe', image: 'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2021/10/21045635/mirrored-wardrobe-cover.png' },
    { name: 'Customized Wardrobe', image: 'https://telkitchens.in/srckchn/uploads/2022/03/13-1-scaled.jpg' },
    { name: 'Glass Wardrobe', image: 'https://i.pinimg.com/originals/3e/0c/ee/3e0cee723bf929f7a704e291a61ac11e.jpg' },
    { name: 'Laminated Wardrobe', image: 'https://advancelam.com/wp-content/uploads/2023/07/Marble-laminate-wardrobe.jpg' },
    { name: 'Corner Wardrobe', image: 'https://skondesign.com/wp-content/uploads/2023/01/FD09BA70-14CF-4027-A158-F63E41EBD65B.jpg' },
    { name: 'Double Door Wardrobe', image: 'https://www.ikea.com/in/en/range-categorisation/images/fitted-wardrobes-43632.jpeg' },
    { name: 'fitted Wardrobe', image: 'https://myfittedbedroom.com/wp-content/uploads/2023/05/image00002-1-scaled.jpeg' },
  ];

  const doorAndHandleTypes = [
    { name: 'Hinged Door', image: 'https://aleamodular.com/wp-content/uploads/2022/11/image6.jpg' },
    { name: 'Sliding Door', image: 'https://www.slido.in/wp-content/uploads/2024/06/modern-sliding-wardrobe-doors.png' },
    { name: 'Mirrored Door', image: 'https://5.imimg.com/data5/PW/QZ/SC/SELLER-29335740/wardrobe-mirror-doors-500x500.jpg' },
    { name: 'Bifold Door', image: 'https://image.made-in-china.com/202f0j00FpTqoYAdwNkZ/Prima-Bi-Fold-Wardrobe-Doors-Space-Saving-Wardrobe.webp' },
    { name: 'Accordion Door', image: 'https://i.pinimg.com/originals/d5/96/5f/d5965fb44bbd262547ef167407a3f595.jpg' },
    { name: 'Wooden Handle', image: 'https://m.media-amazon.com/images/I/51kM4IWZiCL._AC_UF1000,1000_QL80_.jpg' },
    { name: 'Knobs', image: 'https://mantara.in/cdn/shop/files/alhambra-knob-m-a-n-t-a-r-a-1.jpg?v=1722859627' },
    { name: 'Recessed Handles', image: 'https://image.architonic.com/img_pro1-6/155/9433/ante-e-manglie-handle-hingeddoor-glam-7-sq.jpg' },
    { name: 'Metal Handle', image: 'https://www.jiomart.com/images/product/original/rvalepdy6b/spitze-by-everyday-d10-wardrobe-door-handle-metal-door-handles-for-drawers-and-cabinets-long-wardrobe-handle-with-comfy-grip-pack-of-2-24-inches-600-mm-satin-silver-product-images-orvalepdy6b-p602974334-0-202307061450.jpg?im=Resize=(420,420)' },
    { name: 'Plastic Handle', image: 'https://m.media-amazon.com/images/I/71E9PSMXPiL._AC_UF1000,1000_QL80_.jpg' },
  ];

  const lightingOptions = [
    { name: 'Internal Lighting', image: 'https://www.lepro.com/learning/wp-content/uploads/2020/07/1-2.jpg' },
    { name: 'Overhead Lighting', image: 'https://www.ledyilighting.com/wp-content/uploads/2024/07/Try-A-Trio-Of-Pendants.jpg' },
    { name: 'Sensor Lights', image: 'https://image.made-in-china.com/2f0j00jWdbzvYyMros/Magnetic-LED-Closet-Light-Motion-Sensor-Rechargeable-Stair-Lamp-Wardrobe-Lights-for-Kitchen-Home.webp' },
    { name: 'LED Lighting', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CXR_f7eDzmJSLpac9tCz87En9uW63515Pw&s' },
    { name: 'Backlit mirror', image: 'https://i.etsystatic.com/26280942/c/1574/1574/121/235/il/e602ca/5988866217/il_300x300.5988866217_b1fh.jpg' },
    
  ];

  return (
    <div className="wardrobe-height-container">
      <h2>What is the height of your wardrobe?</h2>
      <p style={{ backgroundColor: '#f3e5ab', padding: '10px' }}>
        Standard size has been set for your convenience.
      </p>
      <div className="height-options">
        {['4 ft', '6 ft', '7 ft', '9 ft'].map((height) => (
          <label key={height} style={{ display: 'block', margin: '10px 0' }}>
            <input
              type="radio"
              value={height}
              checked={selectedHeight === height}
              onChange={() => handleHeightChange(height)}
            />
            {height}
          </label>
        ))}
      </div>

      <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Select Type of Wardrobe:</h2>
      <div className="wardrobe-types" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {wardrobeTypes.map((wardrobe) => (
          <div 
            key={wardrobe.name} 
            style={{ 
              margin: '10px', 
              border: selectedWardrobeType === wardrobe.name ? '2px solid orange' : '1px solid #ccc', 
              borderRadius: '8px', 
              textAlign: 'center', 
              width: '250px', 
              height: '300px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={() => handleWardrobeTypeChange(wardrobe.name)}
          >
            <img 
              src={wardrobe.image} 
              alt={wardrobe.name} 
              style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '8px', 
                objectFit: 'cover' 
              }} 
            />
            <p style={{ 
              position: 'absolute', 
              bottom: '10px', 
              left: '0',
              right: '0',
              margin: '0',
              fontWeight: 'bold',
              backgroundColor: 'rgba(255, 255, 255, 0.8)' 
            }}>{wardrobe.name}</p>
          </div>
        ))}
      </div>

      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Wardrobe Doors and Handles:</h1>
      <div className="door-handle-types" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {doorAndHandleTypes.map((doorHandle) => (
          <div
            key={doorHandle.name}
            style={{
              margin: '10px',
              border: selectedDoorHandle === doorHandle.name ? '2px solid orange' : '1px solid #ccc',
              borderRadius: '8px',
              textAlign: 'center',
              width: '250px',
              height: '300px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={() => handleDoorHandleChange(doorHandle.name)}
          >
            <img
              src={doorHandle.image}
              alt={doorHandle.name}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
            <p style={{
              position: 'absolute',
              bottom: '10px',
              left: '0',
              right: '0',
              margin: '0',
              fontWeight: 'bold',
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}>{doorHandle.name}</p>
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Select Lighting Option:</h2>
      <div className="lighting-options" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {lightingOptions.map((lighting) => (
          <div 
            key={lighting.name} 
            style={{ 
              margin: '10px', 
              border: selectedLighting === lighting.name ? '2px solid orange' : '1px solid #ccc', 
              borderRadius: '8px', 
              textAlign: 'center', 
              width: '250px', 
              height: '300px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={() => handleLightingChange(lighting.name)}
          >
            <img 
              src={lighting.image} 
              alt={lighting.name} 
              style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '8px', 
                objectFit: 'cover' 
              }} 
            />
            <p style={{ 
              position: 'absolute', 
              bottom: '10px', 
              left: '0',
              right: '0',
              margin: '0',
              fontWeight: 'bold',
              backgroundColor: 'rgba(255, 255, 255, 0.8)' 
            }}>{lighting.name}</p>
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} style={{ 
        display: 'block',
        margin: '30px auto',
        padding: '10px 20px',
        backgroundColor: 'orange',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer', }}>Submit</button>
    </div>
  );
};

export default WardrobeHeight;
