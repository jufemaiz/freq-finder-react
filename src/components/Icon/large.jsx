import PropTypes from 'prop-types';
import React from 'react';

import Icon from '.';

const LargeIcon = ({ name }) => (
  <Icon icon={name} />
);

LargeIcon.propTypes = {
  name: PropTypes.string.isRequired,
};
export default LargeIcon;
