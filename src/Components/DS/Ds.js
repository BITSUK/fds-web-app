import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rest_rec from './JsonData/Restarant.json';
import './Dashboard.css'
import Offers from "./Offers";


function Ds() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div class="container-fluid">
        <div class="row content">

          <br />

          <div class="col-sm-12">

            <div class="well">
              <input type="text" className="form-control" id="Search" placeholder="Search Restaurant.... .." onChange={e => setQuery(e.target.value)} />
            </div>
            <div class="row"><br />
              <Offers />
            </div>

            {
              Rest_rec.filter(e => e.rest_name.toLowerCase().includes(query)).map(record => {
                if (Rest_rec.length > 0) {
                  return (
                    <>
                      <div class="row">
                        <div class="col-sm-8"><br />
                          <div class="well">
                            <img src={record.image_link} alt="restaurant" />
                            <p key={record.rest_id}>{record.rest_name}</p>
                          </div>
                        </div>
                        <div class="col-sm-4"><br /><br />
                          <div class="well">
                            <Link to={`/OrderFoodNow/${record.rest_id}`} key={record.rest_id}>Order Now</Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                } else {
                  return(
                    <>
                    <div class="row">
                        <div class="col-sm-8"><br />
                          <div class="well">
                            <p>No record found</p>
                          </div>
                        </div>
                        
                      </div>
                  </>
                  )
                  
                }

              })
            }

          </div>
        </div>
      </div>
    </>
  )
}
export default Ds;