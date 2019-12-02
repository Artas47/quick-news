import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import searchReducer from './searchReducer';
import activeSort from './activeSortReducer';

export default combineReducers({
  news: newsReducer,
  searchTerm: searchReducer,
  activeSort: activeSort,
});
