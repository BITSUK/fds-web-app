import React from "react";
import Offer from './images/offers/Offer1.png'

export default function OfferItem(props){
    const imagePath = "./images/offers";
    return(
        <div className="OfferItem">
			<img src ={Offer} alt="" style={{width:'100%'}}/>							
		</div>        
    )
}