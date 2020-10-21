import React, { ReactElement } from "react"

import SEO from '../components/seo'
import Layout  from '../components/layout'
import Home from '../components/Home'

const IndexPage = () : ReactElement => (
  <Layout>
    <SEO />
    <Home />
  </Layout>
)

export default IndexPage
