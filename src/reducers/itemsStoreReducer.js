import { ADD_ITEM_TO_STORE, DELETE_ITEM_FROM_STORE } from '../actions/types';

const INITIAL_STATE = {
  store: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_STORE:
      return {
        ...state,
        store: [...state.store, action.payload]
      };
    case DELETE_ITEM_FROM_STORE:
      return {
        ...state,
        store: state.store.filter(item => item.title !== action.payload.title)
      };
    default:
      return state;
  }
};
