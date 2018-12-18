import styled from 'styled-components'

import { renderComponent } from './test-utils'

import { cursor, userSelect } from '../interaction'

describe('cursor', () => {
  const C = styled.div(cursor)
  it('should set cursor as a style rule', () => {
    const component = renderComponent({ C, props: { $cursor: 'grab' } })
    expect(component).toHaveStyleRule('cursor', 'grab')
  })
})

describe('userSelect', () => {
  const C = styled.div(userSelect)
  it('should set user-select as a style rule', () => {
    const component = renderComponent({ C, props: { $userSelect: 'text' } })
    expect(component).toHaveStyleRule('user-select', 'text')
  })
})
