import React from 'react';
import './LivingRoomView.css'; // CSS file for styling

const LivingRoomView = () => {
  return (
    <div className="living-room-container">
      <div className="iframe-container">
        {/* First Panorama */}
        <iframe
          width="100%"  // Set the width to 100% of the container's width
          height="100%" // Set the height to 100% of the container's height
          frameBorder="0"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src="https://truevirtualtours.com/panorama/180758/360view"
          title="360 Panorama 1"
          className="panorama-iframe"
        ></iframe>
      </div>

      <div className="iframe-container">
        {/* Second Panorama */}
        <iframe
          width="100%"  // Set the width to 100% of the container's width
          height="100%" // Set the height to 100% of the container's height
          frameBorder="0"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src="https://truevirtualtours.com/panorama/186473/360view"
          title="360 Panorama 2"
          className="panorama-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default LivingRoomView;
