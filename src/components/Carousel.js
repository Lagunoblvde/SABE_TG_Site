import React from 'react';
import Slider from 'react-slick';
import '../Styles/Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [
    require('../assets/Carousel/one.jpg'),
    require('../assets/Carousel/two.jpg'),
    require('../assets/Carousel/three.jpg'),
    require('../assets/Carousel/four.jpg'),
    require('../assets/Carousel/five.jpg'),
  ];

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
