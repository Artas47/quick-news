import React from 'react';
import { useDispatch } from 'react-redux';
import { themeChange } from '../../actions/index';
import './theme-toggle-button.css';

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="theme-toogle-button">
      <input
        onClick={() => dispatch(themeChange())}
        type="checkbox"
        id="toggle"
        className="checkbox"
      />
      <label htmlFor="toggle" className="switch" />
    </div>
  );
};

export default ThemeToggleButton;
