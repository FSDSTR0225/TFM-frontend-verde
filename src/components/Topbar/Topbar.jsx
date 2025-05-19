import React, { useContext } from "react";
import "./Topbar.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";
import AuthContext from "../../contexts/AuthContext";

export default function Topbar() {
  let navigate = useNavigate();
  const authContext = useContext(AuthContext);

  // console.log(currentUser.currentUser.userName);

  return (
    <div className="Topbar">
      <div className="Topbar__container">
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
            <NavLink to="/" className="Topbar__menuItem">
              Home
            </NavLink>
            <NavLink to="/about" className="Topbar__menuItem">
              About us
            </NavLink>
            <NavLink to="/news" className="Topbar__menuItem">
              News
            </NavLink>
          </div>
          <div className="Topbar__profiledata">
            {authContext.isLoggedIn ? (
              <>
                {/* <NavLink
                  to="/profile"
                  className="Topbar__menuItem  hover-underline-animation left"
                >
                  Profile
                </NavLink> */}
                <NavLink
                  to="/newproperty"
                  className="Topbar__menuItem  hover-underline-animation left"
                >
                  New props
                </NavLink>
                <NavLink
                  to="/"
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
