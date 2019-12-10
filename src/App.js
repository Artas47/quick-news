import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopNewsStart, fetchSearchNewsStart } from './actions/index';
import News from './components/news-list/news-list';
import { GlobalStyles } from './global-styles';
import Header from './components/header/header';
import Filters from './components/filters/filters';

function App() {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(state => state.language.activeLanguage);
  const activeSort = useSelector(state => state.activeSort.activeSort);
  const activeCategory = useSelector(state => state.activeSort.activeCategory);
  const searchTerm = useSelector(state => state.searchTerm.searchTerm);
  useEffect(() => {
    if (!searchTerm.length) {
      dispatch(
        fetchTopNewsStart(
          `?country=${activeLanguage === 'en' ? 'us' : 'pl'}&category=${activeCategory}&`,
          activeSort
        )
      );
    } else {
      console.log('fsd');
      dispatch(fetchSearchNewsStart(searchTerm, activeSort, activeLanguage));
    }
  }, [dispatch, activeLanguage, activeCategory, activeSort]);
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Filters />
      <News />
    </div>
  );
}

export default App;
