import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const submitHandler = (e) => {
        e.preventDefault();
        setUser({ userName, password })
    }

    return (
        <>
            <input type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="userName" />
            {' '}
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />
            <button onClick={submitHandler}>Submit</button>
        </>
    )
}

export default Login
