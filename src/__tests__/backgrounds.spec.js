import styled from 'styled-components'

import { renderComponent } from './test-utils'

import { background, backgroundColor } from '../backgrounds'

const theme = {
  colors: {
    background: 'lightseagreen'
  },
  backgrounds: {
    gradient: 'linear-gradient(indigo,coral)'
  }
}
describe('background', () => {
  const C = styled.div(background)

  it('should add a background to the style rules', () => {
    const component = renderComponent({
      C,
      props: { $background: 'linear-gradient(red,blue)' }
    })
    expect(component).toHaveStyleRule('background', 'linear-gradient(red,blue)')
  })
  it('should look up styles from the theme using the background key', () => {
    const component = renderComponent({
      C,
      props: { $background: 'gradient' },
      theme
    })
    expect(component).toHaveStyleRule(
      'background',
      'linear-gradient(indigo,coral)'
    )
  })
})
describe('background color', () => {
  const C = styled.div(backgroundColor)

  it('should add a background color to the style rules', () => {
    const component = renderComponent({
      C,
      props: { $backgroundColor: 'coral' }
    })
    expect(component).toHaveStyleRule('background-color', 'coral')
  })
  it('sholuld look up styles from the theme using the colors key', () => {
    const component = renderComponent({
      C,
      props: { $backgroundColor: 'background' },
      theme
    })
    expect(component).toHaveStyleRule('background-color', 'lightseagreen')
  })
})
