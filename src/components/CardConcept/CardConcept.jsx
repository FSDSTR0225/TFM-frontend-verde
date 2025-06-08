import React from "react";
import "./CardConcept.css";

export default function CardConcept({ icon, title, text }) {
  return (
    <div className="cardConcept__container">
      <div className="cardConcept__iconWraper">
        <img className="cardConcept__icon" src={icon} />
      </div>
      <div className="cardConcept__TitleWrapper">
        <h3 className="cardConcept__Title">{title}</h3>
          <p className="cardConcept__text">{text}</p>
      </div>
    </div>
  );
}
