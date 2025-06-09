import React from "react";
import "./NewsMain.css";
import WelcomeNews from "../../components/WelcomeNews/WelcomeNews";
import CardConceptCompo2 from "../../components/CardConceptCompo2/CardConceptCompo2";

export default function NewsMain() {
  return (
    <div>
      <WelcomeNews title="Welcome" text="Welcome To Casa Verde News" wallpaperUrl="/images/backgrounds/5.png"/>
      <CardConceptCompo2 />
    </div>
  );
}
