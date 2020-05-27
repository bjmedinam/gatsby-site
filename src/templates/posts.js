import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Post from "./../components/Post"

const PostsTemplate = ({ data, pageContext, ...otherProps }) => {
  const posts = data.allSanityPost.edges
  return (
    <Layout>
      <h2>{pageContext.title}</h2>
      {posts.map(post => (
        <Post key={post.id} {...post.node} sectionSlug={pageContext.slug} />
      ))}
    </Layout>
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
