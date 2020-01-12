import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewsStart, fetchSearchNewsStart } from '../../actions/index';
import Filters from './filters';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchTerm.searchTerm);
  const activeLanguage = useSelector(state => state.language.activeLanguage);
  const [activeCategory, setActiveCategory] = useState(['general']);
  const [activeSortBy, setActiveSortBy] = useState(['popularity']);
  useEffect(() => {
    if (!searchTerm.length) {
      dispatch(
        fetchNewsStart(
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
    <Filters
      activeCategory={activeCategory}
      activeSortBy={activeSortBy}
      setActiveCategory={setActiveCategory}
      setActiveSortBy={setActiveSortBy}
    />
  );
};

export default FilterContainer;
