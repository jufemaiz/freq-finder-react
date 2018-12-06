import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import Icon from '../Icon';

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

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
