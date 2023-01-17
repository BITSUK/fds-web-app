import React from "react";
import FoodItemsDisplay from './FoodItemsDisplay.js';
import './css/FoodItemsDisplay.css';
import CustomerJourney from './CustomerJourney.js';
import './css/CustomerJourney.css';
import Testimonials from './Testimonials';
import './css/Testimonials.css';

function CentralPane(){
    return(
        <>
           <FoodItemsDisplay /> 
           <CustomerJourney />
           <Testimonials />     
        </>
    )    
}

export default CentralPane;