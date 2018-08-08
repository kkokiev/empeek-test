import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deleteItem } from '../../../../services/items';
import { selectItem } from '../../../../services/helpers';
import { getItems, getSelectedItem } from '../../../../helpers/selectors';

import Item from '../Item';

class ItemsList extends Component {
  handleSelect = (id) => {
    this.props.dispatch(selectItem({ id }));
  }

  handleDelete = (id) => {
    const { dispatch, selectedItem } = this.props;

    dispatch(deleteItem({ id }));
    if (id === selectedItem) {
      dispatch(selectItem({ id: null }));
    }
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
  items: getItems(state),
  selectedItem: getSelectedItem(state)
});

export default connect(mapStateToProps)(ItemsList);
