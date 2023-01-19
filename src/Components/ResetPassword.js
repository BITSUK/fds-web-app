import React from 'react'
import './css/ResetPassword.css';
import {Link} from "react-router-dom";

export default function ResetPassword() {
    
    const handleResetPassword = (event) => {
        alert("Reset password button clicked");        
    }
    
    return (
    <div>
        <div className="reset-form-container">            
            <div className="reset-form-components">
                <label htmlFor="resetFormUserid" className="form-label">User</label>
                <input type="text" className="form-control" id="regFormUserid" placeholder="userid"/>
            </div>           
            <div className="reset-form-components">
                <label htmlFor="resetFormMobile" className="form-label">Mobile</label>
                <input type="text" className="form-control" id="regFormMobile" placeholder="mobile number"/>
            </div>
            <div className="reset-form-components">
                <label htmlFor="resetFormOTP" className="form-label">OTP</label>
                <input type="text" className="form-control" id="resetFormOTP" placeholder="OTP"/>
            </div>  
            <fieldset disabled>
                <div className="reset-form-components">
                    <label htmlFor="resetFormPassword1" className="form-label">Password</label>
                    <div>
                        <input type="text" className="form-control fld-password disabled" id="resetFormPassword1" placeholder="password"/>
                        <input type="password" className="form-control fld-password disabled" id="resetFormPassword2" placeholder="repeat"/>
                    </div>
                </div>            
            </fieldset>
            <div className="reset-form-components">
                <Link to="#" class="btn btn-primary" role="button" onClick={handleResetPassword}>Submit</Link>
                &nbsp;&nbsp;
                <Link to="/" class="btn btn-danger" role="button">Cancel</Link>
            </div>

        </div>
    </div>
  )
}
