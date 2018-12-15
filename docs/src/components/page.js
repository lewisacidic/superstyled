import styled from 'styled-components'
import { maxWidth, margins } from 'superstyled'

const Page = styled.div(maxWidth, ...margins)

Page.defaultProps = {
  $maxWidth: '40em',
  $marginX: 'auto'
}

export default Page
