import { SET_ACTIVE_SORT, ACTIVE_CATEGORY_CHANGE } from '../actions/types';

const INITIAL_STATE = {
  activeSort: 'popularity',
  activeCategory: 'general'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_SORT:
      return {
        ...state,
        activeSort: action.payload
      };
    case ACTIVE_CATEGORY_CHANGE:
      return {
        ...state,
        activeCategory: action.payload
      };
    default:
      return { ...state };
  }
};
