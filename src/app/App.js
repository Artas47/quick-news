import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NewsList from '../components/news-list/news-list';
import { GlobalStyles } from '../global-styles';
import Header from '../components/header/header';
import Filters from '../components/filters/filters';
import Footer from '../components/footer/footer';
import THEME from '../theme/theme';
/*
TO DO
refactor news action to be more readable
add possibility to not lazyload images
fix background color animation when page first starts on dark mode - DONE
add modal - DONE
fix animation when page first starts - DONE
fix toggle-button to be "checked" - DONE
add settings to local storage - DONE
make settings dropdown responsible - DONE
make img-not-found darker
*/

function App() {
  const darkTheme = useSelector(state => state.settings.darkTheme.value);
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }} className="App">
      <ThemeProvider theme={darkTheme ? THEME.dark : THEME.light}>
        <GlobalStyles />
        <Router>
          <Header />
          <Route exact path="/">
            <Redirect to="/general" />
          </Route>
          <Route
            exact
            path={[
              '/',
              '/bookmarks',
              '/:category',
              '/search/:searchTerm',
              '/search/:searchTerm/:sortBy'
            ]}
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
