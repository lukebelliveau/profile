import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { shallow } from 'enzyme';

import NameInputComponent from '../src/NameInputComponent';

describe('(Component) NameInput', () => {
  chai.use(chaiEnzyme());
  chai.use(sinonChai);

  it('should render an input field with placeholder hint', () => {
    const nameInput = shallow(<NameInputComponent />);

    expect(nameInput.find('input')).to.have.prop('placeholder', 'your name');
  });

  it('should call onChange function when input is changed', () => {
    const onChangeFunc = sinon.spy();
    const nameInput = shallow(<NameInputComponent onChange={ onChangeFunc }/>);

    nameInput.find('input').simulate('change');

    expect(onChangeFunc).to.have.been.called;
  });
});