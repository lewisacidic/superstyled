import 'typeface-source-sans-pro'

const theme = {
  fonts: {
    sans: 'Source Sans Pro, sans-serif'
  },
  colors: {
    text: 'rgba(0,0,0,0.8)',
    primary: '#58c9ad',
    secondary: '#798d9b',
    greys: ['#ececec', '#f8f8f8']
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
  '*': { fontFamily: theme.fonts.sans }
}

export default theme
