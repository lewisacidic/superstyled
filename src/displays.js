import { style } from './style'

export const display = style({
  prop: '$display',
  css: 'display'
})

export const opacity = style({
  prop: '$opacity',
  css: 'opacity'
})

export const transform = style({
  prop: '$transform',
  css: 'transform'
})

export default [display, opacity, transform]
