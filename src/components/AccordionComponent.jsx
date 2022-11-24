import React from "react";
import "./Accordion.css";
import imgUrl from "../img/arrow-right-up-min.png";

function AccordionComponent() {
  const FirstPartAccordion = () => {
    return (
      <div className="first-part-of-description-header">
        <div className="container-first-part">
          <nav className="nav">
            <h1>Conseil</h1>
            <a href="#">
              <img src={imgUrl} alt="arrow-right-up" />
            </a>
          </nav>
          <div className="container-description-header">
            <p>
              Vous accompagner <br />
              dans la démarche sécurité
            </p>
            <p>
              La maitrise des risques numériques passe par la mise œuvre d’une
              démarche sécurité à la fois organisée et formalisée.
            </p>
          </div>
        </div>

        <span className="index-header">1</span>
      </div>
    );
  };

  const SecondPartAccordion = () => {
    return (
      <div className="second-part-of-description-header">
        <nav className="nav">
          <h1>Conseil</h1>
          <a href="#">
            <img src={imgUrl} alt="arrow-right-up" />
          </a>
        </nav>
        <div className="container-description-header">
          <p>
            Vous accompagner <br />
            dans la démarche sécurité
          </p>
          <p>
            La maitrise des risques numériques passe par la mise œuvre d’une
            démarche sécurité à la fois organisée et formalisée.
          </p>
        </div>
        <span className="index-header">2</span>
      </div>
    );
  };

  const ThirdPartAccordion = () => {
    return (
      <div className="third-part-of-description-header">
        <nav className="nav">
          <h1>Conseil</h1>
          <a href="#">
            <img src={imgUrl} alt="arrow-right-up" />
          </a>
        </nav>
        <div className="container-description-header">
          <p>
            Vous accompagner <br />
            dans la démarche sécurité
          </p>
          <p>
            La maitrise des risques numériques passe par la mise œuvre d’une
            démarche sécurité à la fois organisée et formalisée.
          </p>
        </div>
        <span className="index-header">3</span>
      </div>
    );
  };

  const FourthdPartAccordion = () => {
    return (
      <div className="fourth-part-of-description-header">
        <nav className="nav">
          <h1>Conseil</h1>
          <a href="#">
            <img src={imgUrl} alt="arrow-right-up" />
          </a>
        </nav>
        <div className="container-description-header">
          <p>
            Vous accompagner <br />
            dans la démarche sécurité
          </p>
          <p>
            La maitrise des risques numériques passe par la mise œuvre d’une
            démarche sécurité à la fois organisée et formalisée.
          </p>
        </div>
        <span className="index-header">4</span>
      </div>
    );
  };

  return (
    <header>
      <FirstPartAccordion />
      <SecondPartAccordion />
      <ThirdPartAccordion />
      <FourthdPartAccordion />
    </header>
  );
}

export default AccordionComponent;
