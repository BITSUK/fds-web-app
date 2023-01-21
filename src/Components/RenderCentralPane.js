import React from "react";
import ReactDOM from 'react-dom/client';
import OrderFood from './OrderFood.js';

function Selector(props) {
    if (props.element === "OrderFood") {
        return  <OrderFood />;
    }
    return  <OrderFood />;
}
//Incomplete - idea is to build a function that can render the passed content in central pane
// Currently not used
function RenderCentralPane(element){

    const centralpane = ReactDOM.createRoot(document.getElementById('BMM'));    
    centralpane.render (<Selector element="OrderFood" />);    
    
}

export default RenderCentralPane;