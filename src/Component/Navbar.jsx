import React, { useState } from "react";
import "../Component/style.css";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../Component/img/logo.png";
import mujib from "../Component/img/mujib.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  let [state, setState] = useState(false);
  let bar = () => {
    setState(!state);
  };
  return (
    <>
      <nav>
        <div className="container">
          <div className="row ">
            <div className="col-md-6 nav-left">
              <ul>
                <li>
                  <NavLink to="/jatio"> জাতীয় তথ্য বাতায়ন </NavLink>
                </li>
                <li>
                  <NavLink to="/ekseba"> একসেবা উদ্যোক্তা </NavLink>
                </li>
                <li>
                  <NavLink to="/doptor"> দপ্তর </NavLink>
                </li>
                <li>
                  <NavLink to="/mygov"> মাইগভ </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-6 nav-right">
              <ul>
                <li>
                  <NavLink to="/">
                    <FaHome className="home" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/nibondhon">নিবন্ধন</NavLink>
                </li>

                <li>
                  <NavLink to="/help">হেল্পডেস্ক</NavLink>
                </li>
                <li>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Eng
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row nav-bottom py-2">
          <div className="col-9">
            <div className="row">
              <div className="col-2">
                <NavLink to="/">
                  <img src={logo} alt="logo" className="logo" />
                </NavLink>
              </div>
              <div className="col-6 nav-info">
                <span>এক ঠিকানায় সকল সরকারি সেবা </span>
              </div>
            </div>
          </div>
          <div className="col-3 mujib">
            <img src={mujib} alt="" />
          </div>

          <div className="col-3">
            <FaBars className="bars" onClick={bar} />
          </div>
        </div>

        <div
          className="bar-list bar-list-close"
          className={state ? "bar-list" : "bar-list-close"}
          onClick={bar}
        >
          <ul>
            <li>
              <NavLink to="/">
                <FaHome /> হোম
              </NavLink>
            </li>

            <li>
              <NavLink to="/nibondhon">নিবন্ধন</NavLink>
            </li>

            <li>
              <NavLink to="/login">লগইন</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
