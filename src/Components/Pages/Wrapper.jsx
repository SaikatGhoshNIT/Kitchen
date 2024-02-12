import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

export default function Wrapper() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{margin:"20px 10px 10px 10px", padding:"20px"}}>
        <img style={{width:"400px",height:"auto"}} src={LOGO_URL} alt="Login Image" />
      </div>
      <div style={{textAlign:"center"}}><h2>Welcome to Kitchen.</h2><h3>Please Login here to Order your food at your doorstep.</h3></div>
      <div>
        <Link to="/login">
          <button
            className="loginBtn"
            onClick={() => {
              // btnName === "LogIn"
              //   ? setBtnName("LogOut")
              //   : setBtnName("LogIn");
            }}
          >
            <span
              style={{
                margin: "5px",
                padding: "0px 2px",
                fontWeight: "bolder",
              }}
            >
              Login
            </span>
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
        </Link>
      </div>
    </div>
  );
}
