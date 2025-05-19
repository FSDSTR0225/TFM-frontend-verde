import React from "react";
import "./FooterItem.css";
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterItem() {
  return (
    <div className="FooterItem">
      <h1 className="footer__logo">Casa Verde</h1>
      <div className="Footer__container">
        <div className="Footer__left">
          <div className="Footer__col">
            <h4 className="Footer__colTitle">About Casa Verde</h4>
            <div className="Footer__colspan">About us</div>
            <div className="Footer__colspan">Press room</div>
            <div className="Footer__colspan">Work with us</div>
          </div>
          <div className="Footer__col">
            <h4 className="Footer__colTitle">Help</h4>
            <div className="Footer__colspan">Frequently asked questions</div>
            <div className="Footer__colspan">Contact us</div>
            <div className="Footer__colspan">Privacy</div>
            <div className="Footer__colspan">Cookies policy</div>
          </div>
          <div className="Footer__col">
            <h4 className="Footer__colTitle">Other countries</h4>
            <div className="Footer__colspan">Casa Verde Italy</div>
            <div className="Footer__colspan">Casa Verde Portugal</div>
          </div>
        </div>
        <div className="Footer__right">
          <div className="socialContainer">
            <div className="socialItems">
              <FaLinkedin />
              <FaInstagram />
              <FaXTwitter />
              <FaFacebook />
              <FaYoutube />
            </div>
            <div className="copyRight">Casa Verde Copyright © 2000-2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}
