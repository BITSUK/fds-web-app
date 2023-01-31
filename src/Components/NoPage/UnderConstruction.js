import React from "react";
import "./NoPage.css";

export default function UnderConstruction(props){
    return (
        <div className="nopage-container">
			<div>
            <p>
            This page is under construction.
            </p>
            {/* <button className="btn btn-primary" onClick={() => props.history.goBack()}>Go Back</button> */}
        </div>
		</div>
    )
}