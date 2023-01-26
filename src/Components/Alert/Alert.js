import React from "react";
import { useContext } from 'react';
import { AlertContext } from '../Contexts/AlertContext.js';
import './Alert.css';

export default function Alert(){

	const [alert, setAlert] = useContext(AlertContext);	
	const screenAlert = {
  		alertType: alert.alertType,
  		alertMessage: alert.alertMessage
	}
	var c1 = "a-" + screenAlert.alertType;
	
    return (
        <>
			<div id="default" className={c1}>
				{screenAlert.alertMessage}
			</div>

			{/* {(alert.alertType == "success") && (screenAlert.alertMessage > "") && (				
				<div class="alert alert-success" role="alert">
					{screenAlert.alertMessage}
			  	</div>
			)}
			{(alert.alertType == "error") && (screenAlert.alertMessage > "") && (
				<div class="alert alert-warning" role="alert">
					{screenAlert.alertMessage}
			  	</div>
			)} */}
		</>
    )
}

