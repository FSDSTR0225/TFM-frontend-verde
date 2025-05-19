import React, { useState } from "react";
import "./PropertyCard.css";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import ModalEditDelete from "../ModalEditDelete/ModalEditDelete";
import { MdNoteAdd } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export default function PropertyCard({
  item,
  deletePropertyHandler,
  getUserProperties,
  addNoteHandler,
  addFavoriteHandler
}) {
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  return (
    <div className="UserProperties__item">
      <div className="UserProperties__imgContainer">
        <img className="UserProperties__img" src={item.image} alt="" />
      </div>
      <div className="UserProperties__bodyContainer">
        <div className="UserProperties__title">{item.title}</div>
        <div className="UserProperties__bodyInfoContainer">
          <div className="UserProperties__price">{item.price} $/month</div>
          <div className="UserProperties__details">
            <span className="UserProperties__detailItem">
              Bedrooms: {item.bedrooms}
            </span>
            <span className="UserProperties__detailItem">
              Bathrooms: {item.bathrooms}
            </span>
            <span className="UserProperties__detailItem">
              Couples: {item.couples === "true" ? "Yes" : "No"}
            </span>
            <span className="UserProperties__detailItem">
              Pets: {item.pets === "true" ? "Yes" : "No"}
            </span>
            <span className="UserProperties__detailItem">
              Minors: {item.minors === "true" ? "Yes" : "No"}
            </span>
            <span className="UserProperties__detailItem">
              Duration: {item.duration}
            </span>
          </div>
          <div className="UserProperties__desc">Location: {item.location}</div>
          <div className="UserProperties__desc">{item.desc}</div>
        </div>

        <div className="UserProperties__footer">
          <div className="UserProperties__footerLeft">
            <span className="UserProperties__footerIconWrapper">
              <IoCallOutline className="UserProperties__footerIcon" />
              View phone
            </span>
            <span className="UserProperties__footerIconWrapper">
              <MdOutlineMessage className="UserProperties__footerIcon" />
              Contact
            </span>
          </div>
          {deletePropertyHandler ? (
            <div className="UserProperties__footerRight">
              <MdDeleteOutline
                className="UserProperties__footerIcon"
                onClick={() => deletePropertyHandler(item._id)}
              />
              <FaRegEdit
                className="UserProperties__footerIcon"
                onClick={() => {
                  setIsShowEditModal(true);
                }}
              />
              {/* <MdFavoriteBorder className="UserProperties__footerIcon" /> */}
            </div>
          ) : (
            <div className="UserProperties__footerRight">
              <MdNoteAdd
                className="UserProperties__footerIcon"
                onClick={() => addNoteHandler(item._id)}
              />
              <MdFavorite
                className="UserProperties__footerIcon"
                onClick={() => {
                  addFavoriteHandler(item._id);
                }}
              />
            </div>
          )}
        </div>
      </div>
      <ModalEditDelete
        isShowModal={isShowEditModal}
        setIsShowModal={setIsShowEditModal}
        currentProperty={item}
        getUserProperties={getUserProperties}
      />
    </div>
  );
}
