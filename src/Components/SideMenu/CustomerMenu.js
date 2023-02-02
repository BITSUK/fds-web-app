import React from "react";
import {Link} from "react-router-dom";

export default function CustomerMenu(props){
    return(
        <>
            <Link to="/dashboard">Dashboard</Link>
			<Link to="/order-food">Order Food</Link>
            <Link to="/previous-orders">Previous Orders</Link>
            <Link to="/profile">User Profile</Link>
		</>                
    )
}