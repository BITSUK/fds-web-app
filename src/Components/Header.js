import React from "react";
import ImgTrainLogo from './images/FDS Train Logo.jpg';
import ImgFDS from './images/FDS.JPG';
import ImgDeliverySteps from './images/Delivery Steps.jpg';

function Header(){
    return (
        <div className="header-container">
			<div id="HTR" className="header-columns">
				<div id="HTR-L" className="header-column1">Home</div>
				<div id="HTR-M" className="header-column2">Call 99888 55533 to Order Now ... </div>
				<div id="HTR-R" className="header-column3">
					<span id="Welcome">Welcome</span>
					<span id="Login">Login</span>
				</div>
			</div>

			<div id="HMR" className="header-columns">
				<div id="HMR-L" className="header-column1"><img src = {ImgTrainLogo} alt="FDS Train Image"/></div>
				<div id="HMR-M" className="header-column2"><img src = {ImgFDS} alt="Food Delivery Service"/></div>
				<div id="HMR-R" className="header-column3"><img src = {ImgDeliverySteps} alt="Delivery Steps"/></div>
			</div>

			<div className="header-columns">
				<div className="breadcrumb">Home\</div>				
			</div>
		</div>
    )
}

export default Header;