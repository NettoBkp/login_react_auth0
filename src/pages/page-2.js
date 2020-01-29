import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Modelo de Login no Auth0</h1>
    <p>Bem vindo ao Gatsby site.</p>
    <p>Página 2</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <Link to="/">Voltar para o Início</Link>
  </Layout>
)

export default SecondPage
