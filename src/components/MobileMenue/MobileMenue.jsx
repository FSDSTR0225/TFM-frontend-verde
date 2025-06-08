import React, { useState, useContext } from "react";
import "./MobileMenue.css";
import { useNavigate, NavLink } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function MobileMenue() {
  const navigate = useNavigate();
  const [isShowMenue, setIsShowMenue] = useState(false);
  const authContext = useContext(AuthContext);
  const navbarItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About us", link: "/about" },
    { id: 3, title: "News", link: "news" },
  ];

  return (
    <div className="MobileMenue">
      <div className="MobileMenue__container">
        <div className="MobileMenue__left">
          <div
            className="MobileMenue__logo"
            onClick={() => {
              navigate("/");
            }}
          >
            Casa Verde
          </div>
        </div>
        <div className="MobileMenue__right">
          <button
            className="MobileMenue__showBtn"
            onClick={() => {
              setIsShowMenue(true);
            }}
          >
            <IoMenu />
          </button>
        </div>
      </div>
      {isShowMenue && (
        <div className="MobileMenue__modal">
          <button
            className="MobileMenue__hide"
            onClick={() => {
              setIsShowMenue(false);
            }}
          >
            <IoCloseCircleOutline />
          </button>
          {authContext.isLoggedIn ? (
            <>
              <NavLink
                to="/profile"
                className="MobileMenue__profileInfoWrapper"
              >
                <img
                  className="MobileMenue__profileFoto"
                  src={authContext.userInfos.image}
                />
                <span className="MobileMenue__profileName">
                  {authContext.userInfos.username}
                </span>
              </NavLink>
              <NavLink
                to="/newproperty"
                className="MobileMenue__menuItem hover-underline-animation left"
              >
                New props
              </NavLink>
              <NavLink
                to="/messages"
                className="MobileMenue__menuItem hover-underline-animation left"
              >
                Messages
              </NavLink>
            </>
          ) : (
            <div className="loginBtn__wrapper">
              <NavLink
                to="/login"
                className="MobileMenue__menuItem hover-underline-animation left"
              >
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className="MobileMenue__menuItem"
                id="registerBtn"
              >
                Join us
              </NavLink>
            </div>
          )}
          {navbarItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className="MobileMenue__menuItem hover-underline-animation left"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
