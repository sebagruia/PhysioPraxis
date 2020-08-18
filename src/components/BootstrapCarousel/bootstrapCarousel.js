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
            <img className="d-block w-100" src={carouselImages[0]} alt="..." />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[1]} alt="..." />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[2]} alt="..." />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-image-container">
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[3]} alt="..." />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[4]} alt="..." />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={carouselImages[5]} alt="..." />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
