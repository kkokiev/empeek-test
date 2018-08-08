const ADD_ITEM = 'ADD_ITEM';

export const addItem = payload => ({
  type: ADD_ITEM,
  payload
});

const INIT_STATE = [];

const itemsStore = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export default itemsStore;
