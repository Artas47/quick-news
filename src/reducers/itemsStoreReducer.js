import { ADD_ITEM_TO_STORE } from '../actions/types';

const INITIAL_STATE = {
  store: []
};

const addItem = (store, itemA) => {
  const existingItem = store.find(item => {
    return item.title === itemA.title;
  });
  if (existingItem) {
    return [...store];
  }
  return [...store, itemA];
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_STORE:
      return {
        ...state,
        store: addItem(state.store, action.payload)
      };
    default:
      return state;
  }
};
