import React from 'react';
import './toggle-button.css';

const ToggleButton = props => {
  return (
    <div className="toogle-button">
      <input onClick={props.onClickAction} type="checkbox" id={props.id} className="checkbox" />
      <label htmlFor={props.id} className="switch" />
    </div>
  );
};

export default ToggleButton;
