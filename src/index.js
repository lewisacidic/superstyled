import { flow, identity, isObject, isArray } from 'lodash'

const makeBreakpoint = p => `@media screen and (min-width: ${p}em)`

const defaultBreakpoints = [40, 52, 64].map(makeBreakpoint)

export const style = ({ prop, css, themeKey, transformer = identity }) => {
  if (themeKey) {
    transformer = flow([
      (value, themeValues) => themeValues[value],
      transformer
    ])
  }
  function fn(value, themeValues) {
    if (isArray(value)) {
      return value.reduce(
        (acc, v, i) =>
          i > 0
            ? { [defaultBreakpoints[i - 1]]: fn(v, themeValues), ...acc }
            : { ...fn(v, themeValues), ...acc },
        {}
      )
    } else if (isObject(value)) {
      return Object.keys(value).reduce((acc, pseudo) => {
        const el = value[pseudo]
        if (pseudo === 'default') {
          return { ...fn(el, themeValues), ...acc }
        } else {
          return { ['&:' + pseudo]: fn(el, themeValues), ...acc }
        }
      }, {})
    } else {
      return { [css]: transformer(value, themeValues) }
    }
  }
  return props => fn(props[prop], props.theme && props.theme[themeKey])
}
