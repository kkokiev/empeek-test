import { v4 } from 'uuid';

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = payload => ({
  type: ADD_ITEM,
  id: v4(),
  payload
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload
});

const INIT_STATE = [];

const itemsStore = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { payload, id } = action;
      return [...state, { ...payload, id }];
    }

    case DELETE_ITEM: {
      const { payload: { id } } = action;
      const filteredItems = state.filter(item => item.id !== id);
      return [ ...filteredItems ];
    }

    default: {
      return state;
    }
  }
};

export default itemsStore;
