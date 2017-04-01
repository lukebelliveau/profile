import React, { PropTypes } from 'react';

const style = {
  width: '95%',
};

const NameInputComponent = ({ onChange }) => (
  <input style={ style } placeholder="your name" onChange={ onChange } />
);

NameInputComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default NameInputComponent;
