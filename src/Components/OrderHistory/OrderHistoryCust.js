import React from "react";
import {useContext} from "react";
import {UserContext} from '../../Contexts/UserContext.js';
import Active_Orders from '../../Data/Orders.json';
import { AlertContext } from '../../Contexts/AlertContext.js';
import Alert from "../Alert/Alert.js";
import './OrderHistory.css';

export default function OrderHistoryCust(){

    const [userContext, setUserContext] = useContext(UserContext);
    const [alertMessage, setAlert] = useContext(AlertContext);

    const users_active_orders = Active_Orders.filter(e => (e.user_id == userContext.uid) &&
    ((e.order_status === "Pending") || (e.order_status === "Confirmed")));

    return(
        <>
            <Alert/>
            <h2>Previous Orders: </h2>
            <div> 
                <span className="order-title"><b>Active Orders:</b></span>
                {users_active_orders.length === 0 ? (
                    <div>
                        <p className="order">No active orders.</p>
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
                                        <p >Status: <b className={record.order_status}>{record.order_status}</b></p>
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
