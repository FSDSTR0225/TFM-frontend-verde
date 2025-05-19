import React from "react";
import "./NewsCart.css";
import { useNavigate } from "react-router";

export default function NewsCart({ img, text, link }) {
  const navigate = useNavigate();
  return (
    <div className="NewsCart">
      <img src={img} className="NewsCart__img" />
      <div className="NewsCart__textContainer">
        <div className="NewsCart__text">{text}</div>
        <div className="NewsCart__link" onClick={() => navigate(link)}>
          Read More
        </div>
      </div>
    </div>
  );
}
