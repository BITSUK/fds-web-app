import React from "react";
import SearchInput from './CentralPane/SearchInput.js';
import FoodItemsDisplay from './CentralPane/FoodItemsDisplay.js';
import CustomerJourney from './CentralPane/CustomerJourney.js';
import Testimonials from './CentralPane/Testimonials.js';
import './OrderFood.css';


function OrderFood(){
    return(
        <>
           <SearchInput />
           <FoodItemsDisplay /> 
           <CustomerJourney />
           <Testimonials />     
        </>
    )    
}

export default OrderFood;