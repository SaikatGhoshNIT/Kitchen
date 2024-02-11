import React from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        margin: "50px",
      }}
    >
      <h1
        style={{
          paddingBottom: "20px",
          color:
            "rgba(145, 34, 34, 0.877)",
        }}
      >
        Contact Us
      </h1>
      <h2>Founder : Saikat Ghosh</h2>
      <h4>
        Analyst in Infosys with 3years of Exprience on FrontEnd Development
      </h4>
      <p>
        <b>Email : saikatghosh5434@gmail.com</b>
      </p>
      <p>
        <b>Mobile : 8637809770</b>
      </p>
      <form className="contactForm">
        <div>
        <label style={{textAlign:"left", display:"block", paddingLeft:"10px"}}>Name :</label>
        <input style={{
              padding: "5px 10px",
              marginRight: "10px",
              width: "350px",
              height: "20px",
              borderRadius: "50px",
              marginBottom: "15px"
            }}  type="text" placeholder="Put Your Name Here"/></div>
        <div>
        <label style={{textAlign:"left",  display:"block", paddingLeft:"10px"}}>Email :</label>
        <input style={{
              padding: "5px 10px",
              marginRight: "10px",
              width: "350px",
              height: "20px",
              borderRadius: "50px",
              marginBottom: "15px"
            }} type="email" placeholder="Put your Email Here" /></div>
        <Link to="/contactformsubmission">
        <button className="add" style={{position:"static"}} type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
}
