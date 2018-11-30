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

// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon" />
// </button>
// <div className="collapse navbar-collapse" id="navbarNav">
//   <ul className="navbar-nav">
//     <li className="nav-item active">
//       <Link to="/search" className="nav-link">Search</Link>
//     </li>
//     <li className="nav-item active">
//       <Link to="/stations" className="nav-link">Stations</Link>
//     </li>
//     <li className="nav-item active">
//       <Link to="/transmitters" className="nav-link">Transmitters</Link>
//     </li>
//   </ul>
// </div>

export default Header;
