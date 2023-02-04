import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rest_rec from '../../Data/Restaurants.json';
import './OrderFoodRest.css';
import { useParams } from "react-router-dom";

export default function OrderFoodRest() {
    const inpParms = useParams();
    const [query, setQuery] = useState("");
    const filteredRestaurants = Rest_rec.filter(e => (e.rest_location.toLowerCase().includes(inpParms["station_id"].toLowerCase())));
    const currentItems = filteredRestaurants.filter(e => (e.rest_name.toLowerCase().includes(query.toLowerCase())));


  return (
    <div className="container-fluid">
        <div className="row content">
            <div><b>Restaurants @ {inpParms["station_id"]}</b></div>
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
