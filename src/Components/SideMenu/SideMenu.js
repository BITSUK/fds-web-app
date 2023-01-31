import React from "react";
import './SideMenu.css';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext.js';
import { AlertContext } from '../Contexts/AlertContext.js';
import { AppContext } from '../Contexts/AppContext.js';
import CustomerMenu from "./CustomerMenu.js";
import RestaurantMenu from "./RestaurantMenu.js";


function SideMenu(){

	const [userContext, setUserContext] = useContext(UserContext);	
	// const [appContext, setAppContext] = useContext(AppContext);	
	
	// Obtain alert context and define a local alert object    
    const [alertMessage, setAlert] = useContext(AlertContext);
    const a = {
        alertType: alertMessage.alertType,
        alertMessage: alertMessage.alertMessage
    } 

	// This function is repeated in Sidemenu and Header, to be moved into a common module
	const handleLogout = (event) => {

		setUserContext({
			uid: "Guest",
			name: "Guest",
			role: "default",
			isLoggedIn: false
		});

		// setAppContext("login");
		a.alertMessage = ""
		a.alertType = "default";
		setAlert(a);
	}

	// set App context when menu item clicked
	// const handleOrderFood = (event) => {
	// 	setAppContext("order-food");
	// }

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

export default SideMenu;