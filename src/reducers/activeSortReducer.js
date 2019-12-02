const INITIAL_STATE = {
  activeSort: 'popularity',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_SORT':
      return {
        ...state,
        activeSort: action.payload,
      };
    default:
      return { ...state };
  }
};
