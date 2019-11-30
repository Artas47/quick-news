import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTopNewsStart } from './actions/index';
import News from './components/news-list/news-list';
import { GlobalStyles } from './global-styles';
import Header from './components/header/header';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopNewsStart());
  }, [dispatch]);
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <News />
    </div>
  );
}

export default App;
