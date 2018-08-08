import { v4 } from 'uuid';
import get from 'lodash/get';

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const ADD_COMMENT = 'ADD_COMMENT';

export const addItem = payload => ({
  type: ADD_ITEM,
  id: v4(),
  payload
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload
});

export const addComment = payload => ({
  type: ADD_COMMENT,
  payload
});

const itemsStore = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { payload, id } = action;
      return [...state, { ...payload, id }];
    }

    case DELETE_ITEM: {
      const { payload: { id } } = action;
      const filteredItems = state.filter(item => item.id !== id);
      return [...filteredItems];
    }

    case ADD_COMMENT: {
      const { payload: { comment, id } } = action;
      const index = state.findIndex(item => item.id === id);
      const newItem = { ...state[index], comments: [...get(state[index], 'comments', []), { comment }] };

      return [...state.slice(0, index), newItem, ...state.slice(index + 1, state.length)];
    }

    default: {
      return state;
    }
  }
};

export default itemsStore;
