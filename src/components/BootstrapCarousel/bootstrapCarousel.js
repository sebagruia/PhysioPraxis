import React from "react";
import "./bootstrapCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import {carouselImages} from "../../DATA";

const BootstrapCarousel = () => {
  return (
    <Carousel className="container carousel-container">
      <Carousel.Item>
        <div className="slide-image-container">
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[0]} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[1]} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[2]} alt="praxis_activity" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-image-container">
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[3]} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[4]} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[5]} alt="praxis_activity" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-image-container">
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[6]} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[7]} alt="praxis_activity" />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[8]} alt="praxis_activity" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
