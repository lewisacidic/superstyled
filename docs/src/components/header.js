import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../images/superstyled-icon.svg'

const Header = ({ siteTitle }) => (
  <div>
    <h1>
      <Icon />
      <Link to="/">{siteTitle}</Link>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
