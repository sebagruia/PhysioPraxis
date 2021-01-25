import React, { useEffect, useRef } from "react";
import "./serviceDescription.css";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { withRouter } from "react-router-dom";
import Button from "../../components/Button/button";

const ServiceDescription = ({ history }) => {
  const refToServiceImg = useRef(null);

  useEffect(() => {
    refToServiceImg.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  const handleOnClick = () => {
    history.goBack();
  };

  const { service } = history.location.state;
  const image = service.fields.image.fields.file.url;
  const title = service.fields.title;
  const description = service.fields.serviceDescription;

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p class="serviceDescription_paragraph">${next(node.content)}</p>`,
      [BLOCKS.LIST_ITEM]: (node, next) =>
        `<li class="aboutUs_paragraph_list">${next(node.content)}</li>`,
    },
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Praxis für Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibuläre Dysfunktionen Heiß- und Kalttherapie"
        />
      </Helmet>
      <div className="serviceDescription container-fluid">
        <div className="serviceDescription-container container">
          <div
            className="serviceDescription-img-container"
            ref={refToServiceImg}
          >
            <img src={image} alt="services" />
          </div>
          <div className="serviceDescription-description-container">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html:documentToHtmlString(description, RICHTEXT_OPTIONS)}}></div>
            <Button onClick={handleOnClick}>Zurück</Button>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default withRouter(ServiceDescription);
