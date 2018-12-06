import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import renderer from 'react-test-renderer'

import { color, background } from '../colors'

const theme = {
  colors: {
    primary: 'orchid',
    secondary: 'hotpink',
    text: 'rgba(0, 0, 0, 0.8)'
  }
}

const arrayTheme = {
  colors: {
    primary: ['purple', 'darkorchid', 'orchid', 'plum', 'thistle'],
    secondary: ['magenta', 'deeppink', 'hotpink', 'pink', 'lightpink']
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
    },
    secondary: {
      darkest: 'magenta',
      dark: 'deeppink',
      regular: 'hotpink',
      light: 'pink',
      lightest: 'lightpink'
    }
  }
}

describe('color', () => {
  const Component = styled.div(color)

  it('should style the component', () => {
    const component = renderer.create(<Component $color="lilac" />).toJSON()
    expect(component).toHaveStyleRule('color', 'lilac')
  })

  it('should look up colors from a theme', () => {
    const component = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Component $color="primary" />
        </ThemeProvider>
      )
      .toJSON()
    expect(component).toHaveStyleRule('color', 'orchid')
  })

  it('should look up colors in an array from a theme', () => {
    arrayTheme.colors.primary.forEach((c, i) => {
      const component = renderer
        .create(
          <ThemeProvider theme={arrayTheme}>
            <Component $color={`primary.${i}`} />
          </ThemeProvider>
        )
        .toJSON()

      expect(component).toHaveStyleRule('color', c)
    })
  })

  it('should look up nested colors from a theme', () => {
    Object.keys(keyTheme.colors.primary).forEach(shade => {
      const component = renderer
        .create(
          <ThemeProvider theme={keyTheme}>
            <Component $color={`primary.${shade}`} />
          </ThemeProvider>
        )
        .toJSON()

      expect(component).toHaveStyleRule('color', keyTheme.colors.primary[shade])
    })
  })

  it('should provide pseudoselectors if an object is provided', () => {
    const component = renderer
      .create(
        <ThemeProvider theme={keyTheme}>
          <Component
            $color={{
              default: 'orchid',
              hover: 'darkorchid',
              active: 'purple'
            }}
          />
        </ThemeProvider>
      )
      .toJSON()

    expect(component).toHaveStyleRule('color', 'orchid')
    expect(component).toHaveStyleRule('color', 'darkorchid', {
      modifier: ':hover'
    })
    expect(component).toHaveStyleRule('color', 'purple', {
      modifier: ':active'
    })
  })
})

describe('background', () => {
  const Component = styled.div(background)

  it('should return a color', () => {
    const component = renderer
      .create(<Component $background="coral" />)
      .toJSON()
    expect(component).toHaveStyleRule('background', 'coral')
  })
})
