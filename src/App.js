import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTopNewsStart } from './actions/index';
import News from './components/news-list/news-list';
import { GlobalStyles } from './global-styles';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopNewsStart());
  }, [dispatch]);
  return (
    <div className="App">
      <GlobalStyles />
      <News />
    </div>
  );
}

export default App;
