import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import { shallow } from 'enzyme';

import Hello from '../src/Hello';

describe('blah', () => {
  chai.use(chaiEnzyme());

  it('should render a greeting', () => {
    const helloWorld = shallow(<Hello />);

    expect(helloWorld).to.contain('Hello lukeWorld!');
  });
});
