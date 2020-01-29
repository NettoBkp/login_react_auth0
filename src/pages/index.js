import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Modelo de Login no Auth0</h1>
    <p>Bem vindo ao Gatsby site.</p>
    <p>Aproveite!.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Ir para página 2</Link>
  </Layout>
)

export default IndexPage
