import React, { useEffect, useState } from "react";
import "./PropPage.css";
import { useParams } from "react-router";

export default function PropPage() {
  const params = useParams();

  const url = "http://localhost:4000/";
  const [propData, setPropData] = useState("");
  const [propId, setPropId] = useState("");

  useEffect(() => {
    setPropId(params.propId);
  }, [params.propId]);

  useEffect(() => {
    if (propId) {
      fetch(`${url}properties/${propId}`)
        .then((res) => res.json())
        .then((data) => {
          setPropData(data);
          console.log(data);
        });
    }
  }, [propId]);

  return (
    <div className="PropPage">
      <div className="PropPage__container">
        <div className="PropPage__imgWrapper">
          <img className="PropPage__image" src={propData.image} alt="" />
        </div>
        <div className="PropPage__body">
          <h3 className="mainTitle">{propData.title}</h3>
          <p>desc : {propData.desc}</p>
          <p>bathrooms : {propData.bathrooms}</p>
          <p>bedrooms : {propData.bedrooms}</p>
          <p>city : {propData.city}</p>
          {/* <p>{propData.contractCategory.name}</p> */}
          <p>couples : {propData.couples}</p>
          <p>createdAt : {propData.createdAt}</p>
          <p>duration : {propData.duration}</p>
          <p>location : {propData.location}</p>
          <p>minors : {propData.minors}</p>
          <p>owner : {propData.owner}</p>
          <p>pets : {propData.pets}</p>
          <p>price : {propData.price}</p>
          {/* <p>{propData.typeCategory.name}</p> */}
        </div>
      </div>
    </div>
  );
}
