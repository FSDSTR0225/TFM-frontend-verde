import React, { useContext } from "react";
import "./Topbar.css";
import { useNavigate,NavLink } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import MobileMenue from "../MobileMenue/MobileMenue";

export default function Topbar() {
  let navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const navbarItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About us", link: "/about" },
    { id: 3, title: "News", link: "news" },
  ];

  return (
    <div className="Topbar">
      <div className="container mobileMenue__container">
        <MobileMenue />
      </div>

      <div className="Topbar__container desktopMenu__container">
        <div className="Topbar__left">
          <div
            className="Topbar__logoWrapper"
            onClick={() => {
              navigate("/");
            }}
          >
            CASA VERDE
          </div>
        </div>
        <div className="Topbar__right">
          <div className="Topbar__menu">
            {navbarItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="Topbar__menuItem hover-underline-animation left"
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <div className="Topbar__profiledata">
            {authContext.isLoggedIn ? (
              <>
                <NavLink
                  to="/newproperty"
                  className="Topbar__menuItem  hover-underline-animation left"
                >
                  New props
                </NavLink>
                <NavLink
                  to="/messages"
                  className="Topbar__menuItem hover-underline-animation left"
                >
                  Messages
                </NavLink>
                <NavLink to="/profile" className="Topbar__profileInfoWrapper">
                  <img
                    className="Topbar__profileFoto"
                    src="./images/users/user3.jpg"
                  />
                  <span className="Topbar__profileName">
                    {authContext.userInfos.username}
                  </span>
                </NavLink>
              </>
            ) : (
              <div className="loginBtn__wrapper">
                <NavLink
                  to="/login"
                  className="Topbar__menuItem hover-underline-animation left"
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/register"
                  className="Topbar__menuItem"
                  id="registerBtn"
                >
                  Join us
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
