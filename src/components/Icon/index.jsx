import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {
  faBroadcastTower,
} from '@fortawesome/free-solid-svg-icons';


import './style.scss';

library.add(
  faBroadcastTower,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faTwitter,
);

const Icon = ({ name }) => (
  <FontAwesomeIcon icon={name} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
