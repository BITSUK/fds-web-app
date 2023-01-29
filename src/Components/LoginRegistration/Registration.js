import React from 'react'
import './Registration.css';
import {Link} from "react-router-dom";

export default function Registration() {
    
    const handleRegistration = (event) => {
        if (document.getElementById("chkTerms").checked === false) {
            alert("Please accept terms and conditions");  
            return;
        } else {
            alert("Resigter button clicked");  
        }
              
    }

    const showHideRest = (event) => {
        if (document.getElementById("chkRestaurant").checked) { 
            document.getElementById("restaurant-details").style.display = "block";
        } else {
            document.getElementById("restaurant-details").style.display = "none";
        }
    }
    
    return (
    <div>
        <div className="reg-form-container">            
            
            <div className="reg-form-components">
                <label htmlFor="regFormName" className="form-label">User Name</label>
                <input type="text" className="form-control" id="regFormName" placeholder="Name"/>
            </div>
            <div className="reg-form-components">
				<input type="checkbox" id="chkCustomer" name="role-type" value="Customer" defaultChecked/> &nbsp;
                <label htmlFor="chkCustomer">Customer</label>	&nbsp;
				<input type="checkbox" id="chkRestaurant" name="role-type" value="Restaurant" onClick={showHideRest}/> &nbsp;
                <label htmlFor="chkRestaurant">Restaurant</label>			
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
                <label htmlFor="regFormUserid" className="form-label">Userid</label>
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
                <label htmlFor="regFormAddress" className="form-label">Contact Address</label>
                <input type="text" className="form-control" id="regFormAddress" placeholder="Address"/>
            </div>

            <div Id="restaurant-details" style={{display: "none"}}>
                <div className="reg-form-components">
                    <label htmlFor="regFormName" className="form-label">Restaurant Name</label>
                    <input type="text" className="form-control" id="regFormName" placeholder="Name"/>
                </div>

                <div className="reg-form-components">
                    <label htmlFor="regFormName" className="form-label">Restaurant Address</label>
                    <input type="text" className="form-control" id="regFormName" placeholder="Name"/>
                </div>

                <div className="reg-form-components">
                    <input type="checkbox" id="chkVegRest" name="restaurant-type" value="Veg" defaultChecked/> &nbsp;
                    <label htmlFor="chkVegRest">Veg</label>	&nbsp;
                    <input type="checkbox" id="chkNonVegRest" name="restaurant-type" value="Non-Veg"/> &nbsp;
                    <label htmlFor="chkNonVegRest">Non-Veg</label>	&nbsp;		
                    <input type="checkbox" id="chkFastFNonVegRest" name="restaurant-type" value="FastFood"/> &nbsp;
                    <label htmlFor="chkFastFNonVegRest">Fast Food</label>			
			    </div>                

                <div className="reg-form-components"> 
                    <label>Operational Days: </label><br/>
                    <input type="checkbox" id="chkMon" name="restaurant-type" value="Mon" defaultChecked/> &nbsp;
                    <label htmlFor="chkMon">Mon</label>&nbsp;
                    <input type="checkbox" id="chkTue" name="restaurant-type" value="Tue" defaultChecked/> &nbsp;
                    <label htmlFor="chkTue">Tue</label>&nbsp;
                    <input type="checkbox" id="chkWed" name="restaurant-type" value="Wed" defaultChecked/> &nbsp;
                    <label htmlFor="chkWed">Wed</label>&nbsp;
                    <input type="checkbox" id="chkThu" name="restaurant-type" value="Thu" defaultChecked/> &nbsp;
                    <label htmlFor="chkThu">Thu</label>&nbsp;
                    <input type="checkbox" id="chkFri" name="restaurant-type" value="Fri" defaultChecked/> &nbsp;
                    <label htmlFor="chkFri">Fri</label>&nbsp;
                    <input type="checkbox" id="chkSat" name="restaurant-type" value="Sat" defaultChecked/> &nbsp;
                    <label htmlFor="chkSat">Sat</label>&nbsp;
                    <input type="checkbox" id="chkSun" name="restaurant-type" value="Sun" defaultChecked/> &nbsp;
                    <label htmlFor="chkSun">Sun</label>&nbsp;
			    </div>

                <div className="reg-form-components">
                    <label htmlFor="regFormOperationalHours" className="form-label">Operational Hours:</label>
                    <input type="text" className="form-control" id="regFormOperationalHours" placeholder="8 am to 8 pm"/>
                </div>

            </div>

            <div className="reg-form-components"> 
                    <input type="checkbox" id="chkTerms" name="terms-and-conditions" value="TC"/> &nbsp;
                    <label htmlFor="chkTerms">I accept all terms and conditions.*</label>&nbsp;
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
