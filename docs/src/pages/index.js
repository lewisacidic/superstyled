import React from 'react'

import Link from '../components/link'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>styled-components, now super!</h2>
    <p>
      Superstyled is a tiny library that helps you make styled components do
      exactly what you want.
    </p>
    <Link to="/about/">Go to about</Link>
  </Layout>
)

export default IndexPage
