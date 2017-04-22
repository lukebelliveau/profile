import React from 'react';

const headerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'black',
  padding: '10px 10px',
};

const Header = () => (
  <div style={ headerStyle }>
    <div>resume</div>
    <div>games</div>
  </div>
);

export default Header;
