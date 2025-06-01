import React, { useState, useEffect, useContext } from "react";
import "./PropertyCard.css";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import ModalEditDelete from "../ModalEditDelete/ModalEditDelete";
import { MdNoteAdd } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import AuthContext from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import nofoto from "/images/properties/noimage.png";

export default function PropertyCard({
  item,
  deletePropertyHandler,
  getUserProperties,
  addNoteHandler,
  addFavoriteHandler,
  deleteFavoriteHandler,
}) {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.userFavorites.map((fav) => {
      if (fav.title === item.title) {
        setIsFavorite(true);
      }
    });
  }, [authContext.userFavorites, item.title]);

  function removeFavHandler(itemId) {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your favorites!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4fc074",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Do this!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFavoriteHandler(itemId);
        setIsFavorite(false);
        Swal.fire({
          title: "Removed!",
          text: "Item has been removed.",
          icon: "success",
        });
      }
    });
  }

  function sendMsgHandler(itemId, ownerId, itemTitle, itemImg) {
    console.log(`itemId:${itemId}  ownerId:${ownerId}`);

    Swal.fire({
      title: "Conect with owner",
      input: "textarea",
      inputAttributes: {
        autocapitalize: "off",
      },
      text: "Please write your message to send to property's owner",
      showCancelButton: true,
      confirmButtonColor: "#4fc074",
      cancelButtonColor: "#d33",
      confirmButtonText: "Send!",
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        authContext.sendMsgToOwner(itemId, ownerId, result.value ,itemTitle, itemImg);
        Swal.fire({
          title: "Sent!",
          text: "Your Message has been sent",
          icon: "success",
        });
      }
    });
  }
  return (
    <div className="UserProperties__item">
      <div className="UserProperties__imgContainer">
        {item.image ? (
          <img
            className="UserProperties__img"
            src={item.image}
            alt="prop-img"
          />
        ) : (
          <img className="UserProperties__noimg" src={nofoto} alt="prop-img" />
        )}
      </div>
      <div className="UserProperties__bodyContainer">
        <div className="UserProperties__title">{item.title}</div>
        <div className="UserProperties__bodyInfoContainer">
          <div className="UserProperties__price">
            Price:
            {item.price}
            {item.duration !== "forever" ? " $/month" : " $"}
          </div>
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
          <div className="UserProperties__desc">
            Location : {item.city} , {item.location}
          </div>
          <div className="UserProperties__desc">{item.desc}</div>
        </div>
        {authContext.isLoggedIn ? (
          <div className="UserProperties__footer">
            <div className="UserProperties__footerLeft">
              <span className="UserProperties__footerIconWrapper">
                <IoCallOutline className="UserProperties__footerIcon" />
                View phone
              </span>
              <span
                className="UserProperties__footerIconWrapper"
                onClick={() =>
                  sendMsgHandler(item._id, item.owner, item.title, item.image)
                }
              >
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
                  className="UserProperties__footerIcon noteIcon"
                  onClick={() => addNoteHandler(item._id)}
                />
                {isFavorite ? (
                  <MdFavorite
                    className="UserProperties__footerIcon favIcon"
                    onClick={() => {
                      removeFavHandler(item._id);
                    }}
                  />
                ) : (
                  <MdFavoriteBorder
                    className="UserProperties__footerIcon favIcon"
                    onClick={() => {
                      addFavoriteHandler(item._id);
                      setIsFavorite(true);
                    }}
                  />
                )}
              </div>
            )}
          </div>
        ) : null}
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
