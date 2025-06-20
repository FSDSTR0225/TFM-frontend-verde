import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import designImg from "/images/sides/3.jpg";
import { HiCalendarDateRange } from "react-icons/hi2";
import { Button } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import ModalEditUser from "../ModalEditUser/ModalEditUser";

export default function Dashboard({ currentUser, updateUserInfos }) {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [isShowModal, setIsShowModal] = useState(false);

  const date = new Date(currentUser.createdAt);
  const year = date.getUTCFullYear();
  const month = date.toLocaleString("default", { month: "long" }); // Get month name
  const day = date.getUTCDate();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  let RegisterDate = `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;

  useEffect(() => {
    setuserImg(currentUser.image);
  }, [currentUser.image]);

  const [userImg, setuserImg] = useState();
  const CLOUDINARY_ROOT_URL = "https://api.cloudinary.com/v1_1/";
  const CLOUDINARY_CLOUD_NAME = "dvblykeav";
  const CLOUDINARY_UPLOAD_PRESET = "casa_verde";
  const currentDate = new Date();

  const onFileChange = (event) => {
    const selectedImg = event.target.files[0];
    fotoUploadHandler(selectedImg);
  };
  async function fotoUploadHandler(selectedImg) {
    const formData = new FormData();
    formData.append("file", selectedImg);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `${CLOUDINARY_ROOT_URL}${CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    await Swal.fire({
      title: "Sweet!",
      text: "Your fot has been changed!",
      imageUrl: data.url,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Custom image",
    });
    sendImgUrlToBackend(data.url);
    setuserImg(data.url);
    updateUserInfos({ image: data.url });
  }
  async function sendImgUrlToBackend(imageUrl) {
    await fetch(`${apiUrl}/users/fotoEdit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: currentUser.username,
        image: imageUrl,
      }),
    })
      .then((resposnse) => {
        console.log(resposnse);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="profile__mainbar__titlebar">
        <div className="mainbar__titlebox">
          <h3 className="mainbar__title">Dashboard</h3>
          <h3 className="mainbar__subtitle">edit your main data here</h3>
        </div>
        <div className="mainbar__datebox">
          <HiCalendarDateRange className="mainbar__datebox__icon" />
          Date: {currentDate.getDate()}/{currentDate.getMonth()}/
          {currentDate.getFullYear()}
        </div>
      </div>
      <div className="profile__mainbar__body">
        <div className="mainbar__leftbody">
          <div className="mainbar__leftbody__image">
            {userImg ? (
              <img className="mainbar__leftbody__img" src={userImg} />
            ) : (
              <img
                className="mainbar__leftbody__img"
                src="./images/users/icons/artist.png"
              />
            )}
            <div className="editImg__input__Wrapper">
              <label className="userAvatar-label" htmlFor="userInputFoto">
                <FaEdit className="userAvatar-label-icon" />
              </label>
              <input
                className="userAvatar-input"
                type="file"
                id="userInputFoto"
                onChange={onFileChange}
                multiple
              />
            </div>
          </div>

          <div className="mainbar__leftbody__text">
            <div>
              <span className="leftbody__text__bold">Username : </span>
              {" " + currentUser.username}
            </div>
            <div>
              <span className="leftbody__text__bold">Email : </span>
              {" " + currentUser.email}
            </div>
            <div>
              <span className="leftbody__text__bold">Joined Date :</span>
              {" " + RegisterDate}
            </div>
            <Button
              className="editUser__btn"
              onClick={() => {
                setIsShowModal(true);
              }}
              variant="contained"
              size="small"
            >
              Edit
            </Button>
          </div>
        </div>
        <div className="mainbar__rightbody">
          <div className="mainbar__rightbody__img">
            <img
              className="rightbody__img"
              src={designImg}
              alt="rightbody__img"
            />
          </div>
          <div className="mainbar__rightbody__text">
            <h3 className="mainbar__rightbody__title mainTitle">
              Hello {currentUser.username}!
            </h3>
            <p>
              Amasing you have a perfect and beautifull profle what we are going
              to do now ?<br /> You can find every thing you want in here.
            </p>
          </div>
        </div>
      </div>
      <div className="profile__mainbar__footer"></div>
      <div>
        {isShowModal && (
          <ModalEditUser
            isShowModal={isShowModal}
            setIsShowModal={setIsShowModal}
            username={currentUser.username}
            email={currentUser.email}
            password={currentUser.password}
            userId={currentUser._id}
          />
        )}
      </div>
    </>
  );
}
