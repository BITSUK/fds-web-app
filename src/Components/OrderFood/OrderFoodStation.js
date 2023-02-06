import React from "react";
import './OrderFood.css';
import { useParams } from "react-router-dom";
import Stations from '../../Data/Stations.json';
import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import {UserContext} from '../../Contexts/UserContext.js';
import Alert from "../Alert/Alert.js";

export default function OrderFoodStation(){
    const [userContext, setUserContext] = useContext(UserContext);
    const inpParms = useParams(); 

    //Search in Stations JSON
    const stationTrainXREF = Stations.filter(e => (e.station_code.includes(inpParms["station_code"])));

    //Update selected station in userContext
    var updatedUserContext = userContext;
    updatedUserContext.station = inpParms["station_code"]
    updatedUserContext.stationName = stationTrainXREF[0].station_name;
    setUserContext(updatedUserContext);

    //************ RETURN RESPONSE ************
    return(
        <>
            <Alert />
            <div> 
				<div>                
				    <b>Station : {inpParms["station_code"]} - {stationTrainXREF[0].station_name}</b>
                </div>
                <hr/>
                {stationTrainXREF.length === 0 ? (
                    <div>
                        <p className="table-row"><b>"No train found"</b></p>
                    </div>
                ) : ( stationTrainXREF.map(record1 => ( record1.trains.map( record2 => (
                        <div className="table-row">                                    
                            <Link to={`/order-food/rest/${record1.station_code}/${record2.train_no}`} key={record1.station_code}>
                               - {record2.train_no}:{record2.train_name} 
                            </Link>
                        </div>
                    ))))
                )}
			</div>
        </>
    )    
}
