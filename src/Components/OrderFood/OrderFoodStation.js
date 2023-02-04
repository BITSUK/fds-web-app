import React from "react";
import './OrderFood.css';
import { useParams } from "react-router-dom";
import Trains from '../../Data/Trains.json';
import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import {UserContext} from '../../Contexts/UserContext.js';

export default function OrderFoodStation(){
    const [userContext, setUserContext] = useContext(UserContext);

    const inpParms = useParams(); 
    const stationList = Trains.filter(e => (e.train_no.includes(inpParms["station_id"])));

    var s = inpParms["station_id"];
    var updatedUserContext = userContext;
    updatedUserContext.station = s;
    setUserContext(updatedUserContext);

    //************ RETURN ************
    return(
        <>
            <div> 
				<br/>                
				<span id="station"><b>Station: {inpParms["train_id"]}</b></span>
                {stationList.length === 0 ? (
                    <div>
                        <p className="table-row"><b>"No station found"</b></p>
                    </div>
                ) : ( stationList.map(record1 => ( record1.train_stations.map( record2 => (
                        <div className="table-row">                                    
                            <Link to={`/order-food/station/${record2.station}`} key={record2.station}>
                               - {record2.station}
                            </Link>
                        </div>
                    ))))
                )}
			</div>
        </>
    )    
}
