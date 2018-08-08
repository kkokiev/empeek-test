import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Panel from '../../components/Panel';
import ItemsForm from './components/ItemsForm';
import ItemsList from './components/ItemsList';

class Items extends Component {
  render () {
    return (
      <Panel>
        <h2>Items</h2>
        <div className="mb-3">
          <ItemsForm />
        </div>
        <ItemsList />
      </Panel>
    );
  }
}

Items.propTypes = {

}

export default Items;