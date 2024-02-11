import React from 'react'
import UserContext from '../utils/UserContext'
import { useContext } from 'react'
import { LOGO_URL } from '../utils/constants'

function ThankYou() {
 const {loginUser} = useContext(UserContext)

  return (<>
    <div style={{
        textAlign: "center",
        padding: "40px",
        margin: "50px",
        color: "rgba(145, 34, 34, 0.877)",
        fontSize:"250%",
        fontWeight:"700"
      }}>ThankYou <span style={{color:"black"}}>{loginUser}</span> for Contact Us, Team will reach back to you shortly...</div>
      <img src={LOGO_URL} alt="" className="imgThank"/>
    </>
  )
}

export default ThankYou