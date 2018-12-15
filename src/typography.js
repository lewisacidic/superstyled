import { style } from './style'

export const color = style({
  prop: '$color',
  css: 'color',
  key: 'colors'
})

export const fontFamily = style({
  prop: '$fontFamily',
  css: 'fontFamily',
  key: 'fonts'
})

export const fontSize = style({
  prop: '$fontSize',
  css: 'fontSize',
  key: 'fontSizes'
})

export const fontWeight = style({
  prop: '$fontWeight',
  css: 'fontWeight',
  key: 'fontWeights'
})

export const fontStyle = style({
  prop: '$fontStyle',
  css: 'fontStyle'
})

export const fontVariant = style({
  prop: '$fontVariant',
  css: 'fontVariant'
})

export const textTransform = style({
  prop: '$textTransform',
  css: 'textTransform'
})

export const textDecoration = style({
  prop: '$textDecoration',
  css: 'textDecoration'
})

export const lineHeight = style({
  prop: '$lineHeight',
  css: 'lineHeight'
})

export const letterSpacing = style({
  prop: '$letterSpacing',
  css: 'letterSpacing'
})

export default [
  color,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  fontVariant,
  textTransform,
  textDecoration,
  lineHeight,
  letterSpacing
]
