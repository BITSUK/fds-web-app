import React from 'react'
import './css/Login.css';
import {Link} from "react-router-dom";
import {useContext} from "react";
import { UserContext } from './Contexts/UserContext.js';

export default function Login() {
    
    const [userContext, setUserContext] = useContext(UserContext);	

    const handleLogin = (event) => {

        const defaultUser2 = {
            uid: "Guest2",
            name: "User-Guest2",
          }   
        //   This two lines are just to set a dummy user context (state),
        //   in final state we will be calling a backend API to validate user name and password
        defaultUser2.uid = document.getElementById("loginFormUserId").value ;        
        defaultUser2.name = "User-" + document.getElementById("loginFormUserId").value;        
        event.preventDefault();                     
        setUserContext(defaultUser2);   
        alert("Login successful!   " + defaultUser2.name)     ;
    }    

    return (
    <div>
        <div className="login-form-container">            
            <div className="login-form-components">
                <label htmlFor="loginFormUserId" className="form-label">User Id</label>
                <input type="text" className="form-control" id="loginFormUserId" placeholder="userid"/>
            </div>
            <div className="login-form-components">
                <label htmlFor="loginFormPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginFormPassword" placeholder="password"/>
            </div>
            <div className="login-form-components">
                <Link to="/#" className="btn btn-primary" role="button" onClick={handleLogin}>Login</Link>
                &nbsp;&nbsp;
                <Link to="/signup" className="btn btn-success" role="button">Sign-up</Link>
                &nbsp;&nbsp;
                <Link to="/forgot-password" className="btn btn-danger" role="button">Forgot Password</Link>
            </div>
        </div>
    </div>
  )
}
