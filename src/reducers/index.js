import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import searchReducer from './searchReducer';
import activeSortReducer from './activeSortReducer';
import languageReducer from './languageReducer';

export default combineReducers({
  news: newsReducer,
  searchTerm: searchReducer,
  activeSort: activeSortReducer,
  language: languageReducer
});
