import React, { useState, useEffect } from "react";
import {useContext} from "react";
import { Link, useNavigate} from "react-router-dom";
import { CartContext, emptyCart } from '../Contexts/CartContext.js';
import {UserContext} from '../Contexts/UserContext.js';
import './DisplayCart.css';

export default function DisplayCart(props) {
    const [cart, setCart] = useContext(CartContext);
    const [userContext, setUserContext] = useContext(UserContext);


    const cartItems = cart.items;
    const navigate = useNavigate();

    const c = {    
        totalPrice  : "0",
        discount    : "0",
        taxes       : "0",
        netprice    : "0",
        status      : "initial",
        items: [
            {
                item_id : "-",
                item_name : "-",
                item_price : "0",
                item_quantity : "0"
            }
        ]
    }

    const emptyCart = (event) => {
        setCart(c);     
    }

    return (
        <div className="container-fluid">
            <div className="row ">
                <div><b className="col-sm-8">Your Cart:</b></div>
                <Link to="#" className="col-sm-4" role="button" style={{ padding: 0, fontSize: 11 }} onClick={emptyCart}>Empty Cart</Link>
                <br/>
                <hr/>
                <div className="col-sm-12">
                    {cartItems.length === 0 ? (
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                <p>Cart is empty</p>
                                </div>
                            </div>
                        </div>
                    ) : (cartItems.map(record => (
                        <div className="col-sm-12" style={{ padding: 0, fontSize: 11 }}>
                            <div className="col-sm-7" style={{ fontSize: 11, padding: 0 }}>                                    
                                {record.item_name}
                            </div>
                            <div className="col-sm-2" style={{ fontSize: 11, padding: 0 }}>                                    
                                {record.item_quantity} 
                            </div>
                            <div className="col-sm-2" style={{ fontSize: 11, padding: 0 }}>                                    
                                {record.item_price}
                            </div>
                            <div className="col-sm-1" style={{ fontSize: 11, padding: 0 }}>
                                <div >                            
                                    <Link to="#" style={{ fontSize: 11, padding: 0 }}>Del</Link>
                                </div>
                            </div>
                        </div>
                        ))
                    )} 
                    .
                    <hr/>
                    <div className="col-sm-12" style={{ fontSize: 11, padding: 0 }}>
                        <div className="col-sm-9"> Total Amount:</div>
                        <div className="col-sm-3"> {cart.totalPrice}</div>
                    </div>   
                    <div className="col-sm-12" style={{ fontSize: 11, padding: 0 }}>
                        <div className="col-sm-9"> Discount:</div>
                        <div className="col-sm-3"> {cart.discount}</div>
                    </div>   
                    <div className="col-sm-12" style={{ fontSize: 11, padding: 0 }}>
                        <div className="col-sm-9"> Taxes:</div>
                        <div className="col-sm-3"> {cart.taxes}</div>
                    </div>   
                    <div className="col-sm-12" style={{ fontSize: 11, padding: 0 }}>
                        <b>
                            <div className="col-sm-9"> Net Price:</div>
                            <div className="col-sm-3"> {cart.netprice}</div>
                        </b>
                    </div>  
                </div>
                .
                <hr/>
                <Link to={userContext.isLoggedIn? '/order-conf-page': '/login'} className="btn btn-primary" role="button" >Checkout</Link>    
            </div>
        </div>
    )
}
