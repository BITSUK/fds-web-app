import React from "react";
import Alert from "../Alert/Alert.js";
import ActiveOrders from './ActiveOrders.js';
import './Dashboard.css';


export default function DashboardCust(){

    // // Obtain alert context and define a local alert object
    // const [alertMessage, setAlert] = useContext(AlertContext);
    // const a = {
    //     alertType: alertMessage.alertType,
    //     alertMessage: alertMessage.alertMessage
    // }   

    // const [userContext, setUserContext] = useContext(UserContext);

    return(
        <>
            <Alert />
            <h2 className="no-margin">Customer Dashboard</h2>
            <hr className="horizontal-line"/>
            <ActiveOrders/>
        </>
    )    
}
