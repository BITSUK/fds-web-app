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
    const trainList = Stations.filter(e => (e.station_code.includes(inpParms["station_code"])));

    var s = inpParms["station_code"];
    var updatedUserContext = userContext;
    updatedUserContext.station = s;
    setUserContext(updatedUserContext);

    //************ RETURN ************
    return(
        <>
            <Alert />
            <div> 
				<br/>                
				<span id="stationCode"><b>Trains for Station Code: {inpParms["station_code"]}</b></span>
                <hr/>
                {trainList.length === 0 ? (
                    <div>
                        <p className="table-row"><b>"No train found"</b></p>
                    </div>
                ) : ( trainList.map(record1 => ( record1.trains.map( record2 => (
                        <div className="table-row">                                    
                            <Link to={`/order-food/rest/${record1.station_code}`} key={record1.station_code}>
                               - {record2.train_no}:{record2.train_name} 
                            </Link>
                        </div>
                    ))))
                )}
			</div>
        </>
    )    
}
