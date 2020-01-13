import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './filter-item.styles';
import { setActiveSort, activeCategoryChange } from '../../actions/index';

export const FilterItem = props => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchTerm);
  const { activeCategory, setActiveCategory, activeSortBy, setActiveSortBy, name, id } = props;

  const onClickHandler = category => {
    if (activeCategory) {
      setActiveCategory(category);
      dispatch(activeCategoryChange(category));
    }
    if (activeSortBy) {
      setActiveSortBy(category);
      dispatch(setActiveSort(category));
    }
  };
  const isActiveCategory = activeCategory ? activeCategory === name : '';
  const isActiveSortBy = activeSortBy ? activeSortBy === name : '';
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

FilterItem.defaultProps = {
  activeCategory: 'general',
  activeSortBy: 'popularity',
  setActiveCategory: () => {},
  setActiveSortBy: () => {}
};

FilterItem.propTypes = {
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.func,
  activeSortBy: PropTypes.string,
  setActiveSortBy: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
