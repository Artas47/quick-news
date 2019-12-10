import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterItem from '../filter-item/filter-item';
import * as Styled from './filters.styles';
import { fetchTopNewsStart, fetchSearchNewsStart } from '../../actions/index';

const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
];

const sortBy = ['relevancy', 'popularity', 'publishedAt'];

export const Filters = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchTerm.searchTerm);
  const activeLanguage = useSelector(state => state.language.activeLanguage);
  const [activeCategory, setActiveCategory] = useState(['general']);
  const [activeSortBy, setActiveSortBy] = useState(['popularity']);
  useEffect(() => {
    if (!searchTerm.length) {
      dispatch(
        fetchTopNewsStart(
          `?country=${activeLanguage === 'en' ? 'us' : 'pl'}&category=${
            activeCategory[0]
          }&sortBy=${activeSortBy}&`
        )
      );
    } else {
      dispatch(fetchSearchNewsStart(searchTerm, activeSortBy, activeLanguage));
    }
  }, [activeCategory, activeSortBy, dispatch, activeLanguage]);
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
