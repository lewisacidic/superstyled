import { style } from './style'
import { assign } from 'lodash'
import { dist } from './transformers'

const length = args =>
  style(assign(args, { key: 'lengths', transformer: dist }))

export const width = length({
  prop: '$width',
  css: 'width'
})

export const height = length({
  prop: '$height',
  css: 'height'
})

export const size = length({
  prop: '$size',
  css: ['width', 'height']
})

export const minWidth = length({
  prop: '$minWidth',
  css: 'minWidth'
})

export const minHeight = length({
  prop: '$minHeight',
  css: 'minHeight'
})

export const minSize = length({
  prop: '$minSize',
  css: ['minWidth', 'minHeight']
})

export const maxWidth = length({
  prop: '$maxWidth',
  css: 'maxWidth'
})

export const maxHeight = length({
  prop: '$maxHeight',
  css: 'maxHeight'
})

export const maxSize = length({
  prop: '$maxSize',
  css: ['maxWidth', 'maxHeight']
})

export default [
  width,
  height,
  size,
  minWidth,
  minHeight,
  minSize,
  maxWidth,
  maxHeight,
  maxSize
]
