import React from "react";
import "./NoPage.css";

export default function NoPage(props){
    return (
        <div className="nopage-container">
			<div>
            <p>
            404 Page not found
            </p>
            <button className="btn btn-primary" onClick={() => props.history.goBack()}>Go Back</button>
        </div>
		</div>
    )
}