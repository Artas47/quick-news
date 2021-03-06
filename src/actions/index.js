import {
  FETCH_NEWS_START,
  FETCH_SEARCH_NEWS_SUCCESS,
  FETCH_NEWS_SUCCESS,
  FETCH_SEARCH_NEWS_START,
  SEARCH_CHANGE,
  LANGUAGE_CHANGE,
  SET_ACTIVE_SORT,
  ACTIVE_CATEGORY_CHANGE,
  THEME_CHANGE,
  ADD_ITEM_TO_STORE,
  DELETE_ITEM_FROM_STORE,
  SHOW_ITEMS_FROM_STORE,
  CLEAR_STORE_ITEMS,
  NEWS_SIZE_CHANGE,
  SET_ERROR
} from './types';

export const fetchNewsStart = query => {
  return {
    type: FETCH_NEWS_START,
    payload: query
  };
};

export const fetchNewsSuccess = response => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: response
  };
};

export const searchChange = searchTerm => {
  return {
    type: SEARCH_CHANGE,
    payload: searchTerm
  };
};

export const fetchSearchNewsStart = (searchTerm, sortBy, language) => {
  return {
    type: FETCH_SEARCH_NEWS_START,
    payload: {
      searchTerm,
      sortBy,
      language
    }
  };
};

export const fetchSearchNewsSuccess = response => {
  return {
    type: FETCH_SEARCH_NEWS_SUCCESS,
    payload: response
  };
};

export const changeLanguage = language => {
  return {
    type: LANGUAGE_CHANGE,
    payload: language
  };
};

export const setActiveSort = sort => {
  return {
    type: SET_ACTIVE_SORT,
    payload: sort
  };
};

export const setError = () => {
  return {
    type: SET_ERROR
  };
};

export const activeCategoryChange = category => {
  return {
    type: ACTIVE_CATEGORY_CHANGE,
    payload: category
  };
};

export const themeChange = () => {
  return {
    type: THEME_CHANGE
  };
};

export const addItemToStore = item => {
  return {
    type: ADD_ITEM_TO_STORE,
    payload: item
  };
};

export const deleteItemFromStore = item => {
  return {
    type: DELETE_ITEM_FROM_STORE,
    payload: item
  };
};

export const showItemsFromStore = items => {
  return {
    type: SHOW_ITEMS_FROM_STORE,
    payload: items
  };
};

export const clearStoreItems = () => {
  return {
    type: CLEAR_STORE_ITEMS
  };
};

export const newsSizeChange = () => {
  return {
    type: NEWS_SIZE_CHANGE
  };
};
