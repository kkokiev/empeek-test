import { getItems, getSelectedItem } from '../../helpers/selectors';

const state = {
  items: [],
  helpers: {
    selectedItem: null
  }
};

it('select items from state', () => {
  expect(getItems(state)).toEqual([]);
});

it('select selectedItem from helpers reducer', () => {
  expect(getSelectedItem(state)).toEqual(null);
});
