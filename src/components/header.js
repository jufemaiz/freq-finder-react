import React from 'react';
import { Link } from 'gatsby';
import Icon from './Icon';

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link
      to="/"
      className="navbar-brand"
    >
      <Icon name="broadcast-tower" />
      &nbsp;
      {siteTitle}
    </Link>
  </nav>
);

export default Header;
