import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FilterItem from '../filter-item/filter-item';
import * as Styled from './filters.styles';
import { categories, sortBy } from './filters-data';

export const Filters = () => {
  const params = useParams();
  const searchTerm = useSelector(state => state.searchTerm.searchTerm);
  return (
    <Styled.Filters>
      <Styled.Categories>
        {categories.map(item => {
          return (
            <FilterItem key={item} clickable={params.searchTerm && searchTerm} name={item} id={1} />
          );
        })}
      </Styled.Categories>
      <Styled.SortBy>
        {sortBy.map(item => {
          return <FilterItem key={item} clickable={!params.searchTerm} name={item} id={2} />;
        })}
      </Styled.SortBy>
    </Styled.Filters>
  );
};

export default Filters;
