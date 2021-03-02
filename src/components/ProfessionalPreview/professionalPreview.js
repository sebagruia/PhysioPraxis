import React from "react";
import "./professionalPreview.css";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const ProfessionalPreview = ({ homeContent }) => {

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p class="professional_paragraph">${next(node.content)}</p>`,
    },
  };

  return (

        <div className="container-fluid professionalPreview-container">
        <div className="container professionalPreview-section">
          <div className="professionalPreview-text">
            <h1>{homeContent.fields.professionalPreview.fields.title}</h1>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(homeContent.fields.professionalPreview.fields.content, RICHTEXT_OPTIONS),
              }}
            ></div>
            <div className="signature-container">
              <h4>{homeContent.fields.professionalPreview.fields.name}</h4>
              <img src={homeContent.fields.professionalPreview.fields.signature.fields.file.url} alt="signature" />
            </div>
          </div>
          <div className="professionalPreview-img">
            <img src={homeContent.fields.professionalPreview.fields.imageEmployee.fields.file.url} alt="the doctor" />
          </div>
        </div>
      </div>
  );
};
export default ProfessionalPreview;
