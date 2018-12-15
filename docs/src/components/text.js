import styled from 'styled-components'
import { typography, userSelect, display } from 'superstyled'

const Text = styled.div(...typography, userSelect, display)

Text.defaultProps = {
  $textDecoration: 'none'
}

export default Text
