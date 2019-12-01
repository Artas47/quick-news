import React, { useState, useEffect } from 'react';
import * as Styled from './filters.styles';
import FilterItem from '../filter-item/filter-item';
import { useDispatch } from 'react-redux';
import { fetchTopNewsStart } from '../../actions/index';

const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

export const Filters = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(['general']);
  useEffect(() => {
    dispatch(fetchTopNewsStart(`category=${active[0]}&`));
  }, [active, dispatch]);
  return (
    <Styled.Filters>
      {categories.map(cat => {
        return (
          <FilterItem
            key={cat}
            name={cat}
            active={active}
            setActive={setActive}
          />
        );
      })}
    </Styled.Filters>
  );
};

export default Filters;
