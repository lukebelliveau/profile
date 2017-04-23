import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import Header from '../src/Header/Header';

describe('Header', () => {
  chai.use(chaiEnzyme());

  it('should contain subheader links to each subheader in props', () => {
    const subheaders = [
      'sub1',
      'sub2',
    ];

    const header = shallow(<Header subheaders={ subheaders } />);

    const subhead1 = header.find(`[to='${subheaders[0]}']`);
    const subhead2 = header.find(`[to='${subheaders[1]}']`);

    expect(subhead1).to.exist;
    expect(subhead2).to.exist;
  });
});
