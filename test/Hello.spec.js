import 'jsdom-global/register';
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import { shallow, mount } from 'enzyme';

import Hello from '../src/Hello';


describe('Hello', () => {
  chai.use(chaiEnzyme());

  it('should say "Hello!" when there is no name', () => {
    const helloWorld = shallow(<Hello />);

    expect(helloWorld.find({ name: 'greeting' }).text()).to.equal('Hello!');
  });

  it('should render a greeting', () => {
    const helloWorld = shallow(<Hello name="luke" />);


    expect(helloWorld.find({ name: 'greeting' })).to.have.text('Hello luke!');
  });

  describe('Entering a name', () => {
    it('should greet user with name entered', () => {
      const userName = 'luke';
      const helloWorld = mount(<Hello />);
      const nameInput = helloWorld.find('input');

      nameInput.simulate('change', { target: { value: userName } });

      expect(helloWorld.find({ name: 'greeting' })).text().to.equal('Hello luke!');
    });
  });
});
