import styled from 'styled-components'
import { renderComponent } from './test-utils'

import {
  paddings,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margins,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  borders,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  borderColor,
  outline,
  boxShadow
} from '../box-model'

const theme = {
  colors: {
    primary: 'purple',
    secondary: 'olive'
  },
  spacings: {
    xs: '0.5em',
    s: '1em',
    m: '2em',
    l: '3em',
    xl: '5em'
  },
  radii: {
    sm: '1em',
    md: '2em',
    lg: '3em'
  },
  borders: {
    light: '1px solid grey',
    medium: '3px solid grey',
    heavy: '5px solid grey'
  },
  shadows: {
    flat: 'none',
    low: 'grey 0px 2px 2px -2px',
    medium: 'grey 0px 5px 5px -3px',
    high: 'grey 0px 8px 8px -4px'
  }
}
describe('paddings', () => {
  const C = styled.div(...paddings)
  it('should set padding to add padding as a style rule', () => {
    const component = renderComponent({ C, props: { $padding: '12em' } })
    expect(component).toHaveStyleRule('padding', '12em')
  })
  it('should set paddingTop to add padding-top as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingTop: '2em' } })
    expect(component).toHaveStyleRule('padding-top', '2em')
  })
  it('should set paddingRight to add padding-right as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingRight: '4em' } })
    expect(component).toHaveStyleRule('padding-right', '4em')
  })
  it('should set paddingBottom to add padding-bottom as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingBottom: '6em' } })
    expect(component).toHaveStyleRule('padding-bottom', '6em')
  })
  it('should set paddingLeft to add padding-left as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingLeft: '3em' } })
    expect(component).toHaveStyleRule('padding-left', '3em')
  })
  it('should set paddingX to add padding-top as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingX: '7em' } })
    expect(component).toHaveStyleRule('padding-right', '7em')
    expect(component).toHaveStyleRule('padding-left', '7em')
  })
  it('should set paddingY to add padding-top and padding-bottom as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingY: '11em' } })
    expect(component).toHaveStyleRule('padding-top', '11em')
    expect(component).toHaveStyleRule('padding-bottom', '11em')
  })
})

describe('padding', () => {
  const C = styled.div(padding)
  it('should add padding-top as a style rule', () => {
    const component = renderComponent({ C, props: { $padding: '2em' } })
    expect(component).toHaveStyleRule('padding', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $padding: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('padding', '0.5em')
  })
})

describe('paddingTop', () => {
  const C = styled.div(paddingTop)
  it('should add padding-top as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingTop: '2em' } })
    expect(component).toHaveStyleRule('padding-top', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $paddingTop: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('padding-top', '0.5em')
  })
})

describe('paddingRight', () => {
  const C = styled.div(paddingRight)
  it('should add padding-right as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingRight: '2em' } })
    expect(component).toHaveStyleRule('padding-right', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $paddingRight: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('padding-right', '0.5em')
  })
})

describe('paddingBottom', () => {
  const C = styled.div(paddingBottom)
  it('should add padding-bottom as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingBottom: '2em' } })
    expect(component).toHaveStyleRule('padding-bottom', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $paddingBottom: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('padding-bottom', '0.5em')
  })
})

describe('paddingLeft', () => {
  const C = styled.div(paddingLeft)
  it('should add padding-left as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingLeft: '2em' } })
    expect(component).toHaveStyleRule('padding-left', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $paddingLeft: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('padding-left', '0.5em')
  })
})

describe('paddingX', () => {
  const C = styled.div(paddingX)
  it('should add padding-right and padding-left as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingX: '11em' } })
    expect(component).toHaveStyleRule('padding-right', '11em')
    expect(component).toHaveStyleRule('padding-left', '11em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $paddingX: 's' },
      theme
    })
    expect(component).toHaveStyleRule('padding-right', '1em')
    expect(component).toHaveStyleRule('padding-left', '1em')
  })
})

describe('paddingY', () => {
  const C = styled.div(paddingY)
  it('should add padding-top and padding-bottom as a style rule', () => {
    const component = renderComponent({ C, props: { $paddingY: '11em' } })
    expect(component).toHaveStyleRule('padding-top', '11em')
    expect(component).toHaveStyleRule('padding-bottom', '11em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $paddingY: 'm' },
      theme
    })
    expect(component).toHaveStyleRule('padding-top', '2em')
    expect(component).toHaveStyleRule('padding-bottom', '2em')
  })
})

