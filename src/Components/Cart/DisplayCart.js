import React, { useState, useEffect } from "react";
import {useContext} from "react";
import { Link, useNavigate} from "react-router-dom";
import { CartContext, emptyCart} from '../../Contexts/CartContext.js';
import {UserContext} from '../../Contexts/UserContext.js';
import './DisplayCart.css';

//This component displays the Cart items to the user
export default function DisplayCart(props) {
    
    const navigate = useNavigate();
    const [userContext, setUserContext] = useContext(UserContext);
    
    const [cart, setCart] = useContext(CartContext);
    const cartItems = cart.items;  //Extract cart items in a separate variable

    // Sets the cart to empty
    const emptyTheCart = (event) => {
        setCart(emptyCart);     
    }

    // Handles item deletes from the cart
    const handleDeleteItem = (event) => {
            return; //This code is not written
    }

    //Handles checkout
    const handleCheckOut = (event) => {
        event.preventDefault();  
        if ((cartItems.length === 1) && (cartItems[0].item_name === "No item in cart")) {
            alert("Your cart is empty");
        } else {
            navigate("/order-conf-page");
        }

    }

    // ****************** RETURN ********************
    return (
        <div className="container-fluid">
            <div className="row">
                <div><b className="col-sm-8">Your Cart:</b></div>
                <Link to="#" className="col-sm-4" role="button" style={{padding: 0, fontSize: 12}} onClick={emptyTheCart}>Empty Cart</Link>
                <br/>
                <hr className="horizontal-line"/>             
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
                        <div className="col-sm-12"    style={{ padding: 0, fontSize: 11 }}>
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
                                    {record.item_name === "No item in cart" ? (
                                        <Link to="#" style={{ fontSize: 11, padding: 0 }} onClick={handleDeleteItem}></Link>
                                    ): (
                                        <Link to="#" style={{ fontSize: 11, padding: 0 }} onClick={handleDeleteItem}>Del</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        ))
                    )} 
                    <span className="white-color-text">.</span>  
                    <hr className="horizontal-line"/>
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
                <span className="white-color-text">.</span>                
                <hr className="horizontal-line"/>
                <Link to={userContext.isLoggedIn? '/order-conf-page': '/login'} className="btn btn-primary" role="button" >Checkout</Link>    
                {/* <button type="submit" className="btn btn-primary" onClick={handleCheckOut}>Checkout</button>     */}
                <div>
                    .<dr/>
                    <dr/>
                    <dr/>
                </div>
            </div>
        </div>
    )
}
