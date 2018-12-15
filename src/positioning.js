import { style } from './style'

export const position = style({
  prop: '$position',
  css: 'position'
})

export const top = style({
  prop: '$top',
  css: 'top'
})

export const right = style({
  prop: '$right',
  css: 'right'
})
export const bottom = style({
  prop: '$bottom',
  css: 'bottom'
})

export const left = style({
  prop: '$left',
  css: 'left'
})

export const zIndex = style({
  prop: '$zIndex',
  css: 'zIndex'
})

export default [position, top, right, bottom, left, zIndex]
