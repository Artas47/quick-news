import React from 'react';
import * as Styled from './checkbox.styles.js';

const Checkbox = props => {
  return (
    <Styled.Checkbox
      onClick={props.onClickAction}
      defaultChecked={props.isChecked}
      type="checkbox"
      id={props.id}
    />
  );
};

export default Checkbox;
