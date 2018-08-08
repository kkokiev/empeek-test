import React from 'react';

import Page from '../../components/Page';
import PageColumn from '../../components/PageColumn';
import Items from '../../containers/Items';
import Comments from '../../containers/Comments';

const ItemsPage = () =>
  <Page>
    <PageColumn>
      <Items />
    </PageColumn>
    <PageColumn>
      <Comments />
    </PageColumn>
  </Page>;

export default ItemsPage;
