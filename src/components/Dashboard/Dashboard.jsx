import React from "react";
import "./Dashboard.css";
import designImg from "/images/sides/3.jpg";
import userImg from "/images/users/user3.jpg";
import { HiCalendarDateRange } from "react-icons/hi2";

export default function Dashboard({ currentUser }) {
  const currentDate = new Date();
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
          <div>
            <img className="mainbar__leftbody__img" src={userImg} />
          </div>
          <div className="mainbar__leftbody__text">
            <div>Username : {currentUser.username}</div>
            <div>Email : {currentUser.email}</div>
            <div>Joined Date : {currentUser.createdAt}</div>
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
            <h3 className="mainbar__rightbody__title">
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
    </>
  );
}
