import React from "react";
import "./About.css";
import WelcomeNews from "../../components/WelcomeNews/WelcomeNews";

export default function About() {
  return (
    <div className="about">
      <WelcomeNews title="About us" text="All about our work and experience" wallpaperUrl="/images/backgrounds/1.png"/>
    </div>
  );
}
