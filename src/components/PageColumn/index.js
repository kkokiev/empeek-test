import React from 'react';
import PropTypes from 'prop-types';

const PageColumn = ({ children }) =>
  <div className="col-sm">
    {children}
  </div>;

PageColumn.propTypes = {
  children: PropTypes.node
};

export default PageColumn;
