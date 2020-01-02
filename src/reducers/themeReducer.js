import { THEME_CHANGE } from '../actions/types';

const INITIAL_STATE = {
  lightTheme: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return { ...state, lightTheme: !state.lightTheme };
    default:
      return state;
  }
};
