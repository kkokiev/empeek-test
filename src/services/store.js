import { combineReducers } from 'redux';

import items from './items';
import helpers from './helpers';

export default combineReducers({
  items,
  helpers
});
