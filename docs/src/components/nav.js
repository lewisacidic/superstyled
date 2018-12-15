import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Box from './box'
import Flex from './flex'
import Text from './text'
import { Location } from '@reach/router'

const NavItem = ({ label, to, active }) => (
  <Box
    as={Link}
    to={to}
    $paddingX="0.6em"
    $paddingY="0.8em"
    $marginX="0.25em"
    $borderRadius="0.25em"
    $textDecoration="none"
    $backgroundColor={{
      default: active && 'greys.1',
      hover: 'greys.0',
      active: 'primary'
    }}
  >
    <Text as="li" $display="block" $color="text">
      {label}
    </Text>
  </Box>
)

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.boolean
}

const Nav = ({ items }) => (
  <Location>
    {({ location }) => (
      <Flex $margin="auto" as="ul" $paddingX="0" style={{ listStyle: 'none' }}>
        {items.map((item, i) => (
          <NavItem key={i} {...item} active={location.pathname === item.to} />
        ))}
      </Flex>
    )}
  </Location>
)

Nav.propTypes = {
  items: PropTypes.arrayOf(NavItem.propTypes)
}

Nav.defaultProps = {
  items: [],
  renderItem: NavItem
}

export default Nav
