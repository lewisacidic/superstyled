import { Link } from 'gatsby'
import React from 'react'

import Flex from './flex'
import Icon from './icon'
import Text from './text'

const Header = () => (
  <Flex
    as={Link}
    to="/"
    $textDecoration="none"
    $flexDirection="column"
    $justifyContent="center"
    $alignItems="center"
    $marginY="2em"
  >
    <Icon $display="block" $size="8em" />
    <Text
      $color="primary"
      $fontSize="2xl"
      $fontFamily="sans"
      $userSelect="none"
    >
      <Text as="span" $color="primary" $fontWeight="600">
        super
      </Text>
      <Text as="span" $color="secondary" $fontWeight="400">
        styled
      </Text>
    </Text>
  </Flex>
)

export default Header
