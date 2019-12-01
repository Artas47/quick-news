import React from 'react';
import * as Styled from './filter-item.styles';

export const FilterItem = props => {
  const onClickHandler = name => {
    props.setActive([name]);
  };
  const isActive = props.active[0] === props.name;
  return (
    <Styled.FilterItem
      active={isActive}
      onClick={() => onClickHandler(props.name)}
    >
      {props.name}
    </Styled.FilterItem>
  );
};

export default FilterItem;
