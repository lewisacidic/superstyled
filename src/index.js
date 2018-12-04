import {
  flow,
  identity,
  isObject,
  isArray,
  isUndefined,
  get,
  keys,
  merge,
  omit,
  forEach,
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
  function fn(value, themeValues, breakpoints, acc = {}) {
    const args = [themeValues, breakpoints]
    if (isArray(value)) {
      fn(value[0], ...args, acc)
      forEach(value.slice(1), (v, i) => {
        if (isUndefined(acc[breakpoints[i]])) acc[breakpoints[i]] = {}
        fn(v, ...args, acc[breakpoints[i]])
      })
    } else if (isObject(value)) {
      fn(value.default, ...args, acc)
      forEach(keys(omit(value, 'default')), pseudo => {
        if (isUndefined(acc['&:' + pseudo])) acc['&:' + pseudo] = {}
        fn(value[pseudo], ...args, acc['&:' + pseudo])
      })
    } else {
      acc[css] = transformer(value, ...args)
    }
    return acc
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
    (acc, style) => merge(acc, { [style.prop]: style }),
    {}
  )
  const styleFn = props => {
    const styleProps = intersection(keys(props), keys(styles))
    return styleProps.reduce((acc, prop) => merge(acc, styles[prop](props)), {})
  }
  styleFn.styles = styles
  styleFn.prop = keys(styles)
  styleFn.propTypes = merge(...styleFn.prop.map(s => styles[s].propTypes))
  return styleFn
}
