import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import newsReducer from './newsReducer';
import searchReducer from './searchReducer';
import activeSortReducer from './activeSortReducer';
import languageReducer from './languageReducer';
import themeReducer from './themeReducer';
import itemsStoreReducer from './itemsStoreReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language', 'itemsStore', 'theme']
};

const rootReducer = combineReducers({
  news: newsReducer,
  searchTerm: searchReducer,
  activeSort: activeSortReducer,
  language: languageReducer,
  theme: themeReducer,
  itemsStore: itemsStoreReducer
});

export default persistReducer(persistConfig, rootReducer);
