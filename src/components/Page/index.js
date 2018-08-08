import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) =>
  <div className="container-fluid page">
    <div className="row">
      {children}
    </div>
  </div>;

Page.propTypes = {
  children: PropTypes.node
};

export default Page;
