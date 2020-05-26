import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "./../components/Category"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const categories = data.allSanityCategory.edges
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Nuestras secciones</h2>
      {categories.map(category => (
        <Category {...category.node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query GET_EN_HOME_PAGE_DATA {
    allSanityCategory {
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`

export default IndexPage
