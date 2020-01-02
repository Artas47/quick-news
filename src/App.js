import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { fetchNewsStart, fetchSearchNewsStart } from './actions/index';
import News from './components/news-list/news-list';
import { GlobalStyles } from './global-styles';
import Header from './components/header/header';
import Filters from './components/filters/filters';
import Footer from './components/footer/footer';
import THEME from './theme/theme';

function App() {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(state => state.language.activeLanguage);
  const activeSort = useSelector(state => state.activeSort.activeSort);
  const activeCategory = useSelector(state => state.activeSort.activeCategory);
  const searchTerm = useSelector(state => state.searchTerm.searchTerm);
  const lightTheme = useSelector(state => state.theme.lightTheme);
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
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }} className="App">
      <ThemeProvider theme={lightTheme ? THEME.light : THEME.dark}>
        <GlobalStyles />
        <Header />
        <Filters />
        <News />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
