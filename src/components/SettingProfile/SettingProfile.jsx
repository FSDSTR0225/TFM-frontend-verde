import React, { useState } from "react";
import "./SettingProfile.css";
import ModalEditUser from "../ModalEditUser/ModalEditUser";

export default function SettingProfile({ currentUser, getUserData }) {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="SettingProfile">
      <div className="SettingProfile__container">
        <h2 className="SettingProfile__title">
          You can edit your personal data here
        </h2>
        <div className="SettingProfile__dataWrapper">
          <div className="SettingProfile__data">{currentUser.username}</div>
          <div className="SettingProfile__data">{currentUser.email}</div>
          <div className="SettingProfile__data">{currentUser.password}</div>
          <button onClick={() => setIsShowModal(true)}>Edit</button>
        </div>
      </div>
      {isShowModal && (
        <ModalEditUser
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          username={currentUser.username}
          email={currentUser.email}
          password={currentUser.password}
          userId={currentUser._id}
          getUserData={getUserData}
        />
      )}
    </div>
  );
}
