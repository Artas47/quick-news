import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  news: newsReducer,
  searchTerm: searchReducer,
});
