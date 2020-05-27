import React from "react"
import HomeView from "./../components/views/HomeView"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const categories = data.allSanityCategory.edges
  return <HomeView categories={categories} />
}

export const query = graphql`
  query GET_EN_HOME_PAGE_DATA {
    allSanityCategory {
      edges {
        node {
          id
          slug {
            current
          }
          title
          description
        }
      }
    }
  }
`

export default IndexPage
