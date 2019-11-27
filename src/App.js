import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTopNewsStart } from './actions/index';
import News from './components/news/news';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopNewsStart());
  }, [dispatch]);
  return (
    <div className="App">
      <News />
    </div>
  );
}

export default App;
