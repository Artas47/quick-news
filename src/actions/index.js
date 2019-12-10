export const fetchTopNewsStart = (query, activeCategory) => {
  return {
    type: 'FETCH_TOP_NEWS_START',
    payload: query
  };
};

export const fetchTopNewsSuccess = response => {
  return {
    type: 'FETCH_TOP_NEWS_SUCCESS',
    payload: response
  };
};

export const searchChange = searchTerm => {
  return {
    type: 'SEARCH_CHANGE',
    payload: searchTerm
  };
};

export const fetchSearchNewsStart = (searchTerm, sortBy, language) => {
  return {
    type: 'FETCH_SEARCH_NEWS_START',
    payload: {
      searchTerm,
      sortBy,
      language
    }
  };
};

export const fetchSearchNewsSuccess = response => {
  return {
    type: 'FETCH_SEARCH_NEWS_SUCCESS',
    payload: response
  };
};

export const changeLanguage = language => {
  return {
    type: 'LANGUAGE_CHANGE',
    payload: language
  };
};

export const setActiveSort = sort => {
  return {
    type: 'SET_ACTIVE_SORT',
    payload: sort
  };
};

export const activeCategoryChange = category => {
  return {
    type: 'ACTIVE_CATEGORY_CHANGE',
    payload: category
  };
};
