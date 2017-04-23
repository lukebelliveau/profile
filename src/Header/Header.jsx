import React from 'react';
import { Link } from 'react-router-dom';

import { container, link } from './Header.css';

const Header = ({ subheaders }) => (
  <div className={ container }>
    {
      subheaders.map(subheader => (
        <Link
          key={ subheader }
          to={ subheader }
          className={ link }>
          {subheader}
        </Link>
        )
      )
    }
  </div>
);

export default Header;