describe('margins', () => {
  const C = styled.div(...margins)
  it('should set margin to add margin as a style rule', () => {
    const component = renderComponent({ C, props: { $margin: '12em' } })
    expect(component).toHaveStyleRule('margin', '12em')
  })
  it('should set marginTop to add margin-top as a style rule', () => {
    const component = renderComponent({ C, props: { $marginTop: '2em' } })
    expect(component).toHaveStyleRule('margin-top', '2em')
  })
  it('should set marginRight to add margin-right as a style rule', () => {
    const component = renderComponent({ C, props: { $marginRight: '4em' } })
    expect(component).toHaveStyleRule('margin-right', '4em')
  })
  it('should set marginBottom to add margin-bottom as a style rule', () => {
    const component = renderComponent({ C, props: { $marginBottom: '6em' } })
    expect(component).toHaveStyleRule('margin-bottom', '6em')
  })
  it('should set marginLeft to add margin-left as a style rule', () => {
    const component = renderComponent({ C, props: { $marginLeft: '3em' } })
    expect(component).toHaveStyleRule('margin-left', '3em')
  })
  it('should set marginX to add margin-top as a style rule', () => {
    const component = renderComponent({ C, props: { $marginX: '7em' } })
    expect(component).toHaveStyleRule('margin-right', '7em')
    expect(component).toHaveStyleRule('margin-left', '7em')
  })
  it('should set marginY to add margin-top and margin-bottom as a style rule', () => {
    const component = renderComponent({ C, props: { $marginY: '11em' } })
    expect(component).toHaveStyleRule('margin-top', '11em')
    expect(component).toHaveStyleRule('margin-bottom', '11em')
  })
})

describe('margin', () => {
  const C = styled.div(margin)
  it('should add margin as a style rule', () => {
    const component = renderComponent({ C, props: { $margin: '2em' } })
    expect(component).toHaveStyleRule('margin', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $margin: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('margin', '0.5em')
  })
})

describe('marginTop', () => {
  const C = styled.div(marginTop)
  it('should add margin-top as a style rule', () => {
    const component = renderComponent({ C, props: { $marginTop: '2em' } })
    expect(component).toHaveStyleRule('margin-top', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $marginTop: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('margin-top', '0.5em')
  })
})

describe('marginRight', () => {
  const C = styled.div(marginRight)
  it('should add margin-right as a style rule', () => {
    const component = renderComponent({ C, props: { $marginRight: '2em' } })
    expect(component).toHaveStyleRule('margin-right', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $marginRight: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('margin-right', '0.5em')
  })
})

describe('marginBottom', () => {
  const C = styled.div(marginBottom)
  it('should add margin-bottom as a style rule', () => {
    const component = renderComponent({ C, props: { $marginBottom: '2em' } })
    expect(component).toHaveStyleRule('margin-bottom', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $marginBottom: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('margin-bottom', '0.5em')
  })
})

describe('marginLeft', () => {
  const C = styled.div(marginLeft)
  it('should add margin-left as a style rule', () => {
    const component = renderComponent({ C, props: { $marginLeft: '2em' } })
    expect(component).toHaveStyleRule('margin-left', '2em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $marginLeft: 'xs' },
      theme
    })
    expect(component).toHaveStyleRule('margin-left', '0.5em')
  })
})

describe('marginX', () => {
  const C = styled.div(marginX)
  it('should add margin-right and margin-left as a style rule', () => {
    const component = renderComponent({ C, props: { $marginX: '11em' } })
    expect(component).toHaveStyleRule('margin-right', '11em')
    expect(component).toHaveStyleRule('margin-left', '11em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $marginX: 's' },
      theme
    })
    expect(component).toHaveStyleRule('margin-right', '1em')
    expect(component).toHaveStyleRule('margin-left', '1em')
  })
})

describe('marginY', () => {
  const C = styled.div(marginY)
  it('should add margin-top and margin-bottom as a style rule', () => {
    const component = renderComponent({ C, props: { $marginY: '11em' } })
    expect(component).toHaveStyleRule('margin-top', '11em')
    expect(component).toHaveStyleRule('margin-bottom', '11em')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $marginY: 'm' },
      theme
    })
    expect(component).toHaveStyleRule('margin-top', '2em')
    expect(component).toHaveStyleRule('margin-bottom', '2em')
  })
})

