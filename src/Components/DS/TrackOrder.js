import React from "react";
import OrderDetails from './JsonData/Orders.json';
function TrackOrder(){

    return (
        <>
          {OrderDetails.filter(e=>e.order_status.includes("Pending")).map(record => {
    
            return (
              <>
                 <div class="col-sm-12">
              <div class="well">
                <h4>#{record.order_number}</h4>
                <table>
                  <tr>
                    <th>Date</th>
                    <td>{record.order_date}</td>
                  </tr> 
                  <tr>
                    <th>Amount</th>
                    <td>{record.order_amount}</td>
                  </tr> 
                  <tr>
                    <th>Address</th>
                    <td>{record.order_location}</td>
                  </tr> 
                  <tr>
                    <th>Status</th>
                    <td>{record.order_status}</td>
                  </tr> 
                  
                </table>
              </div>
            </div>
              </>
            )
          })}
        </>
      )

}
export default TrackOrder;