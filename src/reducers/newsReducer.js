import {
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_SEARCH_NEWS_SUCCESS,
  FETCH_SEARCH_NEWS_START,
  SHOW_ITEMS_FROM_STORE,
  SET_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  topNews: [],
  isLoading: false,
  hasError: false
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
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: 'error'
      };
    default:
      return { ...state };
  }
};
