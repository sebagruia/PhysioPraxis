import React from "react";
import "./professionalPreview.css";
import Signature from "../../assets/semnaturaMarian.png";

const ProfessionalPreview = () => {
  return (
    <div className="container-fluid professionalPreview-container">
      <div className="container professionalPreview-section">
        <div className="professionalPreview-text">
          <h1>Nachricht des Praxisinhabers</h1>
          <hr />
          <p>
            Ich bin Marian, Ihr Therapeut und Partner für Ihren Gesundungsprozess. 
            Mit einer Erfahrung von über 12 Jahren in der Physiotherapie, 
            biete ich höchste Qualität in der Behandlung und körperlichen Heilung jedes Patienten.
          </p>
          <p>
            Durch jeden teilnehmenden Kurs, zusammen mit anderen Aktivitäten zur persönlichen Entwicklung, 
            bringe ich Innovation für die Patienten in jeder Therapiesitzung der Behandlung. 
            Das Ziel der PHYSIOPRAXIS MARIAN ist die Lebensqualität für jeden Patienten zu verbessern
            und die Faktoren zu beseitigen, 
            die ihm Unbehagen oder Schmerzen verursachen.
          </p>
          <div className="signature-container">
            <h4>Marian Popescu</h4>
            <img src={Signature} alt="signature" />
          </div>
        </div>
        <div className="professionalPreview-img">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/home%2FMarian_change_color.png?alt=media&token=e781efc4-13c1-48fd-81f4-20fe2e6825cf"
            alt="the doctor"
          />
        </div>
      </div>
    </div>
  );
};
export default ProfessionalPreview;
