import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import Text from './text'

const Link = ({ to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)
  const props = internal
    ? { to, ...other }
    : { href: to, target: '_blank', rel: 'noopener noreferrer', ...other }
  return <Text as={internal ? GatsbyLink : 'a'} to={to} {...props} />
}

Link.defaultProps = {
  $display: 'inline',
  $fontWeight: 'bolder',
  $color: { default: 'secondary', hover: 'primary' }
}

export default Link
