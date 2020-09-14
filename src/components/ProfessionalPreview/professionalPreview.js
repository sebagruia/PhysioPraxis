import React from "react";
import "./professionalPreview.css";

const ProfessionalPreview = () => {
  return (
    <div className="container-fluid professionalPreview-container">
      <div className="container professionalPreview-section">
        <div className="professionalPreview-text">
          <h1>Physiotherapist Marian</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
            egestas libero suscipit nec, facilisis nisl. At suspendisse et amet,
            gravida. Erat tincidunt tempor cras suscipit quam bibendum. Tortor
            nisl enim orci consequat scelerisque ultrices massa lectus ipsum.
            Feugiat lacus nisi morbi sed habitant dictum at morbi. Vulputate
            urna, quis sit accumsan. Velit integer nisi, et consequat egestas
            feugiat feugiat massa sit. Parturient tortor, habitasse ut odio
            proin ornare blandit mauris. Lacinia quisque vel auctor cursus
            aliquet sem placerat consequat.
          </p>
          <h4>Marian Popescu (signature)</h4>
        </div>
        <div className="professionalPreview-img">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/home%2Fdoctor1.png?alt=media&token=0ae9fe55-57e9-42ef-abc7-86bc84a8833d"
            alt="the doctor"
          />
        </div>
      </div>
    </div>
  );
};
export default ProfessionalPreview;
