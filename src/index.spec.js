import { style, compoundStyle } from '.'

describe('style', () => {
  it('should import as a function', () => {
    expect(typeof style).toBe('function')
  })

  it('should return an appropriate style object', () => {
    const fn = style({ prop: '$test', css: 'testCss' })
    const $test = 'testValue'

    expect(fn({ $test })).toEqual({ testCss: $test })
  })

  it('should return an appropriate media query enriched style object if an array is provided', () => {
    const fn = style({ prop: '$test', css: 'testCss' })
    const $test = ['testValueA', 'testValueB', 'testValueC']

    expect(fn({ $test })).toEqual({
      testCss: $test[0],
      '@media screen and (min-width: 40em)': { testCss: $test[1] },
      '@media screen and (min-width: 52em)': { testCss: $test[2] }
    })
  })

  it('should return an appropriate pseudo-class enriched style object if an object is provided', () => {
    const fn = style({ prop: '$test', css: 'testCss' })
    const $test = {
      default: 'testValueA',
      hover: 'testValueB',
      active: 'testValueC'
    }
    expect(fn({ $test })).toEqual({
      testCss: $test.default,
      '&:hover': {
        testCss: $test.hover
      },
      '&:active': {
        testCss: $test.active
      }
    })
  })

  it('should return a nested style object if an array of objects are provided', () => {
    const fn = style({ prop: '$test', css: 'testCss' })
    const $test = [
      { default: 'testValueA', hover: 'testValueB' },
      { default: 'testValueC', hover: 'testValueD' },
      { default: 'testValueE', hover: 'testValueF' }
    ]

    expect(fn({ $test })).toEqual({
      testCss: $test[0].default,
      '&:hover': {
        testCss: $test[0].hover
      },
      '@media screen and (min-width: 40em)': {
        testCss: $test[1].default,
        '&:hover': {
          testCss: $test[1].hover
        }
      },
      '@media screen and (min-width: 52em)': {
        testCss: $test[2].default,
        '&:hover': {
          testCss: $test[2].hover
        }
      }
    })
  })

  it('should return a nested style object if an object of arrays are provided', () => {
    const fn = style({ prop: '$test', css: 'testCss' })
    const $test = {
      default: ['testValueA', 'testValueB', 'testValueC'],
      hover: ['testValueD', 'testValueE', 'testValueF']
    }

    expect(fn({ $test })).toEqual({
      testCss: $test.default[0],
      '@media screen and (min-width: 40em)': {
        testCss: $test.default[1]
      },
      '@media screen and (min-width: 52em)': {
        testCss: $test.default[2]
      },
      '&:hover': {
        testCss: $test.hover[0],
        '@media screen and (min-width: 40em)': {
          testCss: $test.hover[1]
        },
        '@media screen and (min-width: 52em)': {
          testCss: $test.hover[2]
        }
      }
    })
  })
})

