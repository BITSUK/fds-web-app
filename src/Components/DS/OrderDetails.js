import React from "react";
import orderDetails from './JsonData/Orders.json';
import './OrderDetails.css';

function OrderDetails() {

  return (
    <>
      {orderDetails.map(record => {

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

export default OrderDetails;