describe('borders', () => {
  const C = styled.div(...borders)
  it('should set border to add border as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $border: '1px solid grey' }
    })
    expect(component).toHaveStyleRule('border', '1px solid grey')
  })
  it('should set borderTop to add border-top as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $borderTop: '1px solid grey' }
    })
    expect(component).toHaveStyleRule('border-top', '1px solid grey')
  })
  it('should set borderRight to add border-right as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $borderRight: '1px solid grey' }
    })
    expect(component).toHaveStyleRule('border-right', '1px solid grey')
  })
  it('should set borderBottom to add border-bottom as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $borderBottom: '1px solid grey' }
    })
    expect(component).toHaveStyleRule('border-bottom', '1px solid grey')
  })
  it('should set borderLeft to add border-left as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $borderLeft: '1px solid grey' }
    })
    expect(component).toHaveStyleRule('border-left', '1px solid grey')
  })
  it('should set borderRadius to add border radius as a style rule', () => {
    const component = renderComponent({ C, props: { $borderRadius: '4px' } })
    expect(component).toHaveStyleRule('border-radius', '4px')
  })
  it('should set borderColor to add border color as a style rule', () => {
    const component = renderComponent({ C, props: { $borderColor: 'green' } })
    expect(component).toHaveStyleRule('border-color', 'green')
  })
})

describe('border', () => {
  const C = styled.div(border)
  it('should add border as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $border: '1px solid grey' }
    })
    expect(component).toHaveStyleRule('border', '1px solid grey')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $border: 'medium' },
      theme
    })
    expect(component).toHaveStyleRule('border', theme.borders.medium)
  })
})

describe('borderTop', () => {
  const C = styled.div(borderTop)
  it('should add border-top as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $borderTop: '1px solid grey' }
    })
    expect(component).toHaveStyleRule('border-top', '1px solid grey')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $borderTop: 'light' },
      theme
    })
    expect(component).toHaveStyleRule('border-top', theme.borders.light)
  })
})

describe('borderRight', () => {
  const C = styled.div(borderRight)
  it('should add border-right as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $borderRight: '1px solid grey' }
    })
    expect(component).toHaveStyleRule('border-right', '1px solid grey')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $borderRight: 'medium' },
      theme
    })
    expect(component).toHaveStyleRule('border-right', theme.borders.medium)
  })
})

describe('borderBottom', () => {
  const C = styled.div(borderBottom)
  it('should add border-bottom as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $borderBottom: '1px dashed grey' }
    })
    expect(component).toHaveStyleRule('border-bottom', '1px dashed grey')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $borderBottom: 'heavy' },
      theme
    })
    expect(component).toHaveStyleRule('border-bottom', theme.borders.heavy)
  })
})

describe('borderLeft', () => {
  const C = styled.div(borderLeft)
  it('should add border-left as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $borderLeft: '10px solid purple' }
    })
    expect(component).toHaveStyleRule('border-left', '10px solid purple')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $borderLeft: 'light' },
      theme
    })
    expect(component).toHaveStyleRule('border-left', theme.borders.light)
  })
})

describe('borderRadius', () => {
  const C = styled.div(borderRadius)
  it('should add border-radius as a style rule', () => {
    const component = renderComponent({ C, props: { $borderRadius: '42px' } })
    expect(component).toHaveStyleRule('border-radius', '42px')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $borderRadius: 'lg' },
      theme
    })

    expect(component).toHaveStyleRule('border-radius', theme.radii.lg)
  })
})

describe('borderColor', () => {
  const C = styled.div(borderColor)
  it('should add border-color as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $borderColor: 'steelblue' }
    })
    expect(component).toHaveStyleRule('border-color', 'steelblue')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $borderColor: 'primary' },
      theme
    })
    expect(component).toHaveStyleRule('border-color', theme.colors.primary)
  })
})

describe('boxShadow', () => {
  const C = styled.div(boxShadow)
  it('should add box-shadow as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $boxShadow: 'inset 1px 1px' }
    })
    expect(component).toHaveStyleRule('box-shadow', 'inset 1px 1px')
  })
  it('should look up values from theme for shadows key', () => {
    const component = renderComponent({
      C,
      props: { $boxShadow: 'high' },
      theme
    })
    expect(component).toHaveStyleRule('box-shadow', 'grey 0px 8px 8px -4px')
  })
})

describe('outline', () => {
  const C = styled.div(outline)
  it('should add outline as a style rule', () => {
    const component = renderComponent({
      C,
      props: { $outline: '10px solid purple' }
    })
    expect(component).toHaveStyleRule('outline', '10px solid purple')
  })
  it('should look up values from theme', () => {
    const component = renderComponent({
      C,
      props: { $outline: 'light' },
      theme
    })
    expect(component).toHaveStyleRule('outline', theme.borders.light)
  })
})
