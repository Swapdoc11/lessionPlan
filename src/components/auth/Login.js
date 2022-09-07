import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Register from "./Register";

const Login = () => {
    var [username, setUsername] = useState();
    var [password, setPassword] = useState();
    var [isRegister,setRegister] = useState(false)

    const loginUser = (username, password) => {
        if (username === "swapnil" && password === "jadhav") {
            console.warn("Hello School App")
        }
    }

   

    return (
        <>
    
            <h2>LOGIN</h2>
            <div>
                
    
                <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br /><br />
                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br /><br />
                <button onClick={() => loginUser(username, password)}>Submit</button> &nbsp;
                <nav>
                <Link to='/Register'>Register</Link>
                </nav>
                <Outlet />
                <button onClick={() => setRegister(true)}>Register</button>
                
                {isRegister? <Register />:null}
            </div>
        </>
    )
}
export default Login;