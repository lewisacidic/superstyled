import { style } from '.'

describe('style', () => {
  const fn = style({ prop: '$test', css: 'testCss' })

  it('should return an appropriate style object', () => {
    expect(
      fn({
        $test: 1
      })
    ).toEqual({
      testCss: 1
    })
  })

  it('should return an appropriate media query enriched style object if an array is provided', () => {
    expect(
      fn({
        $test: [1, 2, 3]
      })
    ).toEqual({
      testCss: 1,
      '@media screen and (min-width: 40em)': { testCss: 2 },
      '@media screen and (min-width: 52em)': { testCss: 3 }
    })
  })

  it('should return an appropriate pseudo-class enriched style object if an object is provided', () => {
    expect(
      fn({
        $test: {
          default: 1,
          hover: 2,
          active: 3
        }
      })
    ).toEqual({
      testCss: 1,
      '&:hover': {
        testCss: 2
      },
      '&:active': {
        testCss: 3
      }
    })
  })

  it('should return a nested style object if an array of objects are provided', () => {
    expect(
      fn({
        $test: [
          { default: 1, hover: 2 },
          { default: 2, hover: 3 },
          { default: 3, hover: 4 }
        ]
      })
    ).toEqual({
      testCss: 1,
      '&:hover': {
        testCss: 2
      },
      '@media screen and (min-width: 40em)': {
        testCss: 2,
        '&:hover': {
          testCss: 3
        }
      },
      '@media screen and (min-width: 52em)': {
        testCss: 3,
        '&:hover': {
          testCss: 4
        }
      }
    })
  })

  it('should return a nested style object if an object of arrays are provided', () => {
    expect(
      fn({
        $test: {
          default: [1, 2, 3],
          hover: [2, 3, 4]
        }
      })
    ).toEqual({
      testCss: 1,
      '@media screen and (min-width: 40em)': {
        testCss: 2
      },
      '@media screen and (min-width: 52em)': {
        testCss: 3
      },
      '&:hover': {
        testCss: 2,
        '@media screen and (min-width: 40em)': {
          testCss: 3
        },
        '@media screen and (min-width: 52em)': {
          testCss: 4
        }
      }
    })
  })
})

describe('style with a transformer', () => {
  const fn = style({
    prop: '$test',
    css: 'testCss',
    transformer: v => v + 'em'
  })

  it('should apply a transformer', () => {
    expect(
      fn({
        $test: 1
      })
    ).toEqual({
      testCss: '1em'
    })
  })

  it('should apply the transformer to every element in an array', () => {
    expect(
      fn({
        $test: [1, 2, 3]
      })
    ).toEqual({
      testCss: '1em',
      '@media screen and (min-width: 40em)': { testCss: '2em' },
      '@media screen and (min-width: 52em)': { testCss: '3em' }
    })
  })

  it('should apply the transformer to every element in an object', () => {
    expect(
      fn({
        $test: {
          default: 1,
          hover: 2,
          active: 3
        }
      })
    ).toEqual({
      testCss: '1em',
      '&:hover': {
        testCss: '2em'
      },
      '&:active': {
        testCss: '3em'
      }
    })
  })
})
