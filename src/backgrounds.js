import { style } from './style'

export const background = style({
  prop: '$background',
  css: 'background',
  key: 'backgrounds'
})

export const backgroundColor = style({
  prop: '$backgroundColor',
  css: 'backgroundColor',
  key: 'colors'
})

export default [background, backgroundColor]
