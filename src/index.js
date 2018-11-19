import { isObject, isArray } from 'lodash'

const makeBreakpoint = p => `@media screen and (min-width: ${p}em)`

const defaultBreakpoints = [40, 52, 64].map(makeBreakpoint)

export const style = ({ prop, css }) => {
  function fn(value) {
    if (isArray(value)) {
      return value.reduce(
        (acc, v, i) =>
          i > 0
            ? { [defaultBreakpoints[i - 1]]: fn(v), ...acc }
            : { ...fn(v), ...acc },
        {}
      )
    } else if (isObject(value)) {
      return Object.keys(value).reduce((acc, pseudo) => {
        const el = value[pseudo]
        if (pseudo === 'default') {
          return { ...fn(el), ...acc }
        } else {
          return { ['&:' + pseudo]: fn(el), ...acc }
        }
      }, {})
    } else {
      return { [css]: value }
    }
  }
  return props => fn(props[prop])
}
