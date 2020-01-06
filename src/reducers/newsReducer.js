import {
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_SEARCH_NEWS_SUCCESS,
  FETCH_SEARCH_NEWS_START,
  SHOW_ITEMS_FROM_STORE
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
    case SHOW_ITEMS_FROM_STORE:
      return {
        topNews: action.payload
      };
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
