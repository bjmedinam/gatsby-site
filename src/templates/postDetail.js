import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostDetail from "./../components/PostDetail"

const PostsDetailTemplate = ({ data, pageContext, ...otherProps }) => {
  const post = data.sanityPost
  return (
    <Layout>
      <PostDetail {...post} />
    </Layout>
  )
}

export const query = graphql`
  query GET_POST_DATA($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
      description
      mainImage {
        asset {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  }
`

export default PostsDetailTemplate
