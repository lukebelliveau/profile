import React, { Component, PropTypes } from 'react';

import NameInputComponent from './NameInputComponent';

const style = (name) => {
  const width = name.length === 0 ? '25%' : '50%';
  return {
    width,
  };
};

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
      <div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
        <div
          name="greeting"
          style={ style(this.state.name) }
          className="f3 f2-m f1-l fw2 black-90 mv3 center style b"
        >
          Hello{ this.state.name }!
        </div>
        <NameInputComponent className="center" onChange={ this.changeName } />
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
