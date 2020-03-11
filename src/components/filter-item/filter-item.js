import React from 'react';

import PropTypes from 'prop-types';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './filter-item.styles';

export const FilterItem = props => {
  const searchTerm = useSelector(state => state.searchTerm);
  const { name, id, clickable } = props;
  const params = useParams();
  const history = useHistory();
  return (
    <Styled.FilterItem
      // to={`${id === 1 ? `${name}` : `${params.searchTerm}/${name}`}`}
      onClick={() =>
        id === 2 ? history.push(`/search/${params.searchTerm}/${name}`) : history.push(`/${name}`)
      }
      active={params.category === name || params.sortBy === name}
      clickable={clickable}
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
