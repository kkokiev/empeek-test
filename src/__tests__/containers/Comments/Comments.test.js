import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Comments from '../../../containers/Comments';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
let wrapper;
let store;

describe('Comments component', () => {
  test('return null', () => {
    const initialState = {
      helpers: {
        selectedItem: null
      }
    };
    store = mockStore(initialState);

    wrapper = Enzyme.shallow(
      <Comments store={store} />
    ).dive();

    expect(wrapper.html()).toEqual(null);
  });

  test('render component', () => {
    const initialState = {
      items: [],
      helpers: {
        selectedItem: '123'
      }
    };
    store = mockStore(initialState);

    wrapper = Enzyme.shallow(
      <Comments store={store} />
    ).dive();

    expect(wrapper.find('Panel')).toHaveLength(1);
    expect(wrapper.dive().find('Connect(CommentsList)')).toHaveLength(1);
    expect(wrapper.dive().find('Connect(CommentForm)')).toHaveLength(1);
  });
});