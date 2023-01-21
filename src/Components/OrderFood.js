import React from "react";
import SearchInput from './SearchInput.js';
import FoodItemsDisplay from './FoodItemsDisplay.js';
import CustomerJourney from './CustomerJourney.js';
import Testimonials from './Testimonials.js';
import './css/OrderFood.css';


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