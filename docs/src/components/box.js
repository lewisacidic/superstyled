import styled from 'styled-components'
import { boxModel, backgrounds, textDecoration } from 'superstyled'

const Box = styled.div(
  { display: 'block', boxSizing: 'border-box' },
  ...boxModel,
  ...backgrounds,
  textDecoration
)

Box.defaultProps = {
  $display: 'block'
}

export default Box
