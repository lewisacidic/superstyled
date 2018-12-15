import styled from 'styled-components'
import { typography, userSelect } from 'superstyled'

const Text = styled.div(...typography, userSelect)

Text.defaultProps = {
  $textDecoration: 'none'
}

export default Text
