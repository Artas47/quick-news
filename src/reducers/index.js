import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import newsReducer from './newsReducer';
import searchReducer from './searchReducer';
import activeSortReducer from './activeSortReducer';
import languageReducer from './languageReducer';
import itemsStoreReducer from './itemsStoreReducer';
import settingsReducer from './settingsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language', 'itemsStore', 'settings']
};

const rootReducer = combineReducers({
  news: newsReducer,
  searchTerm: searchReducer,
  activeSort: activeSortReducer,
  language: languageReducer,
  itemsStore: itemsStoreReducer,
  settings: settingsReducer
});

export default persistReducer(persistConfig, rootReducer);
