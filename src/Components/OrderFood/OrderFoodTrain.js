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

    //Search in Trains JSON
    const trainStationXREF = Trains.filter(e => (e.train_no.includes(inpParms["train_no"])));

    //Update selected train in userContext
    var updatedUserContext = userContext;
    updatedUserContext.train = inpParms["train_no"];
    updatedUserContext.trainName = trainStationXREF[0].train_name;
    setUserContext(updatedUserContext);

    //************ RETURN RESPONSE ************
    return(
        <>
            <Alert />
            <div> 
				<div>
				    <b>Train : {inpParms["train_no"]} - {trainStationXREF[0].train_name}</b>
                </div>
                <hr/>
                {trainStationXREF.length === 0 ? (
                    <div>
                        <p className="table-row"><b>"No station found"</b></p>
                    </div>
                ) : ( trainStationXREF.map(record1 => ( record1.train_stations.map( record2 => (
                        <div className="table-row">                                    
                            <Link to={`/order-food/rest/${record2.station_code}/${record1.train_no}`} key={record2.station}>
                               - {record2.station} ({record2.station_code})
                            </Link>
                        </div>
                    ))))
                )}
			</div>
        </>
    )    
}
