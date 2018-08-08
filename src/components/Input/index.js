import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, type, onChange, value, placeholder }) =>
  <input
    className={className}
    type={type}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />;

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
