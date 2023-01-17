import React from "react";
import FoodItemsDisplay from './FoodItemsDisplay.js';
import './css/FoodItemsDisplay.css';
import CustomerJourney from './CustomerJourney.js';
import './css/CustomerJourney.css';

function CentralPane(){
    return(
        <>
           <FoodItemsDisplay /> 
           <CustomerJourney />
        </>
    )    
}

export default CentralPane;