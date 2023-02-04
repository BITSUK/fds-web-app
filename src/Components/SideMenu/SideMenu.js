import React from "react";
import './SideMenu.css';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { UserContext, defaultUser} from '../../Contexts/UserContext.js';
import { AlertContext } from '../../Contexts/AlertContext.js';
import CustomerMenu from "./CustomerMenu.js";
import RestaurantMenu from "./RestaurantMenu.js";

export default function SideMenu(){

	const [userContext, setUserContext] = useContext(UserContext);	
	
	// Obtain alert context and define a local alert object    
    const [alertMessage, setAlert] = useContext(AlertContext);
    const a = {
        alertType: alertMessage.alertType,
        alertMessage: alertMessage.alertMessage
    } 

	// Handles Logout
	const handleLogout = (event) => {

		setUserContext(defaultUser);

		a.alertMessage = ""
		a.alertType = "default";
		setAlert(a);
	}

	//This function dynamically renders side menu options looking at user role and login status
	function ShowMenuOptions() {

		return (
			<>
				<div> 
					{!userContext.isLoggedIn && <Link to="/login">Login</Link>}
				</div>
				<div>
					{(userContext.role == "customer") && <CustomerMenu />}
					{(userContext.role == "restaurant") && <RestaurantMenu />}
					{(userContext.role == "default") && <Link to="/order-food">Order Food</Link>}
				</div>
				<div>
					{userContext.isLoggedIn && <Link to="/login" onClick={handleLogout}>Logout</Link>}					
				</div>
				
			</>
		);
	}
	
	//******************** RETURN ***************/
    return(
        <>
			<div className="column left-nav" id="BML">
				<div className="vertical-menu">
					<ShowMenuOptions />
				</div>
				<div className="vertical-menu-expand">
					<Link to="#">Menu</Link>
				</div>
			</div>
		
        </>
    )
}
