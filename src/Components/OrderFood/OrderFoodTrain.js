import React from "react";
import './OrderFood.css';
import { useParams } from "react-router-dom";
import Trains from '../../Data/Trains.json';
import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import {UserContext} from '../../Contexts/UserContext.js';
import Alert from "../Alert/Alert.js";

export default function OrderFoodTrain(){
    const [userContext, setUserContext] = useContext(UserContext);

    const inpParms = useParams(); 
    const stationList = Trains.filter(e => (e.train_no.includes(inpParms["train_no"])));

    var t = inpParms["train_no"];
    var updatedUserContext = userContext;
    updatedUserContext.train = t;
    setUserContext(updatedUserContext);

    //************ RETURN ************
    return(
        <>
            <Alert />
            <div> 
				<br/>                
				<span id="trainNo"><b>Stations for Train No: {inpParms["train_no"]}</b></span>
                <hr/>
                {stationList.length === 0 ? (
                    <div>
                        <p className="table-row"><b>"No station found"</b></p>
                    </div>
                ) : ( stationList.map(record1 => ( record1.train_stations.map( record2 => (
                        <div className="table-row">                                    
                            <Link to={`/order-food/rest/${record2.station_code}`} key={record2.station}>
                               - {record2.station} ({record2.station_code})
                            </Link>
                        </div>
                    ))))
                )}
			</div>
        </>
    )    
}
