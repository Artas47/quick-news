import { SEARCH_CHANGE } from '../actions/types';

const INITIAL_STATE = {
  searchTerm: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_CHANGE:
      return { ...state, searchTerm: action.payload };
    default:
      return { ...state };
  }
};
