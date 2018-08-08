import React from 'react';

import Sidebar from './components/Sidebar';
import ItemsPage from './pages/ItemsPage';

const App = () =>
  <div className="d-flex align-items-stretch shell">
    <div className="h-100 shell-sidebar">
      <Sidebar />
    </div>
    <main className="flex-grow-1 flex-shrink-1 h-100 shell-main">
      <ItemsPage />
    </main>
  </div>;

export default App;
