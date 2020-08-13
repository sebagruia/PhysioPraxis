import React from "react";
import "./bootstrapCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import CaruselFoto1 from "../../assets/carousel4.webp";
import CaruselFoto2 from "../../assets/carousel2.jpg";
import CaruselFoto3 from "../../assets/carousel3.webp";
import CaruselFoto4 from "../../assets/carousel5.jpg";
import CaruselFoto5 from "../../assets/carousel61.jpg";
import CaruselFoto6 from "../../assets/carousel7.jpg";

const BootstrapCarousel = () => {
  return (
    <Carousel className="container carousel-container">
      <Carousel.Item>
        <div className="slide-image-container">
          <div className="image-container">
            <img className="d-block w-100" src={CaruselFoto1} alt="..." />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={CaruselFoto2} alt="..." />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={CaruselFoto3} alt="..." />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-image-container">
          <div className="image-container">
            <img className="d-block w-100" src={CaruselFoto4} alt="..." />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={CaruselFoto5} alt="..." />
          </div>
          <div className="image-container">
            <img className="d-block w-100" src={CaruselFoto6} alt="..." />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
