import React from 'react';
import * as Styled from './filter-item.styles';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSort } from '../../actions/index';

export const FilterItem = props => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchTerm);
  const onClickHandler = name => {
    if (props.activeCategory) {
      props.setActiveCategory([name]);
    } else {
      props.setActiveSortBy([name]);
      dispatch(setActiveSort(name));
    }
  };
  const isActiveCategory = props.activeCategory
    ? props.activeCategory[0] === props.name
    : '';
  const isActiveSortBy = props.activeSortBy
    ? props.activeSortBy[0] === props.name
    : '';
  return (
    <Styled.FilterItem
      active={
        (isActiveCategory && !searchTerm.searchTerm.length) ||
        (isActiveSortBy && searchTerm.searchTerm.length)
      }
      clickable={
        (searchTerm.searchTerm.length && props.id === 2) ||
        (!searchTerm.searchTerm.length && props.id === 1)
          ? false
          : true
      }
      onClick={() => onClickHandler(props.name)}
    >
      {props.name}
    </Styled.FilterItem>
  );
};

export default FilterItem;
