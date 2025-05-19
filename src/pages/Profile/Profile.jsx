import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import { MdSpaceDashboard } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import AuthContext from "../../contexts/AuthContext";
import Dashboard from "../../components/Dashboard/Dashboard";
import UserProperties from "../../components/UserProperties/UserProperties";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import UserFavorites from "../../components/userFavorites/userFavorites";

export default function Profile() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const url = "http://localhost:4000/users/me";

  useEffect(() => {
    let userLocal = localStorage.getItem("user");
    if (userLocal) {
      let userToken = JSON.parse(userLocal).token;
      fetch(url, {
        method: "GET",
        headers: { authorization: `Bearer ${userToken}` },
      })
        .then((res) => {
          if (res.ok === true) {
            return res.json();
          }
        })
        .then((data) => {
          authContext.login(data.user, userToken);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [authContext]);

  function logoutHandler() {
    swal({
      title: "Log Out ?",
      text: "Are you sure? You want to log out ? ",
      icon: "warning",
      buttons: ["Cancel", "Yes, Log Out"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        authContext.logout();
        navigate("/");
        swal("You have been log out successfully", {
          icon: "success",
        });
      } else {
        swal("Progress canceled !");
      }
    });
  }

  const menuItems = [
    { id: 1, name: "Dashboard", icon: <MdSpaceDashboard /> },
    { id: 2, name: "Favorites", icon: <MdFavorite /> },
    { id: 3, name: "Properties", icon: <FaBuilding /> },
    { id: 4, name: "Setting", icon: <IoMdSettings /> },
    { id: 5, name: "Help", icon: <TbHelpHexagonFilled /> },
  ];

  const [currentTab, setCurrentTab] = useState("Dashboard");

  return (
    <div className="profile">
      <div className="profile__sidebar">
        <div className="profile__sidebarLogo">CASA VERDE</div>
        <ul className="profile__sidebarWrapper">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={
                currentTab === item.name
                  ? "profile__sidebarItem active"
                  : "profile__sidebarItem"
              }
              onClick={() => setCurrentTab(item.name)}
            >
              {item.icon} {item.name}
            </li>
          ))}
          <li className="profile__sidebarItem" onClick={() => logoutHandler()}>
            <LuLogOut />
            Log out
          </li>
        </ul>
      </div>

      <div className="profile__mainbar__wrapper">
        <div className="profile__mainbar">
          {currentTab === "Dashboard" && (
            <Dashboard currentUser={authContext.userInfos} />
          )}
          {currentTab === "Properties" && (
            <UserProperties currentUser={authContext.userInfos} />
          )}
          {currentTab === "Favorites" && <UserFavorites />}
        </div>
      </div>
    </div>
  );
}
