import React from "react";
import "./Capabilities.css";
import { GiShadowFollower } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import CountUp from "react-countup";

export default function Capabilities() {
  return (
    <div className="capabilities">
      <div className="capabilities__container">
        <div className="capabilities__title">Our Capabilities</div>
        <div className="capabilities__itemWrapper">
          <div className="capabilities__item">
            <div className="capabilities__item__icon">
              <FaProjectDiagram />
            </div>
            <div className="capabilities__item__count">
              <CountUp end={1203} duration={5} enableScrollSpy />
            </div>
            <div className="capabilities__item__title">Total Projects</div>
          </div>
          <div className="capabilities__item">
            <div className="capabilities__item__icon">
              <HiMiniUserGroup />
            </div>
            <div className="capabilities__item__count">
              <CountUp end={742} duration={5} enableScrollSpy />
            </div>
            <div className="capabilities__item__title">Customers</div>
          </div>
          <div className="capabilities__item">
            <div className="capabilities__item__icon">
              <GiShadowFollower />
            </div>
            <div className="capabilities__item__count">
              <CountUp end={3890} duration={5} enableScrollSpy />
            </div>
            <div className="capabilities__item__title">Followers</div>
          </div>
          <div className="capabilities__item">
            <div className="capabilities__item__icon">
              <FaUserFriends />
            </div>
            <div className="capabilities__item__count">
              <CountUp end={2100} duration={5} enableScrollSpy />
            </div>
            <div className="capabilities__item__title">Members</div>
          </div>
        </div>
      </div>
    </div>
  );
}
