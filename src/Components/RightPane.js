import React from "react";
import OfferItem from "./OfferItem.js";
import './css/RightPane.css';

function RightPane(){
    return(
        <>
            <OfferItem imageName="Offer1.png" />
            <OfferItem imageName="Offer2.png" />
            <OfferItem imageName="Offer3.png" />
            <OfferItem imageName="Offer4.png" />            
        </>
    )    
}

export default RightPane;