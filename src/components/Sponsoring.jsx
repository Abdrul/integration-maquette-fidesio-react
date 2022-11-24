import React from "react";
import "./Sponsoring.css";
import AllianzImg from "../img/Allianz-min.png";
import CAImg from "../img/CA-min.png";
import ArcelorImg from "../img/arcelor-logo-min.png";

function Sponsoring() {
  const PartnerLogo = () => {
    return (
      <div className="partners-logo">
        <img src={CAImg} alt="logo-allianz" />
        <img src={AllianzImg} alt="logo-arcelor" />
        <img src={ArcelorImg} alt="logo-allianz" />
        <img src={CAImg} alt="logo-allianz" />
        <img src={AllianzImg} alt="logo-arcelor" />
        <img src={ArcelorImg} alt="logo-arcelor" />
      </div>
    );
  };

  return (
    <section className="first-section">
      <PartnerLogo />
    </section>
  );
}

export default Sponsoring;
