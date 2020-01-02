import {
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_SEARCH_NEWS_SUCCESS,
  FETCH_SEARCH_NEWS_START
} from '../actions/types';

const INITIAL_STATE = {
  topNews: [],
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NEWS_START:
      return { ...state, isLoading: true };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        topNews: action.payload.articles,
        isLoading: false
      };
    case FETCH_SEARCH_NEWS_START:
      return { ...state, isLoading: true };
    case FETCH_SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        topNews: action.payload.articles,
        isLoading: false
      };
    default:
      return { ...state };
  }
};
