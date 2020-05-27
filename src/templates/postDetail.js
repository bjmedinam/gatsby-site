import React from "react"
import PostDetailView from "../components/views/PostDetailView"
import { graphql } from "gatsby"

const PostsDetailTemplate = ({ data, pageContext }) => {
  const post = data.sanityPost
  return <PostDetailView post={post} />
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
