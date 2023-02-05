import React from "react";
import {useContext} from "react";
import {UserContext} from '../../Contexts/UserContext.js';
import Active_Orders from '../../Data/Orders.json';
import './ActiveOrders.css';

export default function ActiveOrders(){

    const [userContext, setUserContext] = useContext(UserContext);

    //Active order filter
    const users_active_orders = Active_Orders.filter(e => 
            (e.user_id == userContext.uid) && (e.order_status == "Pending") );

    return(
        <>
            <div> 
                <span className="order-title"><h3><b>Active Orders:</b></h3></span>
                {users_active_orders.length === 0 ? (
                    <div>
                        <p className="order"><b>None</b></p>
                    </div>
                ) : (   users_active_orders.map(record => (
                            <div >                               
                                <div className="order">
                                    <br/>
                                    <p key={record.order_no}>
                                        <p><b>Order No: {record.order_no}</b></p>
                                        <p>Date: {record.delivery_date}</p>
                                        <p>Station: {record.delivery_station}</p>
                                        <p>Train/Coach/Seat No: {record.train_no}/{record.coach_no}/{record.seat_no}</p>
                                        <p><b className={record.order_status}>Status: {record.order_status}</b></p>
                                    </p> 
                                    <br/>                               
                                </div>
                            </div>
                        ))
                )}
            </div>
        </>
    )    
}
