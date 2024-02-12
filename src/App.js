import React, { Suspense, useEffect , useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ContactUs from "./Components/Pages/ContactUs"
import Error from "./Components/Error";
import Wrapper from "./Components/Pages/Wrapper";
import Login from "./Components/Pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"; //! for giving access to redux store to our react app
import appStore from "./utils/appStore"; //! we need to pass this as a value of store={} as props of Provider
import Cart from "./Components/Pages/Cart";
import UserInfo from "./Components/Pages/UserInfo";
import ThankYou from "./Components/ThankYou";

const RestaurantMenu = lazy (()=> import("./Components/RestaurantMenu"))
const About = lazy (()=> import("./Components/Pages/About"))


export default function App() {

const [userName, setUserName] = useState("")
const [userEmail, setUserEmail] = useState("")
const [userPass, setUserPass] = useState("")

useEffect(()=>{
  //Make an API call and send username and password
  const data = {
    name : "LiSa",
    email : "lisa@gmail.com",
    password : "lisa@123"
  }
  setUserName(data.name)
  setUserEmail(data.email)
  setUserPass(data.password)
},[])


  return (
    <Provider store={appStore}> 
    <UserContext.Provider value={{loginUser : userName , setUserName, loginEmail:userEmail, setUserEmail,loginPassword:userPass}}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  )
}

const appLayout = createBrowserRouter ([
    {
      path : "/",
      element : <App/>,
      children:[
        {
          path:"/",
          element:<Wrapper/>
        },
        {
          path:"/home",
          element:<Body/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path : "/about",
          element : <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense> 
        },
        {
          path : "/contactus",
          element : <ContactUs/>
        },
        {
          path : "/restaurant/:id",
          element : <Suspense fallback={<h1>Loading...</h1>}><RestaurantMenu/></Suspense> 
        },
        {
          path: "/cart",
          element : <Cart></Cart>
        },
        {
          path: "/userinfo",
          element : <UserInfo/>
        },
        {
          path: "/contactformsubmission",
          element : <ThankYou/>
        }
      ],
      
      errorElement : <Error/>
       
    },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appLayout}/>)
