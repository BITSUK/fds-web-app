import React from "react";
import HomeIcon from './images/Home icon.png';
import ImgTrainLogo from './images/FDS Train Logo.jpg';
import ImgFDS from './images/FDS.JPG';
import ImgDeliverySteps from './images/Delivery Steps.jpg';
import './css/Header.css';

function Header(){
    return (
        <div className="header-container">
			<div id="HTR" className="header-columns">
				<div id="HTR-L" className="header-row1-col1"><img id="home-ico" src = {HomeIcon} alt="Home"/></div>
				<div id="HTR-M" className="header-row1-col2"></div>
				<div id="HTR-R" className="header-row1-col3">
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
				<nav aria-label="breadcrumb" className="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="#">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Order</li>
					</ol>
				</nav>			
			</div>
		</div>
    )
}

export default Header;