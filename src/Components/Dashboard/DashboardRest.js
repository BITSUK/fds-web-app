import React from "react";
import ActiveOrders from './ActiveOrders.js';
import Alert from "../Alert/Alert.js";
import './Dashboard.css';


export default function Dashboard(){

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
            <h2 className="no-margin">Restaurant Dashboard</h2>
            <hr className="horizontal-line"/>
            <ActiveOrders/>
        </>
    )    
}
