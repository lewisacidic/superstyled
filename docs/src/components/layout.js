import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Header from './header'
import Page from './page'
import Flex from './flex'
import Nav from './nav'
import theme, { globals } from '../theme'

const Globals = createGlobalStyle(globals, styledNormalize)

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <ThemeProvider theme={theme}>
        <Flex $flexDirection="column" $alignItems="center">
          <Globals />
          <Header />
          <Nav items={data.site.siteMetadata.nav} />
          <Page>{children}</Page>
        </Flex>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        nav {
          label
          to
        }
      }
    }
  }
`

export default Layout
