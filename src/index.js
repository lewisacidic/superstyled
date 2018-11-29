import {
  flow,
  identity,
  isObject,
  isArray,
  get,
  keys,
  assign,
  merge,
  intersection
} from 'lodash'

import PropTypes from 'prop-types'

import { em, breakpoint } from './transformers'

const defaultBreakpoints = [40, 52, 64].map(em)

const responsiveType = PropTypes.arrayOf(PropTypes.string)
const pseudoselectorType = PropTypes.objectOf(PropTypes.string)
export const styleValueType = PropTypes.oneOfType([
  PropTypes.string,
  responsiveType,
  pseudoselectorType,
  // nested responsive e.g. { default: [0, 1], hover: [2, 3] }
  PropTypes.objectOf(responsiveType),
  // nested pseudo e.g. [{default: 0, hover: 1}, {default: 2, hover: 3}]
  PropTypes.arrayOf(pseudoselectorType) // nest
])

export const style = ({ prop, css, themeKey, transformer = identity }) => {
  if (themeKey) {
    transformer = flow([
      (value, themeValues) => get(themeValues, value, value),
      transformer
    ])
  }
  function fn(value, themeValues, breakpoints) {
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
  const styleFn = props =>
    fn(
      props[prop],
      get(props.theme, themeKey),
      get(props.theme, 'breakpoints', defaultBreakpoints).map(breakpoint)
    )
  styleFn.prop = prop
  styleFn.css = css
  styleFn.themeKey = themeKey
  styleFn.transformer = transformer
  styleFn.propTypes = {
    [prop]: styleValueType
  }
  return styleFn
}

export const compoundStyle = (...styles) => {
  styles = styles.reduce(
    (acc, style) => assign(acc, { [style.prop]: style }),
    {}
  )
  const styleFn = props => {
    const styleProps = intersection(keys(props), keys(styles))
    return styleProps.reduce((acc, prop) => merge(acc, styles[prop](props)), {})
  }
  styleFn.styles = styles
  styleFn.prop = keys(styles)
  styleFn.propTypes = assign(...styleFn.prop.map(s => styles[s].propTypes))
  return styleFn
}
