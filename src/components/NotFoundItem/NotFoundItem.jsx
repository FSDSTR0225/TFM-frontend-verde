import React from "react";
import "./NotFoundItem.css";
import { TbFaceIdError } from "react-icons/tb";

export default function NotFoundItem({ errorTitle, errorText }) {
  return (
    <div className="NotFoundItem">
      <div className="NotFoundItem__container">
        <div className="NotFoundItem__iconWrapper">
          <TbFaceIdError className="NotFoundItem__icon" />
        </div>
        <div className="NotFoundItem__textWrapper">
          <h1 className="NotFoundItem__header">{errorTitle}</h1>
          <p className="NotFoundItem__text">{errorText}</p>
        </div>
      </div>
    </div>
  );
}
