import React from 'react'
import './css/Registration.css';
import {Link} from "react-router-dom";

export default function Registration() {
    
    const handleRegistration = (event) => {
        alert("Resigter button clicked");        
    }
    
    return (
    <div>
        <div className="reg-form-container">            
            <div className="reg-form-components">
				<input type="radio" id="radioCustomer" name="role-type" value="Customer" defaultChecked/> &nbsp;
                <label htmlFor="radioCustomer">Customer</label>	&nbsp;
				<input type="radio" id="radioRestaurant" name="role-type" value="Restaurant"/> &nbsp;
                <label htmlFor="radioRestaurant">Restaurant</label>			
			</div>
            <div className="reg-form-components">
                <label htmlFor="regFormName" className="form-label">Name</label>
                <input type="text" className="form-control" id="regFormName" placeholder="Name"/>
            </div>
            <div className="reg-form-components">
                <label htmlFor="regFormAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="regFormAddress" placeholder="Address"/>
            </div>            
            <div className="reg-form-components">
                <label htmlFor="regFormUserid" className="form-label">User</label>
                <input type="text" className="form-control" id="regFormUserid" placeholder="userid/mobile/email"/>
            </div>
            <div className="reg-form-components">
                <label htmlFor="regFormPassword1" className="form-label">Password</label>
                <div>
                    <input type="text" className="form-control fld-password" id="regFormPassword1" placeholder="password"/>
                    <input type="password" className="form-control fld-password" id="regFormPassword2" placeholder="repeat"/>
                </div>
            </div>            
            <div className="reg-form-components">
                <label htmlFor="regFormMobile" className="form-label">Mobile</label>
                <input type="text" className="form-control" id="regFormMobile" placeholder="mobile number"/>
            </div>
            <div className="reg-form-components">
                <label htmlFor="regFormEmail" className="form-label">Email</label>
                <input type="text" className="form-control" id="regFormEmail" placeholder="xyz@gmail.com"/>
            </div>            
            <div className="reg-form-components">
                <Link to="#" className="btn btn-primary" role="button" onClick={handleRegistration}>Register</Link>
                &nbsp;&nbsp;
                <Link to="/login" className="btn btn-danger" role="button">Cancel</Link>
            </div>
        </div>
    </div>
  )
}
