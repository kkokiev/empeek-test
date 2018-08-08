import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ children }) =>
  <div className="panel">
    {children}
  </div>;

Panel.propTypes = {
  children: PropTypes.node
};

export default Panel;
