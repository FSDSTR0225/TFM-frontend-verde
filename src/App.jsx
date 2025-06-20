import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";

import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import FooterItem from "./components/FooterItem/FooterItem";
import Profile from "./pages/Profile/Profile";
import NewProperty from "./pages//NewProperty/NewProperty";
import AuthContext from "./contexts/AuthContext";
import Topbar from "./components/Topbar/Topbar";
import SearchProp from "./pages/SearchProp/SearchProp";
import News from "./pages/News/News";
import NewsMain from "./pages/NewsMain/NewsMain";
import About from "./pages/About/About";
import Messages from "./pages/Messages/Messages";
import PropPage from "./pages/PropPage/PropPage";

export default function App() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});
  const [userFavorites, setUserFavorites] = useState([]);
  const [userMessages, setUserMessages] = useState([]);

  useEffect(() => {
    let userLocal = localStorage.getItem("user");
    if (userLocal) {
      let userToken = JSON.parse(userLocal).token;
      fetch(`${apiUrl}/users/me`, {
        method: "GET",
        headers: { authorization: `Bearer ${userToken}` },
      })
        .then((res) => {
          if (res.ok === true) {
            return res.json();
          }
        })
        .then((data) => {
          login(data.user, userToken);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (user, token) => {
    //process of loging in a user
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(user);
    setUserFavorites(user.favorites);
    setUserMessages(user.messages);
    localStorage.setItem("user", JSON.stringify({ token: token }));
  };
  const logout = () => {
    //process of loging out a user
    setToken(null);
    setIsLoggedIn(false);
    setUserInfos({});
    setUserFavorites([]);
    setUserMessages([]);
    localStorage.removeItem("user");
  };


  const updateUserInfos = (newUserInfo) => {
    setUserInfos((prevUserInfo) => ({ ...prevUserInfo, ...newUserInfo }));
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        userFavorites,
        userMessages,
        login,
        logout,
        updateUserInfos,
      }}
    >
      <div className="App">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newproperty" element={<NewProperty />} />
          <Route path="/searchproperty/:city/:type/:contract" element={<SearchProp />}/>
          <Route path="/news" element={<NewsMain />} />
          <Route path="/news/:newsId" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/property/:propId" element={<PropPage />} />
        </Routes>
        <FooterItem />
      </div>
    </AuthContext.Provider>
  );
}
