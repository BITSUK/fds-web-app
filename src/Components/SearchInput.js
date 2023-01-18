import React from "react";
import './css/SearchInput.css';

function SearchInput(){
    return (
        <>
			<div id="order-bar">
				Order Now &nbsp;&nbsp;
				<input type="radio" id="radioPNR" name="search-options" value="PNR" defaultChecked/>
				&nbsp;
				<label htmlFor="radioPNR">PNR</label>
				&nbsp;&nbsp;&nbsp;
				<input type="radio" id="radioTrain" name="search-options" value="Train"/>
				&nbsp;
				<label htmlFor="radioTrain">Train</label>
				&nbsp;&nbsp;&nbsp;
				<input type="radio" id="radioStation" name="search-options" value="Station"/>
				&nbsp;
				<label htmlFor="radioStation">Station</label>
			</div>
			<div id="search-container">
				<form action="#">
					<input type="text" placeholder="Search.." name="search" id="searchBox" />
					<button type="submit" id="srchBtn">Search</button>
				</form>
			</div>
		</>
    )
}

export default SearchInput;
