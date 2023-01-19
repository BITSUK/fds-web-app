import React from 'react'
import './css/Login.css';
import {Link} from "react-router-dom";

export default function Login() {
    
    const handleLogin = (event) => {
        event.preventDefault();
        alert("Login button clicked");        
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
                <Link to="#" class="btn btn-primary" role="button" onClick={handleLogin}>Login</Link>
                &nbsp;&nbsp;
                <Link to="/signup" class="btn btn-success" role="button">Sign-up</Link>
                &nbsp;&nbsp;
                <Link to="/forgot-password" class="btn btn-danger" role="button">Forgot Password</Link>
            </div>
        </div>
    </div>
  )
}
