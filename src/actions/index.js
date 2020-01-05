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
  ADD_ITEM_TO_STORE
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
