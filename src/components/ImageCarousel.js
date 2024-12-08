// src/components/ImageCarousel.js

import React from 'react';
import Slider from 'react-slick';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Duration of autoplay (3 seconds)
  };

  const images = [
    {
      src: 'https://images.adsttc.com/media/images/5f2c/8545/b357/65db/c000/008c/large_jpg/FEAT_ID.jpg?1596753213',
      caption: 'Passion for Quality',
    },
    {
      src: 'https://www.home-designing.com/wp-content/uploads/2016/04/stylish-bedside-lighting-in-minimalist-room.jpg',
      caption: '',
    },
    {
      src: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2019/12/20201751/Blog-Kids-Room-Lighting.jpg',
      caption: '',
    },
    {
      src: 'https://mygardenlife.com/wp-content/uploads/2023/01/2018_03_outdoor-seating_sofas-pillows-lanterns-string-lights-night-garden_lead.jpg',
      caption: '',
    },
  ];

  return (
    <div className="carousel-container w-full h-auto"> {/* Set height to auto */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item relative w-full h-auto"> {/* Set height to auto */}
            <img 
              src={image.src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-auto object-cover" // Full width, maintain aspect ratio
            />
            {image.caption && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg"> {/* Center the caption */}
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
