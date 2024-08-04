import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
    const {user} = useContext(UserContext)

    if (!user) return <div>User not found!</div>
    
    return <div>Welcome {user.userName}</div>
}

export default Profile