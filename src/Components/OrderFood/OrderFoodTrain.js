import React from "react";
import './OrderFood.css';
import { useParams } from "react-router-dom";
import Trains from '../../Constants/Trains.json';
import {Link} from "react-router-dom";

export default function OrderFoodTrain(){

    const inpParms = useParams(); 
    const stationList = Trains.filter(e => (e.train_no.includes(inpParms["train_id"])));

    return(
        <>
            <div>
				<br/>                
				<span id="Train No"><b>Train No: {inpParms["train_id"]}</b></span>
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
