import React from 'react'
import './css/Blank.css';
import PropTypes from 'prop-types';
import {useContext} from "react";
import { MessageContext } from './Contexts/MessageContext.js';

export default function Blank(props) {

  var c = "alert " + props.alertType;

  return (
    <div className="blank-container">
      <div class={c} role="alert">
           {props.message}
      </div>     
    </div>
  )
}

Blank.propTypes = {
  alertType: PropTypes.string,
  message: PropTypes.string
}

Blank.defaultProps = {
  alertType: "alert-light",
  message: 'no message'
};

// Refer bootstrap Alert Type values at https://getbootstrap.com/docs/4.0/components/alerts/
// Light Blue : 'alert-primary'
// Grey: 'alert-secondary'
// Green: 'alert-success'
// Red: 'alert-danger'
// Yellow: 'alert-warning'
// Greenish Blue: 'alert-info'
// Transparent: 'alert-light'
// Dark Grey: 'alert-dark'