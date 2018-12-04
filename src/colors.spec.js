import { color } from './colors'
import { range } from 'lodash'

const theme = {
  colors: {
    primary: 'purple',
    secondary: 'hotpink',
    text: 'rgba(0, 0, 0, 0.8)'
  }
}

const arrayTheme = {
  colors: {
    primary: ['thistle', 'plum', 'orchid', 'darkorchid', 'purple']
  }
}

const keyTheme = {
  colors: {
    primary: {
      darkest: 'purple',
      dark: 'darkorchid',
      regular: 'orchid',
      light: 'plum',
      lightest: 'thistle'
    }
  }
}

describe('color', () => {
  it('should return a color in a style object', () => {
    expect(color({ $color: 'test' })).toEqual({ color: 'test' })
  })

  it('should look up colors from a theme', () => {
    Object.keys(theme.colors).forEach(c =>
      expect(color({ $color: c, theme })).toEqual({
        color: theme.colors[c]
      })
    )
  })

  it('should look up colors in an array from a theme', () => {
    range(0, arrayTheme.colors.primary.length).forEach(i => {
      expect(
        color({
          $color: `primary.${i}`,
          theme: arrayTheme
        })
      ).toEqual({ color: arrayTheme.colors.primary[i] })
    })
  })

  it('should look up nested colors from a theme', () => {
    Object.keys(keyTheme.colors.primary).forEach(shade =>
      expect(
        color({
          $color: `primary.${shade}`,
          theme: keyTheme
        })
      ).toEqual({ color: keyTheme.colors.primary[shade] })
    )
  })

  it('should provide pseudoselectors if an object is provided', () => {
    const result = color({
      $color: {
        default: 'primary.regular',
        hover: 'primary.dark',
        active: 'primary.darkest'
      },
      theme: keyTheme
    })
    expect(result).toEqual({
      color: 'orchid',
      '&:hover': { color: 'darkorchid' },
      '&:active': { color: 'purple' }
    })
    // make sure order is correct too
    expect(Object.keys(result)).toEqual(['color', '&:hover', '&:active'])
  })
})
