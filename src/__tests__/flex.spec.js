import styled from 'styled-components'

import { renderComponent } from './test-utils'

import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  order,
  flex
} from '../flex'

describe('alignItems', () => {
  const C = styled.div(alignItems)
  it('should set align-items as a style rule', () => {
    const component = renderComponent({ C, props: { $alignItems: 'stretch' } })
    expect(component).toHaveStyleRule('align-items', 'stretch')
  })
})

describe('justifyContent', () => {
  const C = styled.div(justifyContent)
  it('should set justify-content as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $justifyContent: 'space-around' }
    })
    expect(component).toHaveStyleRule('justify-content', 'space-around')
  })
})

describe('flexWrap', () => {
  const C = styled.div(flexWrap)
  it('should set flex-wrap as a style rule', () => {
    const component = renderComponent({ C, props: { $flexWrap: 'nowrap' } })
    expect(component).toHaveStyleRule('flex-wrap', 'nowrap')
  })
})

describe('flexDirection', () => {
  const C = styled.div(flexDirection)
  it('should set flex-direction as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $flexDirection: 'column-reverse' }
    })
    expect(component).toHaveStyleRule('flex-direction', 'column-reverse')
  })
})

describe('alignContent', () => {
  const C = styled.div(alignContent)
  it('should set align-content as a style rule', () => {
    const component = renderComponent({ C, props: { $alignContent: 'center' } })
    expect(component).toHaveStyleRule('align-content', 'center')
  })
})

describe('justifyItems', () => {
  const C = styled.div(justifyItems)
  it('should set justify-items as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $justifyItems: 'stretch' }
    })
    expect(component).toHaveStyleRule('justify-items', 'stretch')
  })
})

describe('justifySelf', () => {
  const C = styled.div(justifySelf)
  it('should set justify-self as a style rule', () => {
    const component = renderComponent({ C, props: { $justifySelf: 'end' } })
    expect(component).toHaveStyleRule('justify-self', 'end')
  })
})

describe('alignSelf', () => {
  const C = styled.div(alignSelf)
  it('should set align-self as a style rule', () => {
    const component = renderComponent({ C, props: { $alignSelf: 'start' } })
    expect(component).toHaveStyleRule('align-self', 'start')
  })
})

describe('order', () => {
  const C = styled.div(order)
  it('should set order as a style rule', () => {
    const component = renderComponent({ C, props: { $order: '7' } })
    expect(component).toHaveStyleRule('order', '7')
  })
  it('should work with a number', () => {
    const component = renderComponent({ C, props: { $order: 77 } })
    expect(component).toHaveStyleRule('order', '77')
  })
})

describe('flex', () => {
  const C = styled.div(flex)
  it('should set flex as a style rule', () => {
    const component = renderComponent({ C, props: { $flex: 'stretch' } })
    expect(component).toHaveStyleRule('flex', 'stretch')
  })
})
