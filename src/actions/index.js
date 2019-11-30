export const fetchTopNewsStart = () => {
  return {
    type: 'FETCH_TOP_NEWS_START',
  };
};

export const fetchTopNewsSuccess = response => {
  return {
    type: 'FETCH_TOP_NEWS_SUCCESS',
    payload: response,
  };
};

export const searchChange = searchTerm => {
  return {
    type: 'SEARCH_CHANGE',
    payload: searchTerm,
  };
};

export const fetchSearchNewsStart = searchTerm => {
  return {
    type: 'FETCH_SEARCH_NEWS_START',
    payload: searchTerm,
  };
};

export const fetchSearchNewsSuccess = response => {
  return {
    type: 'FETCH_SEARCH_NEWS_SUCCESS',
    payload: response,
  };
};
