import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

const Item = ({ item, handleDelete }) =>
  <li className="d-flex align-items-center item">
    <div className="flex-grow-1 flex-shrink-1 pr-3">
      <span className="mr-2">Lorem ipsum dolor</span>
      <span className="badge badge-success">123</span>
    </div>
    <div className="item-button-wrap">
      <Button
        className="btn-outline-danger"
        type="button"
        onClick={handleDelete}
        text="Delete"
      />
    </div>
  </li>

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;