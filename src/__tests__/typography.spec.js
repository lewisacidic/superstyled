import styled from 'styled-components'
import { renderComponent } from './utils'

import {
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontVariant,
  fontWeight,
  textTransform,
  lineHeight,
  letterSpacing,
  textDecoration
} from '../typography'

const theme = {
  fonts: {
    default: 'Lato,sans-serif',
    header: 'Oxygen,sans-serif',
    serif: 'Noto Serif SC,serif',
    code: 'Fira Sans,monospace'
  },
  fontSizes: {
    xxs: '0.5em',
    xs: '0.67rem',
    s: '0.83rem',
    m: '1rem',
    l: '1.17rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '4rem'
  },
  fontWeights: {
    hairline: 100,
    ultralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    demibold: 600,
    bold: 700,
    ultrabold: 800,
    heavy: 900
  }
}

const valueTheme = {
  ...theme,
  colors: {
    primary: 'orchid',
    secondary: 'hotpink',
    text: 'rgba(0, 0, 0, 0.8)'
  }
}

const arrayTheme = {
  ...theme,
  colors: {
    primary: ['purple', 'darkorchid', 'orchid', 'plum', 'thistle'],
    secondary: ['magenta', 'deeppink', 'hotpink', 'pink', 'lightpink']
  }
}

const keyTheme = {
  ...theme,
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
  const C = styled.div(color)

  it('should style the component', () => {
    const component = renderComponent({ C, props: { $color: 'lilac' } })
    expect(component).toHaveStyleRule('color', 'lilac')
  })

  it('should look up colors from a theme', () => {
    const component = renderComponent({
      C,
      props: { $color: 'primary' },
      theme: valueTheme
    })
    expect(component).toHaveStyleRule('color', valueTheme.colors.primary)
  })

  it('should look up colors in an array from a theme', () => {
    arrayTheme.colors.primary.forEach((c, i) => {
      const component = renderComponent({
        C,
        props: { $color: `primary.${i}` },
        theme: arrayTheme
      })
      expect(component).toHaveStyleRule('color', arrayTheme.colors.primary[i])
    })
  })

  it('should look up nested colors from a theme', () => {
    Object.keys(keyTheme.colors.primary).forEach(shade => {
      const component = renderComponent({
        C,
        props: { $color: `primary.${shade}` },
        theme: keyTheme
      })
      expect(component).toHaveStyleRule('color', keyTheme.colors.primary[shade])
    })
  })

  it('should provide pseudoselectors if an object is provided', () => {
    const component = renderComponent({
      C,
      props: {
        $color: {
          default: 'orchid',
          hover: 'darkorchid',
          active: 'purple'
        }
      },
      theme: keyTheme
    })

    expect(component).toHaveStyleRule('color', 'orchid')
    expect(component).toHaveStyleRule('color', 'darkorchid', {
      modifier: ':hover'
    })
    expect(component).toHaveStyleRule('color', 'purple', {
      modifier: ':active'
    })
  })
})

describe('fontSize', () => {
  const C = styled.div(fontSize)
  it('should add font-size as a style rule', () => {
    expect(renderComponent({ C, props: { $fontSize: '5em' } })).toHaveStyleRule(
      'font-size',
      '5em'
    )
  })
  it('should look up values from the theme using the fontSizes key', () => {
    expect(
      renderComponent({ C, props: { $fontSize: 'xl' }, theme })
    ).toHaveStyleRule('font-size', theme.fontSizes.xl)
  })
})

describe('fontFamily', () => {
  const C = styled.div(fontFamily)
  it('should add font-family as a style rule', () => {
    expect(
      renderComponent({ C, props: { $fontFamily: 'Arial,sans-serif' } })
    ).toHaveStyleRule('font-family', 'Arial,sans-serif')
  })
  it('should look up values from the theme using the fonts key', () => {
    expect(
      renderComponent({ C, props: { $fontFamily: 'code' }, theme })
    ).toHaveStyleRule('font-family', theme.fonts.code)
  })
})

describe('fontWeight', () => {
  const C = styled.div(fontWeight)
  it('should add font-weight as a style rule', () => {
    expect(
      renderComponent({ C, props: { $fontWeight: 'bolder' } })
    ).toHaveStyleRule('font-weight', 'bolder')
  })
  it('should look up values from the theme using the fontWeights key', () => {
    expect(
      renderComponent({ C, props: { $fontWeight: 'ultrabold' }, theme })
    ).toHaveStyleRule('font-weight', theme.fontWeights.ultrabold.toString())
  })
})

describe('fontStyle', () => {
  const C = styled.div(fontStyle)
  it('should add font-style as a style rule', () => {
    expect(
      renderComponent({ C, props: { $fontStyle: 'oblique' } })
    ).toHaveStyleRule('font-style', 'oblique')
  })
})

describe('fontVariant', () => {
  const C = styled.div(fontVariant)
  it('should add font-variant as a style rule', () => {
    expect(
      renderComponent({ C, props: { $fontVariant: 'smallcaps' } })
    ).toHaveStyleRule('font-variant', 'smallcaps')
  })
})

describe('textTransform', () => {
  const C = styled.div(textTransform)
  it('should add text-transform as a style rule', () => {
    expect(
      renderComponent({ C, props: { $textTransform: 'uppercase' } })
    ).toHaveStyleRule('text-transform', 'uppercase')
  })
})

describe('textDecoration', () => {
  const C = styled.div(textDecoration)
  it('should add text-transform as a style rule', () => {
    expect(
      renderComponent({ C, props: { $textTransform: 'underline' } })
    ).toHaveStyleRule('text-transform', 'underline')
  })
})

describe('lineHeight', () => {
  const C = styled.div(lineHeight)
  it('should add line-height as a style rule', () => {
    expect(
      renderComponent({ C, props: { $lineHeight: '1.4rem' } })
    ).toHaveStyleRule('line-height', '1.4rem')
  })
})

describe('letterSpacing', () => {
  const C = styled.div(letterSpacing)
  it('should add letter-spacing as a style rule', () => {
    expect(
      renderComponent({ C, props: { $letterSpacing: '0.14rem' } })
    ).toHaveStyleRule('letter-spacing', '0.14rem')
  })
})
