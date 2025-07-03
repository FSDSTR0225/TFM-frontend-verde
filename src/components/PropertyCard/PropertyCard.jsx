import React, { useState, useEffect, useContext } from "react";
import "./PropertyCard.css";
import { MdOutlineMessage } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import ModalEditDelete from "../ModalEditDelete/ModalEditDelete";
import { MdOutlineNoteAdd } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import nofoto from "/images/properties/noimage.png";

export default function PropertyCard({
  item,
  deletePropertyHandler,
  getUserProperties,
  addNoteHandler,
  addFavoriteHandler,
  deleteFavoriteHandler,
}) {
  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

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

  function sendMsgHandler(itemId, ownerId) {
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
        // console.log(itemId, ownerId, result.value);
        let msgBody = {
          users: [ownerId, authContext.userInfos._id],
          property: itemId,
        };
        // console.log(msgBody);

        fetch(`${apiUrl}/room`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(msgBody),
        })
          .then((res) => {
            if (res.ok === true) {
              return res.json();
            } else {
              console.log("error please check room duplicate");
              return res.json();
            }
            //
          })
          .then((response) => {
            if (response.createdRoom) {
              postMsgToServer(
                authContext.userInfos._id,
                ownerId,
                response.createdRoom._id,
                result.value
              );
            } else {
              Swal.fire({
                title: "Not Sent!",
                text: "An error has been occured !",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Not Sent!",
              text: "An error has been occured !",
              icon: "error",
            });
            console.log(err);
          });
      }
    });
  }

  async function postMsgToServer(senderId, receiverId, roomId, message) {
    await fetch(`${apiUrl}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId,
        receiverId,
        roomId,
        message,
      }),
    })
      .then((res) => {
        if (res.ok === true) {
          console.log("success : ", res);
          Swal.fire({
            title: "Sent!",
            text: "Your Message has been sent",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Not Sent!",
            text: "Error in sending message",
            icon: "error",
          });
          console.log("error : ", res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const cardClickHandler = (propId) => {
    navigate(`/property/${propId}`);
  };

  return (
    <div className="UserProperties__item">
      <div
        className="UserProperties__imgContainer"
        onClick={() => cardClickHandler(item._id)}
      >
        {item.image ? (
          <img
            className="UserProperties__img"
            src={item.image}
            alt="prop-img"
          />
        ) : (
          <img
            className="UserProperties__noimg"
            src="/images/properties/noimage.png"
            alt="prop-img"
          />
        )}
      </div>
      <div className="UserProperties__bodyContainer">
        <div className="UserProperties__title">{item.title}</div>
        <div
          className="UserProperties__bodyInfoContainer"
          onClick={() => cardClickHandler(item._id)}
        >
          <div className="UserProperties__price">
            Price:
            {item.price}
            {item.duration !== "forever" ? " $/month" : " $"}
          </div>
          <div className="UserProperties__details">
            <div className="UserProperties__detailsTop">
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
            </div>

            <div className="UserProperties__detailsBottom">
              <span className="UserProperties__detailItem">
                Minors: {item.minors === "true" ? "Yes" : "No"}
              </span>
              <span className="UserProperties__detailItem">
                Duration: {item.duration}
              </span>
            </div>
          </div>
          <div className="UserProperties__desc">
            Location : {item.city} , {item.location}
          </div>
          <div className="UserProperties__desc">{item.desc}</div>
        </div>
        {authContext.isLoggedIn && item.owner !== authContext.userInfos._id ? (
          <div className="UserProperties__footer">
            <div className="UserProperties__footerLeft">
              {!deletePropertyHandler ? (
                <span
                  className="UserProperties__footerIconWrapper"
                  onClick={() => sendMsgHandler(item._id, item.owner)}
                >
                  <MdOutlineMessage className="UserProperties__footerIcon" />
                  Contact owner
                </span>
              ) : null}
            </div>
            {deletePropertyHandler ? (
              <div className="UserProperties__footerRight">
                <MdDeleteOutline
                  className="UserProperties__footerIcon deleteIcon"
                  onClick={() => deletePropertyHandler(item._id)}
                />
                <FaRegEdit
                  className="UserProperties__footerIcon editIcon"
                  onClick={() => {
                    setIsShowEditModal(true);
                  }}
                />
                {/* <MdFavoriteBorder className="UserProperties__footerIcon" /> */}
              </div>
            ) : (
              <div className="UserProperties__footerRight">
                <MdOutlineNoteAdd
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
