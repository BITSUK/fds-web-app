import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rest_rec from '../../Data/Restaurants.json';
import './OrderFoodMenu.css';
import {useContext} from "react";
import { useParams } from "react-router-dom";
import { CartContext, emptyCart} from '../../Contexts/CartContext.js';
import { Button } from "react-bootstrap";
import Alert from "../Alert/Alert.js";
import {UserContext} from '../../Contexts/UserContext.js';

export default function OrderFoodMenu() {
    const [userContext, setUserContext] = useContext(UserContext);

    const inpParms = useParams();
    const [query, setQuery] = useState("");
    const [vegFilter, setVegFilter] = useState("Veg");
    const [nonVegFilter, setNonVegFilter] = useState("Non-Veg");

    const [cart, setCart] = useContext(CartContext);

    const filteredRestMenu = Rest_rec.filter(e => (e.rest_id.toLowerCase().includes(inpParms["rest_id"].toLowerCase())));
    const restMenuItems = filteredRestMenu[0].menu_item;
    const filteredMenuItems1 = restMenuItems.filter(e => (e.menu_name.toLowerCase().includes(query.toLowerCase())))
    const filteredMenuItems2 = filteredMenuItems1.filter(e => (applyVegFilter(e)));

    var r = inpParms["rest_id"];
    var updatedUserContext = userContext;
    updatedUserContext.restaurant = r;
    setUserContext(updatedUserContext);

    const processCheckBox = () => {
        var inpV = document.getElementById("btnVeg").checked == true ? "Veg" : "$";
        var inpNV = document.getElementById("btnNonVeg").checked == true ? "Non-Veg" : "$";
        setVegFilter(inpV);
        setNonVegFilter(inpNV);
    }  

    function applyVegFilter(item){
        if (vegFilter === "Veg" && item.menu_type == "Veg") {
            return item;
        } else if (nonVegFilter === "Non-Veg" && item.menu_type == "Non-Veg") {
            return item;
        }
    }

    const addToCart = (item_id, name, price) => {
        var c_itms = cart.items;
        c_itms[c_itms.length] = {
            item_id : item_id,
            item_name : name,
            item_price : price,
            item_quantity : "1"
        }
        var updatedCart = cart;
        updatedCart.items = c_itms;

        setCart(updatedCart);        
        return;
    }

    //**************** RETURN ***************
    return (
        <>
            <Alert />
        
            <div className="container-fluid">
                <div className="row content">
                    <div><b>Menu Items @ {inpParms["rest_id"]}</b></div>
                    <br/>
                    <div className="col-sm-12">
                        <div >
                            <input type="text" className="form-control" id="Search" placeholder="Search Menu..." onChange={e => setQuery(e.target.value)} />
                        </div>  
                        <br/>
                            <div className="filter-box">
                                <span>Apply Filter: </span>&nbsp;&nbsp;
                                <input type="checkbox" id="btnVeg" name="menu-type" value="Veg" defaultChecked onClick={processCheckBox}/> &nbsp;
                                <label htmlFor="btnVeg">Veg</label>	&nbsp;
                                <input type="checkbox" id="btnNonVeg" name="menu-type" value="Non-Veg" defaultChecked onClick={processCheckBox}/> &nbsp;
                                <label htmlFor="btnNonVeg">Non-Veg</label>			
                                <hr />
                            </div> 
                        <br/>
                        {filteredMenuItems2.length === 0 ? (
                            <div className="row">
                            <div className="col-sm-8">
                                <br />
                                <div >
                                <p>No item found</p>
                                </div>
                            </div>
                            </div>
                        ) : (filteredMenuItems2.map(record => (
                            <div className="table-row">
                                <div className="col-sm-6">                                    
                                    {record.menu_name}
                                </div>
                                <div className="col-sm-1">                                    
                                    {record.menu_price} 
                                </div>
                                <div className="col-sm-2">                                    
                                    {record.menu_type}
                                </div>
                                <div className="col-sm-2">
                                    <div >                            
                                        {/* <Link to="#">Add</Link> */}
                                        {/* <Link to="#" onClick={() => {addToCart(record.menu_id,record.menu_name,record.menu_price )}}>Add</Link> */}
                                        <Link to="#" onClick={addToCart(record.menu_id,record.menu_name,record.menu_price )}>Add</Link>
                                    </div>
                                </div>
                            </div>
                            ))
                        )}
                    
                    </div>
                </div>
            </div>
        </>
    );
}
