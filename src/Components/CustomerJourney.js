import React from "react";
import process from './images/process.jpg'
import './css/CustomerJourney.css';

export default function CustomerJourney(){

    return(
        <>
            <div className="customer-journey">
				<div><img src={process} alt=""/></div>			
			</div>
        </>
    )
}