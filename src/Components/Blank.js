import React from 'react'
import './css/Blank.css';
import PropTypes from 'prop-types';

export default function Blank(props) {
  return (
    <div className="blank-container">
        {props.message}
    </div>
  )
}

Blank.propTypes = {
  message: PropTypes.string
}

Blank.defaultProps = {
  message: 'no message'
};