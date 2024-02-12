import React from "react";
import UserContext from "../../utils/UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom/dist";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const {loginUser, setUserName, loginEmail, setUserEmail, loginPassword} = useContext(UserContext);
  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `home`; 
    navigate(path);
  }
  return (
    <div
      style={{
        margin: "auto",
        padding: "50px",
        textAlign: "center",
        width: "520px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid rgba(203, 84, 63, 0.877)",
          textAlign: "center",
          borderRadius: "50px",
        }}
      >
        <div style={{ margin: "15px", padding: "10px" }}>
          <label>
            <b>Name : </b>
          </label>
          <input
            type="text"
            style={{
              padding: "5px 10px",
              marginRight: "10px",
              width: "350px",
              height: "20px",
              borderRadius: "50px",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ margin: "15px", padding: "10px" }}>
          <label>
            <b>Email : </b>
          </label>
          <input
            type="text"
            style={{
              padding: "5px 10px",
              marginRight: "10px",
              width: "350px",
              height: "20px",
              borderRadius: "50px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ margin: "15px", padding: "10px" }}>
          <label>
            <b>Password : </b>
          </label>
          <input
            type="password"
            style={{
              padding: "5px 10px",
              marginRight: "10px",
              width: "350px",
              height: "20px",
              borderRadius: "50px",
            }}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div style={{ margin: "15px", padding: "10px" }}>
          
            <button
              className="add"
              style={{ position: "static" }}
              onClick={() => {
                if(name != loginUser){
                  console.log("You are not a valid user");
                }
                routeChange()
                //e.preventDefault();
                // setUserName(name);
                // setUserEmail(email)
                //console.log("Button clicked");
              }}
            >
              Login
            </button>
          
        </div>
      </div>
    </div>
  );
}
