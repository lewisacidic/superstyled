import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>welcome to superstyled</h2>
    <p>Bringing styling superpowers to your fingertips!</p>
    <Link to="/about/">Go to about</Link>
  </Layout>
)

export default IndexPage
