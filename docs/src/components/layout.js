import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import Header from './header'
import Page from './page'
import Background from './background'
import theme, { globals } from '../theme'

const Globals = createGlobalStyle(globals)

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Background>
      <Globals />
      <Header />
      <Page>{children}</Page>
    </Background>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
