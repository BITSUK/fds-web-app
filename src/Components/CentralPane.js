import React from "react";
import FoodItemsDisplay from './FoodItemsDisplay.js';
import CustomerJourney from './CustomerJourney.js';
import Testimonials from './Testimonials.js';
import './css/CentralPane.css';


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