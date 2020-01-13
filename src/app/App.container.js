import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsStart, fetchSearchNewsStart } from '../actions/index';
import App from './App';

export const AppContainer = () => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(state => state.language.activeLanguage);
  const activeSort = useSelector(state => state.activeSort.activeSort);
  const activeCategory = useSelector(state => state.activeSort.activeCategory);
  const searchTerm = useSelector(state => state.searchTerm.searchTerm);
  useEffect(() => {
    if (!searchTerm.length) {
      dispatch(
        fetchNewsStart(
          `?country=${activeLanguage === 'en' ? 'us' : 'pl'}&category=${activeCategory}&`,
          activeSort
        )
      );
    } else {
      dispatch(fetchSearchNewsStart(searchTerm, activeSort, activeLanguage));
    }
  }, [dispatch, activeLanguage, activeCategory, activeSort]);
  return <App />;
};

export default AppContainer;
