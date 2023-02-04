import React from "react";
import ActiveOrders from './ActiveOrders.js';
import './Dashboard.css';
import { AlertContext } from '../Contexts/AlertContext.js';
import Alert from "../Alert/Alert.js";
import {useContext} from "react";
import { UserContext } from '../Contexts/UserContext.js';


export default function Dashboard(){

    // Obtain alert context and define a local alert object
    const [alertMessage, setAlert] = useContext(AlertContext);
    const a = {
        alertType: alertMessage.alertType,
        alertMessage: alertMessage.alertMessage
    }   

    const [userContext, setUserContext] = useContext(UserContext);

    return(
        <>
            <Alert />
            <h1>Dashboard</h1>
            <ActiveOrders/>
            {/* <SearchInput /> */}
            {/* <FoodItemsDisplay />  */}
        </>
    )    
}
