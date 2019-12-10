import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './filter-item.styles';
import { setActiveSort, activeCategoryChange } from '../../actions/index';

export const FilterItem = props => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchTerm);
  const { activeCategory, setActiveCategory, activeSortBy, setActiveSortBy, name, id } = props;
  const onClickHandler = name => {
    if (activeCategory) {
      setActiveCategory([name]);
      dispatch(activeCategoryChange(name));
    } else {
      dispatch(activeCategoryChange(name));
      setActiveSortBy([name]);
      dispatch(setActiveSort(name));
    }
  };
  const isActiveCategory = activeCategory ? activeCategory[0] === name : '';
  const isActiveSortBy = activeSortBy ? activeSortBy[0] === name : '';
  return (
    <Styled.FilterItem
      active={
        (isActiveCategory && !searchTerm.searchTerm.length) ||
        (isActiveSortBy && searchTerm.searchTerm.length)
      }
      clickable={
        (searchTerm.searchTerm.length && id === 2) || (!searchTerm.searchTerm.length && id === 1)
          ? false
          : true
      }
      onClick={() => onClickHandler(name)}
    >
      {name}
    </Styled.FilterItem>
  );
};

export default FilterItem;
