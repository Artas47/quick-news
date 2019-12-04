export const fetchTopNewsStart = query => {
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

export const fetchSearchNewsStart = (searchTerm, sortBy) => {
  return {
    type: 'FETCH_SEARCH_NEWS_START',
    payload: {
      searchTerm,
      sortBy
    }
  };
};

export const fetchSearchNewsSuccess = response => {
  return {
    type: 'FETCH_SEARCH_NEWS_SUCCESS',
    payload: response
  };
};

export const setActiveSort = sort => {
  return {
    type: 'SET_ACTIVE_SORT',
    payload: sort
  };
};
