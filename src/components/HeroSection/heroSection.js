import React from "react";
import "./heroSection.css";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const HeroSection = ({ homePageContent }) => {
  const{descriptionBox1, descriptionBox2, descriptionBox3} = homePageContent;
  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p class="contentful_paragraph">${next(node.content)}</p>`,
    },
  };
  return (
    <div className="container-fluid hero-section">
      <div className="hero-img">
        <div className="container hero-img-title-container">
          <div className="full-title" lang="de">
            <div className="background-for-text">
              <h1 className="hero-img-title">
                Praxis<span className="hero-img-title-span"> für</span>
              </h1>
            </div>
            <div className="background-for-text">
              <h1 className="hero-img-title">Physiotherapie</h1>
            </div>
            <div className="moto">
              <h6 className="moto-text">QUALITÄT</h6>
              <h6 className="moto-text">RESPEKT</h6>
              <h6 className="moto-text">INNOVATION</h6>
            </div>
          </div>
        </div>
      </div>
      <div className=" container hero-description">
        <div className="box box1">
          <div className="boxTitle">
            <h4>Professionelle Leistungen</h4>
          </div>
          <div className="boxTitle-text">
            <div dangerouslySetInnerHTML={{__html:documentToHtmlString(descriptionBox1, RICHTEXT_OPTIONS)}}>
            </div>
          </div>
        </div>
        <div className="box box2">
          <div className="boxTitle-text">
          <div dangerouslySetInnerHTML={{__html:documentToHtmlString(descriptionBox2, RICHTEXT_OPTIONS)}}>
            </div>
          </div>
          <div className="boxTitle boxTitle-box2">
            <h4>Krankenkassen Partner</h4>
          </div>
        </div>
        <div className="box box3">
          <div className="boxTitle">
            <h4>Darmstadt Mitte</h4>
          </div>
          <div className="boxTitle-text">
          <div dangerouslySetInnerHTML={{__html:documentToHtmlString(descriptionBox3, RICHTEXT_OPTIONS)}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
