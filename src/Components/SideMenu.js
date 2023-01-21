import React from "react";
import './css/SideMenu.css';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './Contexts/UserContext.js';

function SideMenu(){

	const [userContext, setUserContext] = useContext(UserContext);	

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