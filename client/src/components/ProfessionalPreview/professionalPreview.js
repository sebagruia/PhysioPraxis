import React, { Fragment } from "react";
import "./professionalPreview.css";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const ProfessionalPreview = ({ homePageContent }) => {

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p class="professional_paragraph">${next(node.content)}</p>`,
    },
  };

  return (
    <Fragment>
      {
        homePageContent&&
        <div className="container-fluid professionalPreview-container">
        <div className="container professionalPreview-section">
          <div className="professionalPreview-text">
            <h1>{homePageContent.professionalPreview.fields.title}</h1>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(homePageContent.professionalPreview.fields.content, RICHTEXT_OPTIONS),
              }}
            ></div>
            <div className="signature-container">
              <h4>{homePageContent.professionalPreview.fields.name}</h4>
              <img src={homePageContent.professionalPreview.fields.signature.fields.file.url} alt="signature" />
            </div>
          </div>
          <div className="professionalPreview-img">
            <img src={homePageContent.professionalPreview.fields.imageEmployee.fields.file.url} alt="the doctor" />
          </div>
        </div>
      </div>
      }
      
    </Fragment>
  );
};
export default ProfessionalPreview;
