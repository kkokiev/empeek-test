import React from 'react';

import Panel from '../../components/Panel';
import ItemsForm from './components/ItemsForm';
import ItemsList from './components/ItemsList';

const Items = () =>
  <Panel>
    <h2>Items</h2>
    <div className="mb-3">
      <ItemsForm />
    </div>
    <ItemsList />
  </Panel>;

export default Items;
