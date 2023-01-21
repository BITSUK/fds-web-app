import React from 'react'
import './css/Registration.css';
import {Link} from "react-router-dom";

export default function Registration() {
    
    const handleRegistration = (event) => {
        alert("Resigter button clicked");        
    }

    const showHideRest = (event) => {
        if (document.getElementById("radioRestaurant").checked) { 
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
				<input type="checkbox" id="radioCustomer" name="role-type" value="Customer" defaultChecked/> &nbsp;
                <label htmlFor="radioCustomer">Customer</label>	&nbsp;
				<input type="checkbox" id="radioRestaurant" name="role-type" value="Restaurant" onClick={showHideRest}/> &nbsp;
                <label htmlFor="radioRestaurant">Restaurant</label>			
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
                    <input type="checkbox" id="radioVegRest" name="restaurant-type" value="Veg" defaultChecked/> &nbsp;
                    <label htmlFor="radioVegRest">Veg</label>	&nbsp;
                    <input type="checkbox" id="radioNonVegRest" name="restaurant-type" value="Non-Veg"/> &nbsp;
                    <label htmlFor="radioNonVegRest">Non-Veg</label>	&nbsp;		
                    <input type="checkbox" id="radioFastFNonVegRest" name="restaurant-type" value="FastFood"/> &nbsp;
                    <label htmlFor="radioFastFNonVegRest">Fast Food</label>			
			    </div>                

                <div className="reg-form-components"> 
                    <label>Operational Days: </label><br/>
                    <input type="checkbox" id="radioMon" name="restaurant-type" value="Mon" defaultChecked/> &nbsp;
                    <label htmlFor="radioMon">Mon</label>&nbsp;
                    <input type="checkbox" id="radioTue" name="restaurant-type" value="Tue" defaultChecked/> &nbsp;
                    <label htmlFor="radioTue">Tue</label>&nbsp;
                    <input type="checkbox" id="radioWed" name="restaurant-type" value="Wed" defaultChecked/> &nbsp;
                    <label htmlFor="radioWed">Wed</label>&nbsp;
                    <input type="checkbox" id="radioThu" name="restaurant-type" value="Thu" defaultChecked/> &nbsp;
                    <label htmlFor="radioThu">Thu</label>&nbsp;
                    <input type="checkbox" id="radioFri" name="restaurant-type" value="Fri" defaultChecked/> &nbsp;
                    <label htmlFor="radioFri">Fri</label>&nbsp;
                    <input type="checkbox" id="radioSat" name="restaurant-type" value="Sat" defaultChecked/> &nbsp;
                    <label htmlFor="radioSat">Sat</label>&nbsp;
                    <input type="checkbox" id="radioSun" name="restaurant-type" value="Sun" defaultChecked/> &nbsp;
                    <label htmlFor="radioSun">Sun</label>&nbsp;
			    </div>

                <div className="reg-form-components">
                    <label htmlFor="regFormOperationalHours" className="form-label">Operational Hours:</label>
                    <input type="text" className="form-control" id="regFormOperationalHours" placeholder="8 am to 8 pm"/>
                </div>

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
