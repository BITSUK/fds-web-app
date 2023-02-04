import React from "react";
import { useContext } from 'react';
import { AlertContext } from '../../Contexts/AlertContext.js';
import './Alert.css';

//This is a common component that used across the screens, usually at the top
//It displays Alert message reading it from the global context
//Different components set this Alert passing a message and alert type
//Component support - default, warning, error and success as four alert types.
export default function Alert(){

	const [alert, setAlert] = useContext(AlertContext);	
	const screenAlert = {
  		alertType: alert.alertType,
  		alertMessage: alert.alertMessage
	}
	var css = "a-" + screenAlert.alertType;
	
	// ****************** RETURN ********************
    return (
        <>
			<div id="default" className={css}>
				{screenAlert.alertMessage}
			</div>			
		</>
    )
}

