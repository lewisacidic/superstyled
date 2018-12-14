import { endsWith } from 'lodash'

export const breakpoint = p => `@media screen and (min-width: ${p})`

export const em = p =>
  typeof p === 'string' && endsWith(p, 'em') ? p : p + 'em'

export const dist = p => (typeof p === 'number' && p <= 1 ? p * 100 + '%' : p)
