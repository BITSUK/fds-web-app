import React, {useEffect} from 'react';
import './Login.css';
import {Link, useNavigate } from "react-router-dom";
import {useContext} from "react";
import { UserContext } from '../Contexts/UserContext.js';
import { AlertContext } from '../Contexts/AlertContext.js';
import Alert from "../Alert/Alert.js";

export default function Login(props) {
    
    // Obtain alert context and extract values in a local variable
    const [userContext, setUserContext] = useContext(UserContext);	

    // Obtain alert context and define a local alert object    
    const [alertMessage, setAlert] = useContext(AlertContext);
    const a = {
        alertType: alert.alertType,
        alertMessage: alert.alertMessage
    } 

    var fetcheduserId = "";
    var fetcheduserName  = "";
    var fetcheduserRoles  = "";
    var fetcheduserStatus  = "";

    const navigate = useNavigate();

    const handleLogin = (event) => {

        event.preventDefault();         
          
        const currentUser = {
            userId: userContext.uid,
            name: userContext.name,
            isLoggedIn: userContext.isLoggedIn
        }  

        // Obtain the values keyed by user
        var inputUserId = document.getElementById("loginFormUserId").value;        
        var inputPassword = document.getElementById("loginFormPassword").value;
        
        //Validate the user id and password
        if (inputUserId == "" || inputPassword == "") {
            // alert("Userid or password not entered");
            a.alertMessage = "Userid or password not entered";
            a.alertType = "error";
            setAlert(a);

        } else if ((inputUserId.length >= 4) &&  (inputPassword.length >=8)) { 
            // Call a backend API to validate userid and password and to fetch customer details
            // API endpoint .../login
            //Refer: https://reactjs.org/docs/faq-ajax.html#how-can-i-make-an-ajax-call
            fetch("https://run.mocky.io/v3/0bf5e410-3e85-4145-b11d-a3e28caea78b")
                .then(response => {
                     return response.json(); 
                })
                .then(data => {
                    fetcheduserId = data.userId;
                    fetcheduserName = data.userName;
                    fetcheduserRoles = data.userRoles;
                    fetcheduserStatus = data.userStatus;
                    console.log("Successfully fetched: " + fetcheduserId + " " + fetcheduserName);
                })
                .catch(error => {
                    //console.log ("Error calling /login endpoint");
                });
               
            currentUser.userId = inputUserId;   
            // We have an issue fetch is async, so control not waiting to receive data
            if (fetcheduserName == "") {    
                console.log ("Waiting to fetch user details");
                fetcheduserName = "User-" + inputUserId;
            }
            currentUser.name = fetcheduserName;       
            currentUser.isLoggedIn = true;
            setUserContext(currentUser);   
            
            alert("Login successful for " + currentUser.name);
            
            a.alertMessage = "Login successful";
            a.alertType = "success";
            setAlert(a);
            
            navigate('/order-food'); 

        } else {
            // alert("Userid or password not accepted, try again.");
            a.alertMessage = "Userid or password not accepted, try again.";
            a.alertType = "error";
            setAlert(a);
        }
    }    

    return (
    <div>
        <Alert />
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
