import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h2>About</h2>
    <p>Welcome to the about page</p>
    <Link to="/">Go back to the home page</Link>
  </Layout>
)

export default AboutPage
