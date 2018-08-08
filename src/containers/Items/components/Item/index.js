import React, { Component } from 'react';
import PropTypes from 'prop-types';

import get from 'lodash/get';

import Button from '../../../../components/Button';

class Item extends Component {
  shouldComponentUpdate(nextProps) {
    const { selected, item } = this.props;
    const { selected: nextSelected, item: nextItem } = nextProps;

    if (get(item, ['comments', 'length']) !== get(nextItem, ['comments', 'length'])) {
      return true;
    }

    if (selected !== nextSelected) {
      return true;
    }

    return false;
  }

  handleSelect = () => {
    const { item, handleSelect } = this.props;

    handleSelect(item.id);
  }

  handleDelete = (e) => {
    e.stopPropagation();
    const { item, handleDelete } = this.props;

    handleDelete(item.id);
  }

  render() {
    const { item, selected } = this.props;

    return (
      <li
        className={`d-flex align-items-center item ${selected ? 'item-selected' : ''}`}
        onClick={this.handleSelect}
        role="presentation"
      >
        <div className="flex-grow-1 flex-shrink-1 pr-3">
          <span className="mr-2">{item.name}</span>
          {get(item, ['comments', 'length']) &&
            <span className="badge badge-success">{item.comments.length}</span>
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
  handleDelete: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default Item;
