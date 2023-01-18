import React from "react";
import './css/SideMenu.css';
import {Link} from "react-router-dom";

function SideMenu(){
    return(
        <>
			<div className="column left-nav" id="BML">
				<div className="vertical-menu">
					<Link to="/login">Login</Link>
					<Link to="#">Order Food</Link>
				</div>
				<div className="vertical-menu-expand">
					<Link to="#">Menu</Link>
				</div>
			</div>
		
        </>
    )
    
}

export default SideMenu;