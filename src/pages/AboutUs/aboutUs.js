import React from "react";
import "./aboutUs.css";
import AboutUsWorkinHours from "../../components/AboutUsWorkinHours/aboutUsWorkingHours";
import Socials from "../../components/Socials/socials";
import BootstrapCarousel from "../../components/BootstrapCarousel/bootstrapCarousel";

const AboutUs = () => {
  return (
    <div className="container-fluid aboutUs">
      <div className="header">
     
      </div>
      <div className="aboutUs-presentation container">
        <AboutUsWorkinHours />
        <div className="aboutUs-text">
        
          <div className="aboutUs-text-shortPresentation">
            <hr className="aboutUs-text-hr"></hr>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              turpis justo volutpat in quis eget magna tristique semper. Ac nam
              nibh lorem aliquam venenatis tellus duis. Elit erat pulvinar amet
              fringilla sed tincidunt viverra. Porta feugiat id adipiscing
              platea eros, lectus sed. Dignissim in blandit amet pretium etiam
              sem id vestibulum. Lorem tellus nam est sed.
            </h6>
            <hr className="aboutUs-text-hr"></hr>
          </div>
          <div className="aboutUs-text-description">
            <div className="firstColumn">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
              elit vitae etiam amet, commodo, aliquam felis. Viverra egestas sed
              convallis nec et mauris, fringilla integer augue. Tempus eget
              netus bibendum malesuada. Maecenas ornare lorem vulputate enim sed
              in. Ultricies ac sed magna enim, massa ac quam. Maecenas accumsan,
              malesuada pharetra, ut tristique leo blandit. Odio a interdum
              dolor vitae id ipsum porttitor. Eget arcu ut a nisi at
              pellentesque sit auctor at. Fermentum pharetra posuere fermentum
              amet ullamcorper curabitur aenean aenean mauris. Et posuere magna
              ipsum dolor. Semper nisi at condimentum cras ullamcorper elit quis
              sed ridiculus. Cras sagittis urna venenatis, porta etiam mauris.
              Viverra ornare elementum consequat dictumst. pendisse faucibus
              dolor risus, facilisis duis semper.
            </div>
            <div className="secondColumn">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
              elit vitae etiam amet, commodo, aliquam felis. Viverra egestas sed
              convallis nec et mauris, fringilla integer augue. Tempus eget
              netus bibendum malesuada. Maecenas ornare lorem vulputate enim sed
              in. Ultricies ac sed magna enim, massa ac quam. Maecenas accumsan,
              malesuada pharetra, ut tristique leo blandit. Odio a interdum
              dolor vitae id ipsum porttitor. Eget arcu ut a nisi at
              pellentesque sit auctor at. Fermentum pharetra posuere fermentum
              amet ullamcorper curabitur aenean aenean mauris. Et posuere magna
              ipsum dolor. Semper nisi at condimentum cras ullamcorper elit quis
              sed ridiculus. Cras sagittis urna venenatis, porta etiam mauris.
              Viverra ornare elementum consequat dictumst. pendisse faucibus
              dolor risus, facilisis duis semper.
            </div>
          </div>
          <hr className="aboutUs-text-hr"></hr>
          <Socials />
        </div>
      </div>
      <BootstrapCarousel />
    </div>
  );
};

export default AboutUs;
