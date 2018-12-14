import { breakpoint, em, dist } from '../transformers'

describe('breakpoint', () => {
  it('should transform a distance to a media query for that distance', () => {
    expect(breakpoint('40em')).toEqual('@media screen and (min-width: 40em)')
  })
})

describe('em', () => {
  it('should turn a number into a string showing the number of ems', () => {
    expect(em(4)).toEqual('4em')
  })
  it('should just return the value in ems if it already is in ems', () => {
    expect(em('4em')).toEqual('4em')
  })
})

describe('dist', () => {
  it('should turn a fraction into a percentage', () => {
    expect(dist(1 / 2)).toEqual('50%')
  })
  it('should return just the argument otherwise', () => {
    expect(dist('4em')).toEqual('4em')
  })
})
