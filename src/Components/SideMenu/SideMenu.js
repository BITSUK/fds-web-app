import React from "react";
import './SideMenu.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext.js';


function SideMenu() {

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
		alert("Succesfully logged out.");

	}

	const handleAlert=()=>{
		alert("login first");
	}

	return (
		<>
			<div className="column left-nav" id="BML">
				<div className="vertical-menu">
					{userContext.isLoggedIn ? (
						<>
							<Link to="/" onClick={handleLogout}>Logout</Link>
							<Link to="/ds">Dashboard</Link>
							<Link to="/OrderFoodNow">OrderFood</Link>
							<Link to="/offers">Offers</Link>
							<Link to="/OrderDetails">OrderDetails</Link>
							<Link to="/TrackOrder">Track Order</Link>
							<Link to="/OrderFoodNav">Order Status</Link>
							<Link to="/OrderFoodNav">Cancel Order</Link>
							<Link to="/MyCart">My Cart</Link>
						</>

					) : (
						<>
							<Link to="/login">Login</Link>	
							<Link to="/ds" onClick={handleAlert}>OrderFood</Link>						
							
						</>
					)}




				</div>
				<div className="vertical-menu-expand">
					<Link to="#">Menu</Link>
				</div>
			</div>

		</>
	)

}

export default SideMenu;