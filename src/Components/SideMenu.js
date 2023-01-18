import React from "react";
import './css/SideMenu.css';

function SideMenu(){
    return(
        <>
			<div className="column left-nav" id="BML">
				<div className="vertical-menu">
					<a href="#">Login</a>
					<a href="#">Order Food</a>
				</div>
				<div className="vertical-menu-expand">
					<a href="#">Menu</a>
				</div>
			</div>
        </>
    )
    
}

export default SideMenu;