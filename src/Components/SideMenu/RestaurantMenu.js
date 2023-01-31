import React from "react";
import {Link} from "react-router-dom";

export default function RestaurantMenu(props){
    return(
        <>
			<Link to="/dashboard">Dashboard</Link>
            <Link to="/rest-menu">Menu</Link>
            <Link to="/rest-orders">Active Orders</Link>
            <Link to="/rest-settings">Settings</Link>
            <Link to="/profile">Profile</Link>
		</>        
    )
}