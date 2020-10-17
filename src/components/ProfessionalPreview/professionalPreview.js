import React from "react";
import "./professionalPreview.css";
import Signature from "../../assets/semnaturaMarian.png";

const ProfessionalPreview = () => {
  return (
    <div className="container-fluid professionalPreview-container">
      <div className="container professionalPreview-section">
        <div className="professionalPreview-text">
          <h1>Physiotherapeut Marian</h1>
          <hr />
          <p>
            Ich bin Marian, Ihr Therapeut und Partner für Ihren
            Gesundungsprozess. Mit einer Erfahrung von über 10 Jahren in der
            Physiotherapie biete ich höchste Qualität in der Behandlung und
            körperlichen Heilung jedes Patienten.
          </p>
          <p>
            Durch jeden teilnehmenden Kurs, zusammen mit anderen Aktivitäten zur
            persönlichen Entwicklung, bringe ich Innovation für die Patienten in
            jeder Therapiesitzung der Behandlung. Das Ziel der PHYSIOPRAXIS
            MARIAN ist, die Lebensqualität für jeden Patienten zu verbessern und
            die Faktoren zu beseitigen, die ihm Unbehagen oder Schmerzen
            verursachen.
          </p>
          <div className="signature-container">
            <h4>Marian Popescu</h4>
            <img src={Signature} alt="signature" />
          </div>
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
