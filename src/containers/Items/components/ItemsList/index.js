import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deleteItem } from '../../../../services/item';

import Item from '../Item';

class ItemsList extends Component {
  handleDelete = (id) => {
    this.props.dispatch(deleteItem({ id }));
  }

  render() {
    const { items } = this.props;

    return (
      <ul className="items-list">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              handleDelete={this.handleDelete}
            />
          );
        })
        }
      </ul>
    );
  }
}

ItemsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  items: state.item
});

export default connect(mapStateToProps)(ItemsList);
