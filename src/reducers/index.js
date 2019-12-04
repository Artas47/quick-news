import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import searchReducer from './searchReducer';
import activeSortReducer from './activeSortReducer';

export default combineReducers({
  news: newsReducer,
  searchTerm: searchReducer,
  activeSort: activeSortReducer
});
