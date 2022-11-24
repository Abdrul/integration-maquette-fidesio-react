import React from "react";
import "./Articles.css";
import ArticleImg from "../img/img-three-person-min.png";
import CapzaImg from "../img/capza-logo-min.png";

function Articles() {
  const FirstArticle = () => {
    return (
      <article className="first-article">
        <img src={ArticleImg} alt="trois personnes en train de sourire" />
        <h3>Rencontre avec Pauline, Bintia et Emilie</h3>
        <div className="date-audit-article">
          <p>Audit</p>
          <span>15 septembre 2021</span>
        </div>
      </article>
    );
  };

  const SecondArticle = () => {
    return (
      <article className="second-article">
        <h3>
          Cyber Stress : une grande étude sur le stress des Responsables Cyber
        </h3>
        <p className="description-second-article">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          faucibus orci a quam venenatis laoreet non eu massa.
        </p>
        <div className="date-audit-article">
          <p>Audit</p>
          <span>15 septembre 2021</span>
        </div>
      </article>
    );
  };

  const ThirdArticle = () => {
    return (
      <article className="third-article">
        <div className="img-third-article">
          <img src={CapzaImg} alt="logo-of-title-article" />
        </div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p className="description-third-article">
          Une opération inédite qui ouvre la voie à un nouveau modèle
          d’entreprise à impact sociétal...
        </p>
        <div className="date-audit-article">
          <p>Audit</p>
          <span>17 juin 2021</span>
        </div>
      </article>
    );
  };

  return (
    <section className="second-section">
      <div className="last-publication">
        <i className="fa-solid fa-align-left"></i>
        <span>Nos dernières publications</span>
      </div>
      <div className="wrapper-articles">
        <FirstArticle />
        <SecondArticle />
        <ThirdArticle />
      </div>
    </section>
  );
}

export default Articles;
