import 'typeface-source-sans-pro'
import styledNormalize from 'styled-normalize'

const theme = {
  fonts: {
    sans: 'Source Sans Pro, sans-serif'
  },
  colors: {
    primary: '#58c9ad',
    secondary: '#798d9b'
  },
  fontSizes: {
    '3xs': '0.33em',
    '2xs': '0.5em',
    xs: '0.67rem',
    s: '0.83rem',
    m: '1rem',
    l: '1.17rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem'
  }
}

export const globals = {
  ...styledNormalize,
  '*': { fontFamily: theme.fonts.sans }
}

export default theme
