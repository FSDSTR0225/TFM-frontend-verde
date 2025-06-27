import React from "react";
import "./CardConceptCompo2.css";
import CardConcept from "../CardConcept/CardConcept";
// import searchHome from "/images/icons/home-search.png";
// import keyRing from "/images/icons/keyring.png";
// import saleProperty from "/images/icons/property-for-sale.png";

export default function CardConceptCompo2() {
  const infoArray = [
    {
      id: 1,
      icon: "/images/icons/home-search.png",
      title: "Search Home",
      text: "Find your dream home with our advanced search tools and filters, making it easy to discover properties that match your needs."
    },
    {
      id: 2,
      icon: "/images/icons/keyring.png",
      title: "What You Need",
      text: "Access a wide range of real estate listings, from residential to commercial properties, ensuring you find exactly what you're looking for."
    },
    {
      id: 3,
      icon: "/images/icons/property-for-sale.png",
      title: "Sale Property",   
      text: "sale property with confidence using our platform, designed to connect buyers and sellers seamlessly and efficiently.",
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
