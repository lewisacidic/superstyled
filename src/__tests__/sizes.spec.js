import styled from 'styled-components'

import { renderComponent } from './test-utils'

import {
  width,
  height,
  size,
  minWidth,
  minHeight,
  minSize,
  maxWidth,
  maxHeight,
  maxSize
} from '../sizes'

const theme = {
  lengths: {
    small: '10em',
    medium: '20em',
    large: '30em'
  }
}

describe('width', () => {
  const C = styled.div(width)
  it('should add width to style rules', () => {
    const component = renderComponent({ C, props: { $width: '5em' } })
    expect(component).toHaveStyleRule('width', '5em')
  })
  it('should use fractional widths if used with a value less than 1', () => {
    const component = renderComponent({ C, props: { $width: 1 / 2 } })
    expect(component).toHaveStyleRule('width', '50%')
  })
  it('should look up widths from the lengths field of a theme', () => {
    const component = renderComponent({ C, props: { $width: 'medium' }, theme })
    expect(component).toHaveStyleRule('width', theme.lengths.medium)
  })
})

describe('min width', () => {
  const C = styled.div(minWidth)
  it('should add min-width to style rules', () => {
    const component = renderComponent({ C, props: { $minWidth: '5em' } })
    expect(component).toHaveStyleRule('min-width', '5em')
  })
})

describe('max width', () => {
  const C = styled.div(maxWidth)
  it('should add max-width to style rules', () => {
    const component = renderComponent({ C, props: { $maxWidth: '5em' } })
    expect(component).toHaveStyleRule('max-width', '5em')
  })
})

describe('height', () => {
  const C = styled.div(height)
  it('should add height to style rules', () => {
    const component = renderComponent({ C, props: { $height: '5em' } })
    expect(component).toHaveStyleRule('height', '5em')
  })
})

describe('min height', () => {
  const C = styled.div(minHeight)
  it('should add min-height to style rules', () => {
    const component = renderComponent({ C, props: { $minHeight: '5em' } })
    expect(component).toHaveStyleRule('min-height', '5em')
  })
})

describe('max height', () => {
  const C = styled.div(maxHeight)
  it('should add max-height to style rules', () => {
    const component = renderComponent({ C, props: { $maxHeight: '5em' } })
    expect(component).toHaveStyleRule('max-height', '5em')
  })
})

describe('size', () => {
  const C = styled.div(size)
  it('should add width and height to style rules', () => {
    const component = renderComponent({ C, props: { $size: '42em' } })
    expect(component).toHaveStyleRule('width', '42em')
    expect(component).toHaveStyleRule('height', '42em')
  })
  it('should use fractions if used with a value less than 1', () => {
    const component = renderComponent({ C, props: { $size: 1 / 2 } })
    expect(component).toHaveStyleRule('width', '50%')
    expect(component).toHaveStyleRule('height', '50%')
  })
  it('should look up widths and heights from the lengths field of a theme', () => {
    const component = renderComponent({ C, props: { $size: 'medium' }, theme })
    expect(component).toHaveStyleRule('width', '20em')
    expect(component).toHaveStyleRule('height', '20em')
  })
})

describe('min size', () => {
  const C = styled.div(minSize)
  it('should add width and height to style rules', () => {
    const component = renderComponent({ C, props: { $minSize: '42em' } })
    expect(component).toHaveStyleRule('min-width', '42em')
    expect(component).toHaveStyleRule('min-height', '42em')
  })
})

describe('max size', () => {
  const C = styled.div(maxSize)
  it('should add width and height to style rules', () => {
    const component = renderComponent({ C, props: { $maxSize: '42em' } })
    expect(component).toHaveStyleRule('max-width', '42em')
    expect(component).toHaveStyleRule('max-height', '42em')
  })
})
