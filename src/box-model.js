import { style } from './style'
import { assign } from 'lodash'
import { em } from './transformers'

const spacing = args =>
  style(assign(args, { transformer: em, key: 'spacings' }))

export const padding = spacing({
  prop: '$padding',
  css: 'padding'
})

export const paddingTop = spacing({
  prop: '$paddingTop',
  css: 'paddingTop'
})

export const paddingRight = spacing({
  prop: '$paddingRight',
  css: 'paddingRight'
})

export const paddingBottom = spacing({
  prop: '$paddingBottom',
  css: 'paddingBottom'
})

export const paddingLeft = spacing({
  prop: '$paddingLeft',
  css: 'paddingLeft'
})

export const paddingX = spacing({
  prop: '$paddingX',
  css: ['paddingLeft', 'paddingRight']
})

export const paddingY = spacing({
  prop: '$paddingY',
  css: ['paddingTop', 'paddingBottom']
})

export const margin = spacing({
  prop: '$margin',
  css: 'margin'
})

export const marginTop = spacing({
  prop: '$marginTop',
  css: 'marginTop'
})

export const marginRight = spacing({
  prop: '$marginRight',
  css: 'marginRight'
})

export const marginBottom = spacing({
  prop: '$marginBottom',
  css: 'marginBottom'
})

export const marginLeft = spacing({
  prop: '$marginLeft',
  css: 'marginLeft'
})

export const marginX = spacing({
  prop: '$marginX',
  css: ['marginRight', 'marginLeft']
})

export const marginY = spacing({
  prop: '$marginY',
  css: ['marginTop', 'marginBottom']
})

export const border = style({
  prop: '$border',
  css: 'border',
  key: 'borders'
})
export const borderRadius = style({
  prop: '$borderRadius',
  css: 'borderRadius',
  key: 'radii'
})

export const borderColor = style({
  prop: '$borderColor',
  css: 'borderColor',
  key: 'colors'
})

export const borderTop = style({
  prop: '$borderTop',
  css: 'borderTop',
  key: 'borders'
})

export const borderRight = style({
  prop: '$borderRight',
  css: 'borderRight',
  key: 'borders'
})

export const borderBottom = style({
  prop: '$borderBottom',
  css: 'borderBottom',
  key: 'borders'
})

export const borderLeft = style({
  prop: '$borderLeft',
  css: 'borderLeft',
  key: 'borders'
})

export const boxShadow = style({
  prop: '$boxShadow',
  css: 'boxShadow',
  key: 'shadows'
})

export const outline = style({
  prop: '$outline',
  css: 'outline',
  key: 'borders'
})

export const paddings = [
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY
]

export const margins = [
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY
]

export const borders = [
  border,
  borderRadius,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft
]

export default [
  paddings,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margins,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  borders,
  border,
  borderRadius,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  boxShadow,
  outline
]
