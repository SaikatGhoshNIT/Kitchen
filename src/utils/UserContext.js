import { createContext } from "react";


const UserContext = createContext({
    loginUser : "User",
    loginEmail : "User Email",
    loginPassword : "Password"
})

export default UserContext;