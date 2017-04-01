import React, { Component, PropTypes } from 'react';

import NameInputComponent from './NameInputComponent';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name ? ` ${props.name}` : '',
    };

    this.changeName = this.changeName.bind(this);
  };

  changeName(event) {
    let name = event.target.value;
    name = event.target.value.length === 0 ? '' : ` ${name}`;
    this.setState({
      name,
    });
  };

  render() {
    return (
      <div>
        <div name="greeting" className="b">Hello{ this.state.name }!</div>
        <NameInputComponent onChange={ this.changeName } />
      </div>
    );
  };
};

Hello.defaultProps = {
  name: '',
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
