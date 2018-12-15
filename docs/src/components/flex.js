import styled from 'styled-components'
import { flexDirection, justifyContent, alignItems } from 'superstyled'

import Box from './box'

const Flex = styled(Box)(
  { display: 'flex' },
  flexDirection,
  justifyContent,
  alignItems
)

export default Flex
