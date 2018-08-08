import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deleteItem } from '../../../../services/item';
import { selectItem } from '../../../../services/helpers';

import Item from '../Item';

class ItemsList extends Component {
  handleSelect = (id) => {
    this.props.dispatch(selectItem({ id }));
  }

  handleDelete = (id) => {
    this.props.dispatch(deleteItem({ id }));
  }

  render() {
    const { items, selectedItem } = this.props;

    return (
      <ul className="items-list">
        {items.map(item =>
          <Item
            key={item.id}
            item={item}
            handleDelete={this.handleDelete}
            handleSelect={this.handleSelect}
            selected={item.id === selectedItem}
          />
          )
        }
      </ul>
    );
  }
}

ItemsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.string
};

const mapStateToProps = state => ({
  items: state.item,
  selectedItem: state.helpers.selectedItem
});

export default connect(mapStateToProps)(ItemsList);
