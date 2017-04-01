import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import { shallow } from 'enzyme';

import NameInputComponent from '../src/NameInputComponent';

describe('(Component) NameInput', () => {
  it('should render an input field with placeholder hint', () => {
    const nameInput = shallow(<NameInputComponent />);

    expect(nameInput.find('input')).to.have.prop('placeholder', 'your name');
  })
});