describe('style with breakpoints', () => {
  const fn = style({ prop: '$test', css: 'testCss' })
  const $test = ['testValueA', 'testValueB', 'testValueC']

  it('should use default breakpoints if none are defined', () => {
    expect(fn({ $test })).toEqual({
      testCss: $test[0],
      [`@media screen and (min-width: 40em)`]: {
        testCss: $test[1]
      },
      [`@media screen and (min-width: 52em)`]: {
        testCss: $test[2]
      }
    })
  })
  it('should look up breakpoints from the theme', () => {
    const breakpoints = ['21em', '42em']

    expect(
      fn({
        $test,
        theme: {
          breakpoints
        }
      })
    ).toEqual({
      testCss: $test[0],
      [`@media screen and (min-width: ${breakpoints[0]})`]: {
        testCss: $test[1]
      },
      [`@media screen and (min-width: ${breakpoints[1]})`]: {
        testCss: $test[2]
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

describe('style with theme', () => {
  let fn = style({ prop: '$test', css: 'testCss', themeKey: 'testKey' })

  it('should retrieve style elements from the theme', () => {
    expect(
      fn({
        $test: 'example',
        theme: {
          testKey: {
            example: 42
          }
        }
      })
    ).toEqual({ testCss: 42 })
  })

  it('should return the value itself if it misses a key from the theme', () => {
    expect(
      fn({
        $test: 'failedExample',
        theme: {
          testKey: {
            example: 42
          }
        }
      })
    ).toEqual({ testCss: 'failedExample' })
  })

  it('should allow array lookup from nested theme', () => {
    expect(
      fn({
        $test: 'example.1',
        theme: {
          testKey: {
            example: ['a', 'b', 'c']
          }
        }
      })
    ).toEqual({ testCss: 'b' })
  })

  it('should allow object lookup from nested theme', () => {
    expect(
      fn({
        $test: 'example.innerExample',
        theme: {
          testKey: {
            example: {
              innerExample: 42
            }
          }
        }
      })
    ).toEqual({ testCss: 42 })
  })

  it('should retrieve style elements for a media query array', () => {
    expect(
      fn({
        $test: ['example1', 'example2', 'example3'],
        theme: {
          testKey: {
            example1: 21,
            example2: 42,
            example3: 84
          }
        }
      })
    ).toEqual({
      testCss: 21,
      '@media screen and (min-width: 40em)': { testCss: 42 },
      '@media screen and (min-width: 52em)': { testCss: 84 }
    })
  })

  it('should retrieve style elements for a pseudoselector object', () => {
    expect(
      fn({
        $test: {
          default: 'example1',
          hover: 'example2',
          active: 'example3'
        },
        theme: {
          testKey: {
            example1: 21,
            example2: 42,
            example3: 84
          }
        }
      })
    ).toEqual({
      testCss: 21,
      '&:hover': {
        testCss: 42
      },
      '&:active': {
        testCss: 84
      }
    })
  })

  let tFn = style({
    prop: '$test',
    css: 'testCss',
    themeKey: 'testKey',
    transformer: v => v + 'px'
  })
  it('should apply transformers to the elements retrieved from the theme', () => {
    expect(
      tFn({
        $test: 'example',
        theme: {
          testKey: {
            example: 42
          }
        }
      })
    ).toEqual({ testCss: '42px' })
  })
})

describe('compound style', () => {
  const compound = compoundStyle(
    style({ prop: '$testProp1', css: 'testCss1' }),
    style({ prop: '$testProp2', css: 'testCss2' }),
    style({ prop: '$testProp3', css: 'testCss3' })
  )

  it('should import as a function', () => {
    expect(typeof compound).toBe('function')
  })

  it('should render single styles', () => {
    expect(compound({ $testProp1: 'testValue1' })).toEqual({
      testCss1: 'testValue1'
    })
  })

  it('should render multiple styles', () => {
    expect(
      compound({
        $testProp1: 'testValue1',
        $testProp2: 'testValue2',
        $testProp3: 'testValue3'
      })
    ).toEqual({
      testCss1: 'testValue1',
      testCss2: 'testValue2',
      testCss3: 'testValue3'
    })
  })

  it('should skip props it does not know', () => {
    expect(
      compound({
        $testProp1: 'testValue1',
        $testProp2: 'testValue2',
        $testProp3: 'testValue3',
        otherProp: 'missedValue',
        $otherProp: 'missedValue'
      })
    ).toEqual({
      testCss1: 'testValue1',
      testCss2: 'testValue2',
      testCss3: 'testValue3'
    })
  })

  it('should skip styles it is not passed', () => {
    // i.e. no testCss3 in output
    expect(
      compound({
        $testProp1: 'testValue1',
        $testProp2: 'testValue2'
      })
    ).toEqual({ testCss1: 'testValue1', testCss2: 'testValue2' })
  })

  it('should deep assign for multiple breakpoints', () => {
    expect(
      compound({
        $testProp1: ['testValue1a', 'testValue1b', 'testValue1c'],
        $testProp2: ['testValue2a', 'testValue2b']
      })
    ).toEqual({
      testCss1: 'testValue1a',
      testCss2: 'testValue2a',
      '@media screen and (min-width: 40em)': {
        testCss1: 'testValue1b',
        testCss2: 'testValue2b'
      },
      '@media screen and (min-width: 52em)': {
        testCss1: 'testValue1c'
      }
    })
  })

  it('should deep assign for multiple pseudoselectors', () => {
    expect(
      compound({
        $testProp1: {
          default: 'testValue1',
          hover: 'testValue1h',
          active: 'testValue1a'
        },
        $testProp2: { default: 'testValue2', hover: 'testValue2h' }
      })
    ).toEqual({
      testCss1: 'testValue1',
      testCss2: 'testValue2',
      '&:hover': {
        testCss1: 'testValue1h',
        testCss2: 'testValue2h'
      },
      '&:active': {
        testCss1: 'testValue1a'
      }
    })
  })
})
