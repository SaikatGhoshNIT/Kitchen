import React from 'react';
import UserContext from '../../utils/UserContext';
import { useContext, useState } from 'react';

function UserInfo() {
  const { loginUser, setUserName, loginEmail, setUserEmail } = useContext(UserContext);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  //   const updateName = (e)=>{
  //     e.preventDefault();
  //     setUserName(name)
  //   }

  return (
    <div style={{ margin: "auto", padding: "50px", textAlign: "center" }}>
      <h1>Hey {loginUser}</h1>
      <h5>{loginEmail}</h5>

      <div style={{marginBottom:"10px"}}>
        <label><b>Update UserName : </b></label>
        <input type="text" style={{
          padding: "5px 10px",
          marginRight: "10px",
          width: "350px",
          height: "20px",
          borderRadius: "50px",
        }} value={name} onChange={(e) => setName(e.target.value)} />
        {/*<button type='Submit' className="add" style={{position:"static"}} onClick={(e)=>{
                e.preventDefault();
                setUserName(name)
            }}>Update</button>*/}
      </div>
      <div style={{marginBottom:"10px"}}>
        <label><b>Update UserEmail : </b></label>
        <input type="text" style={{
          padding: "5px 10px",
          marginRight: "10px",
          width: "350px",
          height: "20px",
          borderRadius: "50px",
        }} value={email} onChange={(e) => setEmail(e.target.value)} />

      </div>
      <div style={{marginBottom:"15px"}}>
        <button type='Submit' className="add" style={{ position: "static" }} onClick={(e) => {
          e.preventDefault();
          setUserName(name)
          setUserEmail(email)
        }}>Update</button>
      </div>
    </div>
  )
}


export default UserInfo