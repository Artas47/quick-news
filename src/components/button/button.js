import React from 'react';
import * as Styled from './button.styles';

const Button = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

export default Button;
