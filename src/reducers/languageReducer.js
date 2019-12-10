const INITIAL_STATE = {
  activeLanguage: 'en'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LANGUAGE_CHANGE':
      return { ...state, activeLanguage: action.payload };
    default:
      return { ...state };
  }
};
