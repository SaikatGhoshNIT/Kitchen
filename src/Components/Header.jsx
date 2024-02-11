import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";

export default function Header() {
  const [btnName, setBtnName] = useState("LogIn");
  //console.log("Header Rerender");

  const cartItems = useSelector((store) => store.cart.items);

  const online = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="App Logo Here" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {online == true ? "💚" : "❤️"}</li>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "rgba(131, 34, 34, 0.877)",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "rgba(131, 34, 34, 0.877)",
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              style={{
                textDecoration: "none",
                color: "rgba(131, 34, 34, 0.877)",
              }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "rgba(131, 34, 34, 0.877)",
              }}
            >
              <CartIcon cartItems={cartItems}/>
            </Link>
          </li>
          <li>
            <button
              className="loginBtn"
              onClick={() => {
                btnName === "LogIn"
                  ? setBtnName("LogOut")
                  : setBtnName("LogIn");
              }}
            >
              <span
                style={{
                  margin: "5px",
                  padding: "0px 2px",
                  fontWeight: "bolder",
                }}
              >
                {btnName}
              </span>
              <FontAwesomeIcon icon={faRightToBracket} />
            </button>
          </li>
          <li>
            <Link to="/userinfo"  style={{
                textDecoration: "none",
                color: "rgba(131, 34, 34, 0.877)",
              }}><FontAwesomeIcon icon={faUser} bounce style={{"--fa-primary-color": "#e53e06", "--fa-secondary-color": "#6d181c",fontSize:'30px'}} /></Link></li>
        </ul>
      </div>
    </div>
  );
}
