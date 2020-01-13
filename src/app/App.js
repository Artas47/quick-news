import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import News from '../components/news-list/news-list';
import { GlobalStyles } from '../global-styles';
import Header from '../components/header/header';
import FilterContainer from '../components/filters/filters.container';
import Footer from '../components/footer/footer';
import THEME from '../theme/theme';

function App() {
  const lightTheme = useSelector(state => state.theme.lightTheme);
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }} className="App">
      <ThemeProvider theme={lightTheme ? THEME.light : THEME.dark}>
        <GlobalStyles />
        <Header />
        <FilterContainer />
        <News />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
