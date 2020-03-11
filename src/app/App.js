import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewsList from '../components/news-list/news-list';
import { GlobalStyles } from '../global-styles';
import Header from '../components/header/header';
import Filters from '../components/filters/filters';
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
        <Router>
          <Header />
          <Route
            exact
            path={['/', '/:category', '/search/:searchTerm', '/search/:searchTerm/:sortBy']}
          >
            <Filters />
            <NewsList />
          </Route>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
