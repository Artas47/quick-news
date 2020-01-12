import React from 'react';
import FilterItem from '../filter-item/filter-item';
import * as Styled from './filters.styles';
import { categories, sortBy } from './filters-data';

export const Filters = props => {
  const { setActiveCategory, setActiveSortBy, activeSortBy, activeCategory } = props;
  return (
    <Styled.Filters>
      <Styled.Categories>
        {categories.map(item => {
          return (
            <FilterItem
              key={item}
              name={item}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              id={1}
            />
          );
        })}
      </Styled.Categories>
      <Styled.SortBy>
        {sortBy.map(item => {
          return (
            <FilterItem
              key={item}
              name={item}
              activeSortBy={activeSortBy}
              setActiveSortBy={setActiveSortBy}
              id={2}
            />
          );
        })}
      </Styled.SortBy>
    </Styled.Filters>
  );
};

export default Filters;
