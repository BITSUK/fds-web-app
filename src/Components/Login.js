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
                <input type="text" className="form-control" id="loginFormUserId" placeholder="mobile/email"/>
            </div>
            <div className="login-form-components">
                <label htmlFor="loginFormPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginFormPassword" placeholder="password"/>
            </div>
            <div className="login-form-components">
                <Link to="#" class="btn btn-info" role="button" onClick={handleLogin}>Login</Link>
                &nbsp;&nbsp;
                <Link to="/signup" class="btn btn-info" role="button">Sign-up</Link>
            </div>
        </div>
    </div>
  )
}
