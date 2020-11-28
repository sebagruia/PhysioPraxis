import React from "react";
import "./aboutUs.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { withRouter } from "react-router-dom";
import AboutUsWorkinHours from "../../components/AboutUsWorkinHours/aboutUsWorkingHours";
import Socials from "../../components/Socials/socials";
import BootstrapCarousel from "../../components/BootstrapCarousel/bootstrapCarousel";
import Facebook from "../../assets/iconmonstr-facebook.png";
import Instagram from "../../assets/iconmonstr-instagram.png";
import Twitter from "../../assets/iconmonstr-twitter.png";

const AboutUs = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PhysioPraxis Marian | Über uns</title>
        <meta
          name="description"
          content="PHYSIOPRAXIS MARIAN, mit Marian Popescu als Praxisinhaber, bringt sich in Darmstadt ein examinierter Spezialist mit über 12-jähriger Berufserfahrung ein, die durch Studium und Praktizieren im In- und Ausland erlangt wurde."
        />
      </Helmet>
      <div className="container-fluid aboutUs">
        <div className="header"></div>
        <div className="aboutUs-presentation container">
          <AboutUsWorkinHours />
          <div className="aboutUs-text">
            <div className="aboutUs-text-shortPresentation">
              <hr className="aboutUs-text-hr"></hr>
              <h6>
                PHYSIOPRAXIS MARIAN, mit Marian Popescu als Praxisinhaber,
                bringt sich in Darmstadt ein examinierter Spezialist mit über
                12-jähriger Berufserfahrung ein, die durch Studium und
                Praktizieren im In- und Ausland erlangt wurde.
              </h6>
              <hr className="aboutUs-text-hr"></hr>
            </div>
            <div className="aboutUs-text-description">
              <div className="firstColumn">
                <p>
                  Die Leistungen der Praxis werden in Zusammenarbeit mit allen
                  Krankenkassen in Deutschland (privat und gesetzlich) aber auch
                  für Selbstzahler erbracht. Es umfasst Krankengymnastik,
                  spezielle Massagetechniken, Manuelle Lymphdrainage, Behandlung
                  von neurologischen Patienten, postoperative physikalische
                  Behandlungen, etc.
                </p>
                <p>
                  Die Vision der Praxis ist es, durch physikalische Therapie,
                  einen positiven Beitrag für ein besseres Leben für seine
                  Patienten zu leisten.
                </p>
                <br></br>
                <p>
                  PHYSIOPRAXIS MARIAN besitzt die Mission, auf die aktuellen
                  Herausforderungen der heutigen Welt zu antworten, indem es
                  einen Weg anbietet den Alltags zu verbessern, unseren Körper
                  gesund zu halten und ein möglichst aktives Leben zu führen.
                </p>
              </div>
              <div className="secondColumn">
                <p>
                  Durch kontinuierliche Verbesserung der Fähigkeiten und
                  Kenntnisse kann PHYSIOPRAXIS MARIAN Qualität und Innovation
                  für alle seine Kunden und Partner bieten.
                </p>
                <p>Werte von PHYSIOPRAXIS MARIAN:</p>
                <ul>
                  <li>Einfacher Zugang zu Terminen und Flexibilität</li>
                  <li>Partnerschaft und Vertrauen</li>
                  <li>Innovation und Effizienz</li>
                  <li>Qualität und Respekt.</li>
                </ul>
                <p>
                  Das Ziel von PHYSIOPRAXIS MARIAN entspricht den Zielen der
                  Stadt Darmstadt für die Zukunft in Bezug auf: Digitalisierung,
                  E-Mobilität, Kilimafreundlichkeit, Innovation in der Therapie,
                  um den zukünftigen Generationen einen besseren Ort zum Leben
                  zu geben.
                </p>
                <br></br>
                <p>Herzlich Willkommen!</p>
              </div>
            </div>
            <hr className="aboutUs-text-hr"></hr>
            <Socials
              facebook={Facebook}
              instagram={Instagram}
              twitter={Twitter}
            />
          </div>
        </div>
        <BootstrapCarousel />
      </div>
    </HelmetProvider>
  );
};

export default withRouter(AboutUs);
