import React from "react";
import SearchInput from '../CentralPane/SearchInput.js';
import FoodItemsDisplay from '../CentralPane/FoodItemsDisplay.js';
import CustomerJourney from '../CentralPane/CustomerJourney.js';
import Testimonials from '../CentralPane/Testimonials.js';
import { useState } from "react";
import './OrderFood.css';
import Stations from '../../Constants/Stations.json';
import Trains from '../../Constants/Trains.json';



export default function OrderFood(){
    const [mode,setMode] = useState("-");
    const stationsList = Stations.filter(e => (true));
    const trainsList = Trains.filter(e => (true));

    const handleClick = (event) => {

        if (document.getElementById("radioTrain").checked == true ) { 
            setMode("t"); 
        } else if (document.getElementById("radioStation").checked == true ) { 
            setMode("s"); 
        } else {
            setMode("-");
        }

    }

    return(
        <>
            <div id="order-bar">
				<br/>                
				<span id="OrderNowText"><b>Order Now:&nbsp;&nbsp;&nbsp;</b></span>
				<input type="radio" id="radioTrain" name="search-options" value="Train" onClick={handleClick}/>&nbsp;
				<label htmlFor="radioTrain">Train No</label>&nbsp;&nbsp;&nbsp;
				<input type="radio" id="radioStation" name="search-options" value="Station" onClick={handleClick}/>&nbsp;
				<label htmlFor="radioStation">Station</label>
			</div>
			<div id="search-container">
				<form action="#">
					<input type="text" placeholder="Search.." name="search" id="searchBox" />
					<button type="submit" id="srchBtn" >Search</button>
				</form>
			</div>
           {(mode == "-") && <FoodItemsDisplay />}
           {(mode == "-") && <CustomerJourney />}
           {(mode == "-") && <Testimonials />}    

           {(mode == "t") && 
                    <div> 
                        <div className="title"><b>List of Trains:</b></div>
                        {trainsList.length === 0 ? (
                            <div>
                                <p className="table-row"><b>None</b></p>
                            </div>
                        ) : (   trainsList.map(record => (
                                <div className="table-row">
                                        {record.train_no} : {record.train_name}
                                </div>
                            ))
                         )}
                    </div>
           }
           {(mode == "s") && <div> 
                        <div className="title"><b>List of Stations:</b></div>
                        {stationsList.length === 0 ? (
                            <div>
                                <p className="table-row"><b>None</b></p>
                            </div>
                        ) : (   stationsList.map(record => (
                                <div className="table-row">
                                        {record.station_name}
                                </div>
                            ))
                         )}
                    </div>
           }
              
        </>
    )    
}
