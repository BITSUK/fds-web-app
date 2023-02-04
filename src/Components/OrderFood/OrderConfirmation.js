import React, { useState, useEffect } from "react";
import {useContext} from "react";
import { Link } from "react-router-dom";
import { OrderContext } from '../../Contexts/OrderContext.js';

export default function OrderConfirmation(props) {
    const [order, setOrder] = useContext(OrderContext);
    const orderItems = order.orderItems;

    return (
        <div className="container-fluid">
            <div className="row ">
                <h3><b className="col-sm-12">Order Details</b></h3>
                <div className="col-sm-12">.</div>
                <div className="col-sm-12"><b>Order Date:</b> {order.orderDate}</div>
                <div className="col-sm-12"><b>Order Number:</b> {order.orderNumber} </div>
                <div className="col-sm-12"><b>Customer Name:</b> {order.customerName} </div>
                <div className="col-sm-12"><b>Mobile No:</b> {order.mobileNo} </div>
                <div className="col-sm-12"><b>Station:</b> {order.station} </div>
                <div className="col-sm-12"><b>Delivery Date:</b> {order.deliveryDate} </div>
                <div className="col-sm-12"><b>Train/Coach/Seat:</b> {order.seatDetails} </div>

                <div className="col-sm-12">.</div>
                <br />
                <div className="col-sm-12"><b>Ordered Items:</b></div>
                <hr/>
                <div className="col-sm-12">
                    {orderItems.length === 0 ? (
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                <p>Cart is empty</p>
                                </div>
                            </div>
                        </div>
                    ) : (orderItems.map(record => (
                        <div className="col-sm-12" style={{ padding: 0  }}>
                            <div className="col-sm-7" style={{  padding: 0 }}>                                    
                                {record.item_name}
                            </div>
                            <div className="col-sm-2" style={{ padding: 0 }}>                                    
                                {record.item_quantity} 
                            </div>
                            <div className="col-sm-2" style={{  padding: 0 }}>                                    
                                {record.item_price}
                            </div>
                            <div className="col-sm-1" style={{ padding: 0 }}>
                                <div >                            
                                    <Link to="#" style={{ padding: 0 }}>Delete</Link>
                                </div>
                            </div>
                        </div>
                        ))
                    )} 
                    .
                    <hr/>
                    <div className="col-sm-12" style={{  padding: 0 }}>
                        <div className="col-sm-9"><b> Total Amount:</b></div>
                        <div className="col-sm-3"><b> {order.totalPrice}</b></div>
                    </div>   
                    <div className="col-sm-12" style={{  padding: 0 }}>
                        <div className="col-sm-9"> Discount:</div>
                        <div className="col-sm-3"> {order.discount}</div>
                    </div>   
                    <div className="col-sm-12" style={{padding: 0 }}>
                        <div className="col-sm-9"> Taxes:</div>
                        <div className="col-sm-3"> {order.taxes}</div>
                    </div>   
                    <div className="col-sm-12" style={{  padding: 0 }}>
                        <b>
                            <div className="col-sm-9"> Net Price:</div>
                            <div className="col-sm-3"> {order.netprice}</div>
                        </b>
                    </div>  
                </div>
                .
                <hr/>
                <Link to="/order-food" className="btn btn-danger col-sm-3" role="button" >Cancel</Link>    
                <div className="col-sm-3"></div>
                <Link to="/payment" className="btn btn-primary col-sm-3" role="button" >Confirm & Pay</Link>    
            </div>
        </div>
    )
}
