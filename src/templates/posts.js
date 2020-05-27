import React from "react"
import PostsView from "../components/views/PostsView"
import { graphql } from "gatsby"

const PostsTemplate = ({ data, pageContext }) => {
  const posts = data.allSanityPost.edges
  return (
    <PostsView
      title={pageContext.title}
      posts={posts}
      slug={pageContext.slug}
    />
  )
}

export const query = graphql`
  query GET_POSTS_DATA($id: String!) {
    allSanityPost(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      edges {
        node {
          id
          slug {
            current
          }
          title
        }
      }
    }
  }
`

export default PostsTemplate
