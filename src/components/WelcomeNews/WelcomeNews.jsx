import React from "react";
import "./WelcomeNews.css";

export default function WelcomeNews({ title, text, wallpaperUrl }) {
  return (
    <div className="welcomeNews" style={{ backgroundImage: `url(${wallpaperUrl})` }}>
      <div className="welcomeNews__container">
        <div className="welcomeNews__left">
          <h1 className="welcomeNews__title">{title}</h1>
          <h3 className="welcomeNews__subtitle">{text}</h3>
        </div>
        <div className="welcomeNews__right"></div>
      </div>
    </div>
  );
}
