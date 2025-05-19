import React from "react";
import "./LinkCart.css";

export default function LinkCart({ title, img, text, link }) {
  return (
    <div className="LinkCart">
      <img src={img} className="LinkCart__Img" />
      <div className="LinkCart__textContainer">
        <div className="LinkCart__Title">{title}</div>
        <div className="LinkCart__Text">{text}</div>
        <div className="LinkCart__Link">{link}</div>
      </div>
    </div>
  );
}
