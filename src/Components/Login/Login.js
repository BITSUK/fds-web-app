import React from 'react';
import './Login.css';
import {Link, useNavigate } from "react-router-dom";
import {useContext} from "react";
import { UserContext } from '../Contexts/UserContext.js';
import { AlertContext } from '../Contexts/AlertContext.js';
import { useState} from "react";
import Alert from "../Alert/Alert.js";


export default function Login(props) {
    
    // Obtain alert context reference
    const [userContext, setUserContext] = useContext(UserContext);	

    //initialise fetched user    
    const [fetchedUser, setFetchedUser] = useState({
                                                    userId: "Init",
                                                    name: "Initial",
                                                    roles: ["Customer"],   
                                                    status: "active"        
                                                  });

    console.log("Fetched User initial value");
    console.log(fetchedUser);

    // Obtain alert context and define a local alert object    
    const [alertMessage, setAlert] = useContext(AlertContext);
    const a = {
        alertType: alertMessage.alertType,
        alertMessage: alertMessage.alertMessage
    }     

    //Updates to fetchedUser state causes console.logging
    // useEffect(() => {
    //     console.log("Value of fetchedUser in useEffect:");
    //     console.log(fetchedUser);
    // },[fetchedUser]);

    const navigate = useNavigate();

    // ******************************************************
    // Handle Login Processing
    // ******************************************************
    const handleLogin = (event) => {

        event.preventDefault();               
        

        // Create and initialise a local userContext object using global userContext
        const localUserContext = {
            userId      : userContext.uid,
            name        : userContext.name,
            isLoggedIn  : userContext.isLoggedIn
        }  

        // Obtain the userid and password entered by user on screen
        var inputUserId = document.getElementById("loginFormUserId").value;        
        var inputPassword = document.getElementById("loginFormPassword").value;        
        

        //Validate the user id and password
        if (inputUserId === "" || inputPassword === "") {
            // alert("Userid or password not entered");
            a.alertMessage = "Userid or password not entered";
            a.alertType = "error";
            setAlert(a);

        } else if ((inputUserId.length >= 4) &&  (inputPassword.length >=8)) { 
            // Call a backend API endpoint /login to validate userid and password and to get user details
            // Ref: https://reactjs.org/docs/faq-ajax.html#how-can-i-make-an-ajax-call

            let loginURL = "https://run.mocky.io/v3/0bf5e410-3e85-4145-b11d-a3e28caea78b";
            
            fetch(loginURL)                         // returns Promise object
            .then(response => response.json())      // convert response to json
            .then(function(data) {                  // process response
                console.log("Got API Response: ");
                console.log(data);

                // Now how to pass response to local variable in the function? 
                // Local variable are not accessible, as this response is async
                // Ref: https://beta.reactjs.org/learn/updating-objects-in-state

                // Create a temp User object using reponse data
                let tempUser = {
                    userId  : data.userId,
                    name    : data.userName,
                    roles   : data.userRoles,   
                    status  : data.userStatus 
                }
                console.log("Value extacted in tempUser:");
                console.log(tempUser);

                //Now update fetchedUser state object 
                console.log("Updating the local fetchedUser state using tempUser...");
                console.log("fetchedUser before update:");
                console.log(fetchedUser);                
                setFetchedUser(tempUser);   // ERROR: seems this line is not working, why??
                console.log("fetchedUser after update:");
                console.log(fetchedUser); 
                
                
                // Also try shared userContext         
                console.log ("Updating the shared userContext (attempt 1)...");
            
                localUserContext.userId = inputUserId;                   
                localUserContext.name = tempUser.name;       
                localUserContext.isLoggedIn = true;

                console.log("Before update userContext: ");
                console.log(userContext);
                setUserContext(localUserContext);   // ERROR: seems this line is not working, why??
                console.log("After update userContext: ");
                console.log(userContext);
                
            })
            .catch(error => {
                 console.log ("Error calling /login endpoint: " + error);
            });

            // Now update shared userContext         
            console.log ("Updating the shared userContext (attempt 2)...");
            
            localUserContext.userId = inputUserId;   
            if (fetchedUser.name === "") {         // temporary code as facing some issue with fetch & async response
                fetchedUser.name = "User-" + inputUserId; 
            }
            localUserContext.name = fetchedUser.name;       
            localUserContext.isLoggedIn = true;

            setUserContext(localUserContext);   
            console.log("Updated userContext: ");
            console.log(userContext);
            
            alert("Login successful for " + localUserContext.name);
            
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
