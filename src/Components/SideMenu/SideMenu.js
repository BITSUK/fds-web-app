import React from "react";
import './SideMenu.css';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext.js';
import { AlertContext } from '../Contexts/AlertContext.js';
import Alert from "../Alert/Alert.js";


function SideMenu(){

	const [userContext, setUserContext] = useContext(UserContext);	
	// Obtain alert context and define a local alert object    
    const [alertMessage, setAlert] = useContext(AlertContext);
    const a = {
        alertType: alertMessage.alertType,
        alertMessage: alertMessage.alertMessage
    } 

	// This function is repeated in Sidemenu and Header, to be moved into a common module
	const handleLogout = (event) => {

		const currentUser = {
            uid: userContext.uid,
            name: userContext.name,
            isLoggedIn: userContext.isLoggedIn
          } 
		
		currentUser.uid = "Guest";
		currentUser.name = "Guest";  
		currentUser.isLoggedIn = false;

		setUserContext(currentUser);
		alert("Succesfully logged out.");

		a.alertMessage = ""
		a.alertType = "default";
		setAlert(a);

	}

    return(
        <>
			<div className="column left-nav" id="BML">
				<div className="vertical-menu">
					{userContext.isLoggedIn ? (
						<Link to="/" onClick={handleLogout}>Logout</Link>
					):(
						<Link to="/login">Login</Link>
					)}
					<Link to="/order-food">Order Food</Link>
				</div>
				<div className="vertical-menu-expand">
					<Link to="#">Menu</Link>
				</div>
			</div>
		
        </>
    )
    
}

export default SideMenu;