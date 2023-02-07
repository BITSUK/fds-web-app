import React from "react";
import './Order.css';

export default function Order(props){

    return(
        <>
            <div className="container-fluid ">
                <div className="row col-sm-12 bg-info">
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
            </div>
        </>
    )    
}
