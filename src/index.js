import { flow, identity, isObject, isArray, get, keys, assign } from 'lodash'

const makeBreakpoint = p => `@media screen and (min-width: ${p})`

const em = p => p + 'em'

const defaultBreakpoints = [40, 52, 64].map(em)

export const style = ({ prop, css, themeKey, transformer = identity }) => {
  if (themeKey) {
    transformer = flow([
      (value, themeValues) => get(themeValues, value, value),
      transformer
    ])
  }
  function fn(value, themeValues, breakpoints = defaultBreakpoints) {
    const args = [themeValues, breakpoints]
    if (isArray(value)) {
      return value.reduce(
        (acc, v, i) =>
          i > 0
            ? assign({ [breakpoints[i - 1]]: fn(v, ...args) }, acc)
            : assign(fn(v, ...args), acc),
        {}
      )
    } else if (isObject(value)) {
      return keys(value).reduce((acc, pseudo) => {
        if (pseudo === 'default') {
          return assign(fn(value[pseudo], ...args), acc)
        } else {
          return assign({ ['&:' + pseudo]: fn(value[pseudo], ...args) }, acc)
        }
      }, {})
    } else {
      return { [css]: transformer(value, ...args) }
    }
  }
  return props =>
    fn(
      props[prop],
      get(props.theme, themeKey),
      get(props.theme, 'breakpoints', defaultBreakpoints).map(makeBreakpoint)
    )
}
