import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './fade.css';

const Fade = ({ children, ...props }) => {
  return (
    <CSSTransition classNames="fade" timeout={1000} {...props}>
      {children}
    </CSSTransition>
  );
};

export default Fade;

Fade.propTypes = {
  children: PropTypes.element.isRequired
};
