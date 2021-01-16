import React from "react";
import "./professionalPreview.css";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import {BLOCKS} from "@contentful/rich-text-types";

const ProfessionalPreview = ({homePageContent}) => {
  const{professionalPreview} = homePageContent;
  const {fields} = professionalPreview;

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
          <h1>{fields.title}</h1>
          <hr />
          <div dangerouslySetInnerHTML={{__html:documentToHtmlString(fields.content, RICHTEXT_OPTIONS)}}>
          </div>
          <div className="signature-container">
            <h4>{fields.name}</h4>
            <img src={fields.signature.fields.file.url} alt="signature" />
          </div>
        </div>
        <div className="professionalPreview-img">
          <img
            src={fields.imageEmployee.fields.file.url}
            alt="the doctor"
          />
        </div>
      </div>
    </div>
  );
};
export default ProfessionalPreview;
