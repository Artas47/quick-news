import { TOGGLE_SETTINGS, NEWS_SIZE_CHANGE } from '../actions/types';

const INITIAL_STATE = {
  showSettings: false,
  oneSizedNews: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return { ...state, showSettings: !state.showSettings };
    case NEWS_SIZE_CHANGE:
      return { ...state, oneSizedNews: !state.oneSizedNews };
    default:
      return state;
  }
};
