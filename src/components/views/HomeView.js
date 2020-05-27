import React from "react"
import Layout from "../layout"
import SEO from "./../seo"
import Category from "./../Category"

const HomeView = ({ categories }) => (
  <Layout>
    <SEO title="Home" />
    <h2>Nuestras secciones</h2>
    {categories.map(category => (
      <Category {...category.node} />
    ))}
  </Layout>
)

export default HomeView
