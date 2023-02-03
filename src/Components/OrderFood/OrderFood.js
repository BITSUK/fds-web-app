import React from "react";
import SearchInput from '../CentralPane/SearchInput.js';
import FoodItemsDisplay from '../CentralPane/FoodItemsDisplay.js';
import CustomerJourney from '../CentralPane/CustomerJourney.js';
import Testimonials from '../CentralPane/Testimonials.js';
import { useState } from "react";
import './OrderFood.css';
import Stations from '../../Constants/Stations.json';
import Trains from '../../Constants/Trains.json';
import {Link} from "react-router-dom";

// function formatTrainRow(inputData){
//     return (
//         {inputData.length === 0 ? (
//             <div>
//                 <p className="table-row"><b>""</b></p>
//             </div>
//         ) : (   inputData.map(record => (
//                 <div className="table-row">
//                         {inputData.train_no} : {inputData.train_name}
//                 </div>
//             ))
//          )}
//     )
// }

export default function OrderFood(){
    const [mode,setMode] = useState("-");
    const [query, setQuery] = useState("");

    const stationsList = Stations.filter(e => (e.station_code.toLowerCase().includes(query.toLowerCase()))
                                            ||(e.station_name.toLowerCase().includes(query.toLowerCase())));
    const trainsList = Trains.filter(e => (e.train_no.toLowerCase().includes(query.toLowerCase()))
                                        ||(e.train_name.toLowerCase().includes(query.toLowerCase())));

    const handleRadioClick = (event) => {

        if (document.getElementById("radioTrain").checked == true ) { 
            setMode("t"); 
        } else if (document.getElementById("radioStation").checked == true ) { 
            setMode("s"); 
        } else {
            setMode("-");
        }

    }

    const handleSubmit = (event) => {

        event.preventDefault();     
        setQuery(document.getElementById("searchBox").value);

    }

    return(
        <>
            <div id="order-bar">
				<br/>                
				<span id="OrderNowText"><b>Order Now:&nbsp;&nbsp;&nbsp;</b></span>
				<input type="radio" id="radioTrain" name="search-options" value="Train" onClick={handleRadioClick}/>&nbsp;
				<label htmlFor="radioTrain">Train No</label>&nbsp;&nbsp;&nbsp;
				<input type="radio" id="radioStation" name="search-options" value="Station" onClick={handleRadioClick}/>&nbsp;
				<label htmlFor="radioStation">Station</label>
			</div>
			<div id="search-container">
				<form action="#">
					<input type="text" placeholder="Search.." name="search" id="searchBox" onChange={e => setQuery(e.target.value)}/>
					<button type="submit" id="srchBtn" onClick={handleSubmit}>Search</button>
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
                                <p className="table-row"><b>""</b></p>
                            </div>
                        ) : (   trainsList.map(record => (
                                <div className="table-row">                                     
                                    <Link to={`/order-food/train/${record.train_no}`} key={record.id}>
                                       - {record.train_no} : {record.train_name}
                                    </Link>
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
                                    <Link to={`/order-food/station/${record.station_name}`} key={record.id}>
                                       - {record.station_name}
                                    </Link>
                                </div>
                            ))
                         )}
                    </div>
           }
              
        </>
    )    
}
