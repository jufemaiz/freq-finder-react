import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import {
  faBroadcastTower,
} from '@fortawesome/free-solid-svg-icons'


import './style.scss'

library.add(
  faBroadcastTower,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faTwitter,
)

const Icon = ({ name }) => (
  <FontAwesomeIcon icon={name} />
)

export default Icon
