import styled from 'styled-components'
import { paddings, margins } from 'superstyled'

const Box = styled.div(
  { display: 'block', boxSizing: 'border-box' },
  ...paddings,
  ...margins
)

Box.defaultProps = {
  $display: 'block'
}

export default Box
