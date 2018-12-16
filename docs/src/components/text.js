import styled from 'styled-components'
import { typography, userSelect, display } from 'superstyled'

const Text = styled.span(...typography, userSelect, display)

Text.defaultProps = {
  $textDecoration: 'none'
}

export default Text
