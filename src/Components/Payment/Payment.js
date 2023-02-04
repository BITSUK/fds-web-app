import React from 'react'
import './Payment.css';
import {Link} from "react-router-dom";
import { AlertContext } from '../Contexts/AlertContext.js';
import {useContext} from "react";
import Alert from "../Alert/Alert.js";
import {OrderContext} from '../Contexts/OrderContext.js';

export default function Payment() {

    // Obtain alert context and define a local alert object
    const [alertMessage, setAlert] = useContext(AlertContext);
    const a = {
        alertType: alertMessage.alertType,
        alertMessage: alertMessage.alertMessage
    } 
    
    const [order, setOrder] = useContext(OrderContext);	

    const processPayment = (event) => {
        event.preventDefault();  

        //Validate input
        //Call Payment Gateway
        //Display success or failure message

        if ((document.getElementById("cardNo").value == "") ||
            (document.getElementById("name").value == "")   ||
            (document.getElementById("expiry").value == "") ||
            (document.getElementById("ccv").value == "")) {
            
            a.alertMessage = "Details missing, please check.";
            a.alertType = "error";
            setAlert(a);
        } else {
            a.alertMessage = "Order Placess Successfully.";
            a.alertType = "success";
            setAlert(a);
    
            document.getElementById("btnCancel").disabled = true;
            document.getElementById("btnSubmit").disabled = true;
        }


    }

    const processCancel = (event) => {

        a.alertMessage = "";
        a.alertType = "default";
        setAlert(a);

    }
    
    return (
        
    <div>
        <Alert />
        <div className="reset-form-container">            
            <div>
                <b>Payment Amount: </b> {order.netprice}
            </div>
            <hr />                 
            <div>
				<input type="radio" id="radioWallet" name="payment-mode" value="Wallet" disabled/> &nbsp;
                <label htmlFor="radioWallet">Wallet (Paytm)</label>	&nbsp;
				<input type="radio" id="radioNetBanking" name="payment-mode" value="Net Banking" disabled/> &nbsp;
                <label htmlFor="radioNetBanking">Net Banking</label>		&nbsp;	
                <input type="radio" id="radioCard" name="payment-mode" value="Card" checked/> &nbsp;
                <label htmlFor="radioCard">Card</label>			
			</div>
            <div>
                <label className="form-label">Card No</label>
                <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" id="cardNo"/>
            </div>
            <div>
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Name" id="name"/>
            </div>
            <div>
                <label className="form-label">Expiry Date</label>
                <input type="text" className="form-control" placeholder="MM/YY" id="expiry"/>
            </div>
            <div>
                <label className="form-label">CCV Code</label>
                <input type="password" className="form-control" placeholder="---" id="ccv"/>
            </div>
            <hr />
            <div>
                <Link to="/home" className="btn btn-danger" role="button" id="btnCancel" onClick={processCancel}>Cancel</Link>  &nbsp;&nbsp;
                <Link to="#" className="btn btn-primary" role="button" id="btnSubmit"  onClick={processPayment}>Submit</Link>
            </div>

        </div>
    </div>
  )
}
