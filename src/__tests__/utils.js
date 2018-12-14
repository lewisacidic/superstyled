import React from 'react'
import { ThemeProvider } from 'styled-components'
import renderer from 'react-test-renderer'

export const renderComponent = ({ C, props, theme }) => {
  let comp = <C {...props} />
  comp = theme ? <ThemeProvider theme={theme}>{comp}</ThemeProvider> : comp
  return renderer.create(comp).toJSON()
}
