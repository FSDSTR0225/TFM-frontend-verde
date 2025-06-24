import React from "react";
import "./Credits.css";

export default function Credits() {
  return (
    <div className="Help">
      <div className="HelpWrapper">
        <h1 className="Help__MainTitle mainTitle">Project Overview:</h1>
        <div className="Help__container">
          <h2 className="Help__title">Project Title:</h2>
          <p className="Help__text">Casa Verde Real Estate</p>
        </div>
        <div className="Help__container">
          <h2 className="Help__title">Objectives:</h2>
          <p className="Help__text">
            The website functions as a comprehensive real estate platform,
            enabling users to register, login, and search for properties in any area of Spain with
            advanced filtering capabilities. It facilitates direct communication
            with property owners via a chat feature, allowing users to ask
            questions and receive answers in real-time. The platform also allows
            users to personalize their experience by adding notes to properties
            and marking them as favorites for easy tracking and reference. The
            site aims to provide an all-in-one solution for real estate needs.
          </p>
        </div>
        <div className="Help__container">
          <h2 className="Help__title">Front Technologies:</h2>
          <p className="Help__text">
            React JS, React Hooks, react-router-dom, socket.io-client, CSS,
            sweetalert2, swiper, typewriter-effect, Material UI,
            react-countup, react-hook-form, react-icons, socket.io-client,
            dotenv
          </p>
        </div>
        <div className="Help__container">
          <h2 className="Help__title">Backend Technologies:</h2>
          <p className="Help__text">
            Node.js, Express.js, MongoDB, Mongoose, Socket.IO, dotenv,
            getbrevo, cors, nodemon, vitest, jsonwebtoken
          </p>
        </div>
      </div>

      <div className="HelpWrapper">
        <h1 className="Help__MainTitle mainTitle">
          Creative and Design Information:
        </h1>
        <div className="Help__container">
          <h2 className="Help__title">Design Brief:</h2>
          <p className="Help__text">
            changeable color palette and fully responsive design
          </p>
        </div>
        <div className="Help__container">
          <h2 className="Help__title">Developed and Designed By:</h2>
          <p className="Help__text">Toomaj Bandad</p>
          <p className="Help__text">Email: tbandad@gmail.com</p>
        </div>
        <div className="Help__container">
          <h2 className="Help__title">Details:</h2>
          <p className="Help__text">Details about the project go here.</p>
        </div>
      </div>
    </div>
  );
}
