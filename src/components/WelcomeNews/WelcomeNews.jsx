import React from "react";
import "./WelcomeNews.css";
import sideImg from "/images/news/feature/feature1.jpg";

export default function WelcomeNews() {
  return (
    <div className="welcomeNews">
      <div className="welcomeNews__container">
        <div className="welcomeNews__left">
          <h1 className="welcomeNews__title">Welcome</h1>
          <h3 className="welcomeNews__subtitle">Welcome To Casa Verde News</h3>

        </div>
        <div className="welcomeNews__right">
          <img src={sideImg} className="welcomeNews__image"/>
        </div>
      </div>
    </div>
  );
}
