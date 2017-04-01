import React, { PropTypes } from 'react';

const NameInputComponent = ({ onChange }) => (
  <input placeholder="your name" onChange={ onChange } />
);

NameInputComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default NameInputComponent;
