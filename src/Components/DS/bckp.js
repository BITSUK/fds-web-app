import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rest_rec from './JsonData/Restarant.json';
import './Dashboard.css'
import Offers from "./Offers";


function Ds() {
  const [query, setQuery] = useState("");  

  return (    
    <>
      <input type="text" className="form-control" id="search" placeholder="Search .." onChange={e => setQuery(e.target.value)} />

      {Rest_rec.filter(e => e.rest_name.toLowerCase().includes(query)).map(record => {

        return (
          <>
            <div class="container-fluid">
              <div class="row content">
                <br />

                <div class="col-sm-12">
                <div class="row">
                 <Offers/>
                 </div>
                  <>
                    <div class="row">
                      <br />
                      <div class="col-sm-8">
                        <div class="well" >
                          <img src={record.image_link} alt="restaurant" />
                          <p key={record.rest_id}>{record.rest_name}</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="well">
                          <Link to="/OrderFoodNow" key={record.rest_id}>Order Now</Link>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </>

        )
      })
      }
    </>
    
  )
}
export default Ds;