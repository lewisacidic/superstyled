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
})
