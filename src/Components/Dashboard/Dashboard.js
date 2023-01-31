import React from "react";
import DefaultDashboard from './DefaultDashboard.js';
import CustomerDashboard from './CustomerDashboard.js';
import RestaurantDashboard from './RestaurantDashboard.js';
import { UserContext } from '../Contexts/UserContext.js';
import { useContext } from 'react';
import './Dashboard.css';


export default function Dashboard(){
    const [userContext, setUserContext] = useContext(UserContext);	

    return(
        <>
           {(userContext.role == "customer") && <CustomerDashboard />} 
           {(userContext.role == "restaurant") && <RestaurantDashboard />}
           {(userContext.role == "default") && <DefaultDashboard />}
        </>
    )    
}
