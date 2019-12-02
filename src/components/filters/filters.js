import React, { useState, useEffect } from 'react';
import * as Styled from './filters.styles';
import FilterItem from '../filter-item/filter-item';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTopNewsStart,
  fetchSearchNewsStart,
} from '../../actions/index';

const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

const sortBy = ['relevancy', 'popularity', 'publishedAt'];

export const Filters = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(
    state => state.searchTerm.searchTerm,
  );
  console.log(searchTerm);
  const [activeCategory, setActiveCategory] = useState(['general']);
  const [activeSortBy, setActiveSortBy] = useState(['popularity']);
  useEffect(() => {
    if (!searchTerm.length) {
      dispatch(
        fetchTopNewsStart(
          `category=${activeCategory[0]}&sortBy=${activeSortBy}&`,
        ),
      );
    } else {
      dispatch(fetchSearchNewsStart(searchTerm, activeSortBy));
    }
  }, [activeCategory, activeSortBy, dispatch]);
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
