import React from "react";
import "./CardConceptCompo.css";
import CardConcept from "../CardConcept/CardConcept";
// import responsive from "/images/icons/responsive.png";
// import infinity from "/images/icons/infinity.png";
// import socialMedia from "/images/icons/bullhorn.png";

export default function CardConceptCompo() {
  const infoArray = [
    {
      id: 1,
      icon: "images/icons/responsive.png",
      title: "Web & Mobile Application",
      text: "You can use our tool on any device, whether it is a desktop computer, tablet or mobile phone, and all you want.",
    },
    {
      id: 2,
      icon: "images/icons/infinity.png",
      title: "Without Any Limit",
      text: "Our service is designed to be fast and efficient, with no limits on the number of images you can upload.",
    },
    {
      id: 3,
      icon: "images/icons/bullhorn.png",
      title: "Social Media Ready",
      text: "We provide you with the perfect image size for your social media posts, so you can share your content with ease.",
    },
  ];
  return (
    <div className="CardConceptCompo">
      <div className="CardConceptCompo__container">
        {infoArray.map((item) => (
          <CardConcept
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
