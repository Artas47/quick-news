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
