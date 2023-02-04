import React from "react";
import './ActiveOrders.css';
import {useContext} from "react";
import {UserContext} from '../../Contexts/UserContext.js';
import Active_Orders from '../../Data/ActiveOrders.json';

export default function PreviousOrders(){

    const [userContext, setUserContext] = useContext(UserContext);
    const users_active_orders = Active_Orders.filter(e => (e.user_id == userContext.uid)&& (e.order_status == "Delivered") );

    return(
        <>
            <div> 
                <span className="order-title"><b>Previous Orders:</b></span>
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
                                        <p>Status: {record.order_status}</p>
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
