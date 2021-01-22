import React from "react";
import "./bootstrapCarousel.css";
import Carousel from "react-bootstrap/Carousel";

const BootstrapCarousel = ({aboutUs}) => {
  const carousel =  aboutUs.fields.carousel;
  return (
    <Carousel className="container carousel-container">
      <Carousel.Item>
        <div className="slide-image-container">
          <div className="image-container">
            <img className="d-block w-100" src={carousel[0].fields.file.url} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carousel[1].fields.file.url} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carousel[2].fields.file.url} alt="praxis_activity" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-image-container">
          <div className="image-container">
            <img className="d-block w-100" src={carousel[3].fields.file.url} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carousel[4].fields.file.url} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carousel[5].fields.file.url} alt="praxis_activity" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-image-container">
          <div className="image-container">
            <img className="d-block w-100" src={carousel[6].fields.file.url} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carousel[7].fields.file.url} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carousel[8].fields.file.url} alt="praxis_activity" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
