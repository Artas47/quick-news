const INITIAL_STATE = {
  topNews: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TOP_NEWS_START':
      return { ...state, isLoading: true };
    case 'FETCH_TOP_NEWS_SUCCESS':
      return {
        ...state,
        topNews: action.payload.articles,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
