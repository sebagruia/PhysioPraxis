import React from "react";
import "./aboutUs.css";

import { connect } from "react-redux";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { withRouter } from "react-router-dom";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import AboutUsWorkinHours from "../../components/AboutUsWorkinHours/aboutUsWorkingHours";
import Socials from "../../components/Socials/socials";
import BootstrapCarousel from "../../components/BootstrapCarousel/bootstrapCarousel";
import Facebook from "../../assets/iconmonstr-facebook.png";
import Instagram from "../../assets/iconmonstr-instagram.png";
import Twitter from "../../assets/iconmonstr-twitter.png";
import LoadingSpinner from "../../components/LoadingSpinner/loadingSpinner";

const AboutUs = ({ aboutUs }) => {

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p class="aboutUs_paragraph">${next(node.content)}</p>`,
      [BLOCKS.LIST_ITEM]: (node, next) =>
        `<li class="aboutUs_paragraph_list">${next(node.content)}</li>`,
    },
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>PhysioPraxis Marian | Über uns</title>
        <meta
          name="description"
          content="PHYSIOPRAXIS MARIAN, mit Marian Popescu als Praxisinhaber, bringt sich in Darmstadt ein examinierter Spezialist mit über 12-jähriger Berufserfahrung ein, die durch Studium und Praktizieren im In- und Ausland erlangt wurde."
        />
      </Helmet>
      {aboutUs ? (
        <div className="container-fluid aboutUs">
          <div className="header"></div>
          <div className="aboutUs-presentation container">
            <AboutUsWorkinHours aboutUs={aboutUs.fields} />
            <div className="aboutUs-text">
              <div className="aboutUs-text-shortPresentation">
                <hr className="aboutUs-text-hr"></hr>
                <h6
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(
                      aboutUs.fields.shortPresentation,
                      RICHTEXT_OPTIONS
                    ),
                  }}
                ></h6>
                <hr className="aboutUs-text-hr"></hr>
              </div>
              <div className="aboutUs-text-description">
                <div className="firstColumn">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: documentToHtmlString(
                        aboutUs.fields.descriptionFirstColumn,
                        RICHTEXT_OPTIONS
                      ),
                    }}
                  ></div>
                </div>
                <div className="secondColumn">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: documentToHtmlString(
                        aboutUs.fields.descriptionSecondColumn,
                        RICHTEXT_OPTIONS
                      ),
                    }}
                  ></div>
                </div>
              </div>
              <hr className="aboutUs-text-hr"></hr>
              <Socials
                facebook={Facebook}
                instagram={Instagram}
                twitter={Twitter}
                aboutUs={aboutUs}
              />
            </div>
          </div>
          <BootstrapCarousel />
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </HelmetProvider>
  );
};


const mapStateToProps = (state) => {
  return {
    aboutUs: state.userReducer.aboutUs,
  };
};

export default withRouter(connect(mapStateToProps)(AboutUs));
