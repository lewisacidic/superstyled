import styled from 'styled-components'

import { display, size } from 'superstyled'
import SuperstyledIcon from '../images/superstyled-icon.svg'

const Icon = styled(SuperstyledIcon)(display, size)

Icon.defaultProps = {
  $display: 'inline-block',
  $size: '1em'
}

export default Icon
