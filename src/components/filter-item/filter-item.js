import React from 'react';

import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import * as Styled from './filter-item.styles';

export const FilterItem = props => {
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

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
