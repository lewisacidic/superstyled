import styled from 'styled-components'

import { renderComponent } from './test-utils'

import { display, opacity, transform } from '../displays'

describe('display', () => {
  const C = styled.div(display)
  it('should set display as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $display: 'inline-block' }
    })
    expect(component).toHaveStyleRule('display', 'inline-block')
  })
})

describe('opacity', () => {
  const C = styled.div(opacity)
  it('should set opacity as a style rule', () => {
    const component = renderComponent({ C, props: { $opacity: '0.5' } })
    expect(component).toHaveStyleRule('opacity', '0.5')
  })
})

describe('transform', () => {
  const C = styled.div(transform)
  it('should set transform as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $transform: 'rotate(200grad)' }
    })
    expect(component).toHaveStyleRule('transform', 'rotate(200grad)')
  })
})
