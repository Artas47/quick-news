import { NEWS_SIZE_CHANGE, THEME_CHANGE } from '../actions/types';

const INITIAL_STATE = {
  // oneSizedNews: false,
  // darkTheme: false
  oneSizedNews: {
    value: false,
    displayText: 'One sized news'
  },
  darkTheme: {
    value: false,
    displayText: 'Dark theme'
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_SIZE_CHANGE:
      return {
        ...state,
        oneSizedNews: {
          value: !state.oneSizedNews.value,
          displayText: state.oneSizedNews.displayText
        }
      };
    case THEME_CHANGE:
      return {
        ...state,
        darkTheme: { value: !state.darkTheme.value, displayText: state.darkTheme.displayText }
      };
    default:
      return state;
  }
};
