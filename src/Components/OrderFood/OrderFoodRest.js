import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rest_rec from '../../Data/Restaurants.json';
import './OrderFoodRest.css';
import { useParams } from "react-router-dom";
import {UserContext} from '../../Contexts/UserContext.js';
import { useContext } from "react";

export default function OrderFoodRest() {
    const [userContext, setUserContext] = useContext(UserContext);

    const inpParms = useParams();
    const [query, setQuery] = useState("");
    const filteredRestaurants = Rest_rec.filter(e => (e.rest_location_code.toLowerCase().includes(inpParms["station_id"].toLowerCase())));
    const currentItems = filteredRestaurants.filter(e => (e.rest_name.toLowerCase().includes(query.toLowerCase())));

    var s = inpParms["station_id"];
    var updatedUserContext = userContext;
    updatedUserContext.station = s;
    setUserContext(updatedUserContext);

  //************** RETURN ***************
  return (
    <div className="container-fluid">
        <div className="row content">
            <div>
                <span><b>Restaurants @ {inpParms["station_id"]}</b></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span><b>Train:<input type="text" id="train" value={userContext.train} /></b></span>
            </div>
            <br/>
            <div className="col-sm-12">
                <div >
                    <input type="text" className="form-control" id="Search" placeholder="Filter Restaurant..." onChange={e => setQuery(e.target.value)} />
                </div>                               
                <hr/>
                {filteredRestaurants.length === 0 ? (
                    <div className="row">
                    <div className="col-sm-8">
                        <br />
                        <div >
                        <p>No record found</p>
                        </div>
                    </div>
                    </div>
                ) : (
                currentItems.map(record => (
                <div className="table-row">
                    <div className="col-sm-8">
                        <div >                        
                            {/* <img src={record.image_link} alt="restaurant" />                         */}
                            <p key={record.rest_id}>{record.rest_name}</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div >                            
                            <Link to={`/order-food/rest/${record.rest_id}`} key={record.rest_id}>Order Now</Link>
                        </div>
                    </div>
                </div>
                ))
            )}

        </div>
      </div>
    </div>
  );
}
