import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import News from '../components/news-list/news-list';
import { GlobalStyles } from '../global-styles';
import Header from '../components/header/header';
import FilterContainer from '../components/filters/filters.container';
import Footer from '../components/footer/footer';
import THEME from '../theme/theme';
/*
TO DO
refactor fetching news action to be more readable
fix animation when page first starts - DONE
fix toggle-button to be "checked" - DONE
add possibility to not lazyload images
add settings to local storage - DONE
make settings dropdown responsible - DONE
fix background color animation when page first starts
animate settings dropdown
*/

function App() {
  const darkTheme = useSelector(state => state.settings.darkTheme.value);
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }} className="App">
      <ThemeProvider theme={darkTheme ? THEME.dark : THEME.light}>
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
