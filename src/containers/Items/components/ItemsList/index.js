import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

const ItemsList = ({ items }) =>
  <ul className="items-list">
    <Item />
    <Item />
    <Item />
    <Item />
  </ul>;

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemsList;
