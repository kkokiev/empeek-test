import React from 'react';

import Page from '../../components/Page';
import PageColumn from '../../components/PageColumn';
import Items from '../../containers/Items';

const ItemsPage = () =>
  <Page>
    <PageColumn>
      <Items />
    </PageColumn>
    <PageColumn>
      comments
    </PageColumn>
  </Page>;

export default ItemsPage;
