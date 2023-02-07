import React from "react";
import {useContext} from "react";
import { UserContext } from '../../Contexts/UserContext.js';
import './Order.css';

export default function Order(props){
    const [userContext, setUserContext] = useContext(UserContext);	

    const handleConfirmOrder = (event) => {

        event.preventDefault(); 
        alert("Order CONFIRMED (placeholder message)");

        return;
    }
    const handleRejectOrder = (event) => {

        event.preventDefault(); 
        alert("Order REJECTED (placeholder message)");

        return;
    }

    return(
        <>
            <div className="container-fluid ">
                <div className="row col-sm-12 bg-info">
                    <div>
                        <div className="col-sm-5">
                            <p><b>Order No: {props.order_no}</b></p>
                            <p>Train: {props.train_no} {props.train_name}</p>
                        </div>
                        <div className="col-sm-4">
                            <p>Date: {props.delivery_date}</p>
                            <p>Coach/Seat No: {props.coach_no}/{props.seat_no}</p>
                        </div>
                        <div className="col-sm-3">
                            <p><b className={props.order_status}>Status: {props.order_status}</b></p>
                            <p>Station: {props.delivery_station}</p>
                        </div>
                    </div>
                    <div>
                        {(userContext.role === "restaurant") && (props.order_status === "Pending") &&
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-primary" onClick={handleConfirmOrder}>Confirm</button>
                                <button type="submit" className="btn btn-danger" onClick={handleRejectOrder}>Reject</button>
                            </div>
                        }
                    </div>                    
                </div>                                               
            </div>
        </>
    )    
}
