import React from 'react';

const headerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  color: 'red',
};

const Header = () => (
  <div style={ headerStyle }>
    <div>Section 1</div>
    <div>Section 2</div>
    <div>Section 3</div>
    <div>Section 4</div>
    <div>Section 5</div>
  </div>
);

export default Header;
