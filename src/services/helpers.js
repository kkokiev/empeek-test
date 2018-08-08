const SELECT_ITEM = 'SELECT_ITEM';


export const selectItem = payload => ({
  type: SELECT_ITEM,
  payload
});

const INIT_STATE = {
  selectedItem: null
};

const helpersStore = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SELECT_ITEM: {
      const { payload: { id } } = action;
      return { ...state, selectedItem: id };
    }

    default: {
      return state;
    }
  }
};

export default helpersStore;
