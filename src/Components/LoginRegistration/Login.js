import React from 'react';
// import ReactDOM from 'react-dom/client';
import './Login.css';
import {Link, useNavigate } from "react-router-dom";
import {useContext} from "react";
import { UserContext } from '../Contexts/UserContext.js';
// import OrderFood from './OrderFood.js';
// import RenderCentralPane from './RenderCentralPane.js';
// import { MessageContext } from './Contexts/MessageContext.js';

export default function Login() {
    
    const [userContext, setUserContext] = useContext(UserContext);	
    // const [message, setMessage] = useContext(MessageContext);	
    const navigate = useNavigate();

    const handleLogin = (event) => {

        event.preventDefault(); 

        const currentUser = {
            uid: userContext.uid,
            name: userContext.name,
            isLoggedIn: userContext.isLoggedIn
          }           
        // const m1 = {
        //     alertMessage : "",
        //     alertType : "alert-warning"
        // }

        // Obtain the values keyed by user
        var inputUserId = document.getElementById("loginFormUserId").value;        
        var inputPassword = document.getElementById("loginFormPassword").value;
        
        //Validate the user id and password
        if (inputUserId === "" || inputPassword === "") {
            alert("Userid or password not entered");            

        } else if ((inputUserId.length >= 4) &&  (inputPassword.length >=8)) { 
            
            //<<backend API call>>

            currentUser.uid = inputUserId;                
            currentUser.name = "User-" + inputUserId;       
            currentUser.isLoggedIn = true;

            setUserContext(currentUser);   
            
            alert("Login successful for " + currentUser.name);
            
            // m1.alertMessage = "Login Successful";
            // setMessage(m1);
            // RenderCentralPane ("OrderFood");
            
            navigate('/ds'); 

        } else {
            alert("Userid or password not accepted, try again.");
        }
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
                <label>Role</label>	&nbsp;
				<input type="radio" id="radioCustomer" name="role-type" value="Customer" defaultChecked/> &nbsp;
                <label htmlFor="radioCustomer">Customer</label>	&nbsp;
				<input type="radio" id="radioRestaurant" name="role-type" value="Restaurant"/> &nbsp;
                <label htmlFor="radioRestaurant">Restaurant</label>			
			</div>
            <div className="login-form-components">
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
                &nbsp;&nbsp;                
                <Link to="/forgot-password" className="btn btn-info" role="button">Forgot Password</Link>
            </div>
            <br />
            <div>Click <Link to="/register"><b>here</b></Link> to register.</div>
            <br />
            <br />
            <br />
            <br />
        </div>
    </div>
  )

 
}
