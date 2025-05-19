import React from "react";
import "./BlogCart.css";

export default function BlogCart({ title, img, text, link, dir }) {
  return (
    <div className={(dir==="left") ? "BlogCart leftBlogCart" : "BlogCart"}>
      <img src={img} className="BlogCart__Img" />
      <div className="BlogCart__textContainer">
        <div className="BlogCart__Title">{title}</div>
        <div className="BlogCart__Text">{text}</div>
        <div className="BlogCart__Link">{link}</div>
      </div>
    </div>
  );
}
