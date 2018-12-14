import styled from 'styled-components'

import { renderComponent } from './utils'

import { position, top, right, bottom, left, zIndex } from '../positioning'

describe('position', () => {
  const C = styled.div(position)
  it('should set position as a style rule', () => {
    const component = renderComponent({ C, props: { $position: 'absolute' } })
    expect(component).toHaveStyleRule('position', 'absolute')
  })
})

describe('top', () => {
  const C = styled.div(top)
  it('should set top as a style rule', () => {
    const component = renderComponent({ C, props: { $top: '4em' } })
    expect(component).toHaveStyleRule('top', '4em')
  })
})

describe('right', () => {
  const C = styled.div(right)
  it('should set right as a style rule', () => {
    const component = renderComponent({ C, props: { $right: '3em' } })
    expect(component).toHaveStyleRule('right', '3em')
  })
})

describe('bottom', () => {
  const C = styled.div(bottom)
  it('should set bottom as a style rule', () => {
    const component = renderComponent({ C, props: { $bottom: '2em' } })
    expect(component).toHaveStyleRule('bottom', '2em')
  })
})

describe('left', () => {
  const C = styled.div(left)
  it('should set left as a style rule', () => {
    const component = renderComponent({ C, props: { $left: '1em' } })
    expect(component).toHaveStyleRule('left', '1em')
  })
})

describe('zIndex', () => {
  const C = styled.div(zIndex)
  it('should set zIndex as a style rule', () => {
    const component = renderComponent({ C, props: { $zIndex: '99' } })
    expect(component).toHaveStyleRule('z-index', '99')
  })
})
