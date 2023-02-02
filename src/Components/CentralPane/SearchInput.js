import React from "react";
import './SearchInput.css';
import { AlertContext } from '../Contexts/AlertContext.js';
import Alert from "../Alert/Alert.js";
import {useContext} from "react";

function SearchInput(){

	// Obtain alert context and define a local alert object
    const [alertMessage, setAlert] = useContext(AlertContext);
    const a = {
        alertType: alertMessage.alertType,
        alertMessage: alertMessage.alertMessage
    }

	const handleSearch = (event) => {

		event.preventDefault();   

		var inputText = document.getElementById("searchBox").value;

		if (inputText == "") {
			//set default message
			a.alertMessage = "Please check search criteria and try again.";
			a.alertType = "error";
			setAlert(a);

		} else {
			//set default message
			a.alertMessage = "";
			a.alertType = "default";
			setAlert(a);
		}

	}

    return (
        <>
			<div id="order-bar">
				<br/>
				<span id="OrderNowText"><b>Order Now:&nbsp;&nbsp;&nbsp;</b></span>
				<input type="radio" id="radioTrain" name="search-options" value="Train"/>&nbsp;
				<label htmlFor="radioTrain">Train No</label>&nbsp;&nbsp;&nbsp;
				<input type="radio" id="radioStation" name="search-options" value="Station"/>&nbsp;
				<label htmlFor="radioStation">Station</label>
			</div>
			<div id="search-container">
				<form action="#">
					<input type="text" placeholder="Search.." name="search" id="searchBox" />
					<button type="submit" id="srchBtn" onClick={handleSearch}>Search</button>
				</form>
			</div>
		</>
    )
}

export default SearchInput;
