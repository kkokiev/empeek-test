import React, { Component } from 'react';
import PropTypes from 'prop-types';

import get from 'lodash/get';

import Button from '../../../../components/Button';

class Item extends Component {
  handleDelete = () => {
    const { item, handleDelete } = this.props;

    handleDelete(item.id);
  }

  render() {
    const { item } = this.props;

    return (
      <li className="d-flex align-items-center item">
        <div className="flex-grow-1 flex-shrink-1 pr-3">
          <span className="mr-2">{item.name}</span>
          {get(item, ['comments', 'length']) &&
            <span className="badge badge-success">{item.coments.length}</span>
          }
        </div>
        <div className="item-button-wrap">
          <Button
            className="btn-outline-danger"
            type="button"
            onClick={this.handleDelete}
            text="Delete"
          />
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Item;
