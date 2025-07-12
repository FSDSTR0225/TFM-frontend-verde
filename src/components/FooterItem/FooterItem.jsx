import React from "react";
import "./FooterItem.css";
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineFax } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";

export default function FooterItem() {
  let navigate = useNavigate();
  return (
    <div className="FooterItem">
      <Grid container spacing={{ xs: 5, md: 6, lg: 20 }}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }} className="Footer__col">
          <div
            className="Footer__logoWrapper"
            onClick={() => {
              navigate("/");
            }}
          >
            CASA VERDE
          </div>
          <div className="socialItems">
            <FaLinkedin />
            <FaInstagram />
            <FaXTwitter />
            <FaFacebook />
            <FaYoutube />
          </div>
          {/* <div className="copyRight">Casa Verde Copyright © 2000-2025</div> */}
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }} className="Footer__col">
          <h4 className="Footer__colTitle">Important Links:</h4>
          <ul className="Footer__colList">
            <li
              className="Footer__colspan"
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </li>
            <li
              className="Footer__colspan"
              onClick={() => {
                navigate("/about");
              }}
            >
              Abou Us
            </li>
            <li
              className="Footer__colspan"
              onClick={() => {
                navigate("/news");
              }}
            >
              News
            </li>
          </ul>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }} className="Footer__col">
          <h4 className="Footer__colTitle">Our info : </h4>
          <ul className="Footer__colList">
            <li className="Footer__colspan">
              <IoLocationSharp className="Footer__infoIcon" />
              Plaza Mayor,21
            </li>
            <li className="Footer__colspan">
              <MdOutlineLocalPhone className="Footer__infoIcon" />
              +34 123 456 789
            </li>
            <li className="Footer__colspan">
              <MdOutlineFax className="Footer__infoIcon" />
              +34 987 654 321
            </li>
            <li className="Footer__colspan">
              <IoMailOpenOutline className="Footer__infoIcon" />
              in@casa.v.com
            </li>
          </ul>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }} className="Footer__col">
          <h4 className="Footer__colTitle">Help: </h4>
          <ul className="Footer__colList">
            <li className="Footer__colspan">Frequently questions</li>
            <li className="Footer__colspan">your acount</li>
            <li className="Footer__colspan">Privacy</li>
            <li className="Footer__colspan">Cookies policy</li>
          </ul>
        </Grid>
      </Grid>
      <div className="FooterItem__signature">© 2025 Toomaj Bandad all rights reserved</div>
    </div>
  );
}
