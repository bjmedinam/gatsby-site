import React from "react"
import Layout from "../layout"
import Post from "./../Post"

const PostsView = ({ slug, title, posts }) => (
  <Layout>
    <h2>{title}</h2>
    {posts.map(post => (
      <Post key={post.id} {...post.node} sectionSlug={slug} />
    ))}
  </Layout>
)

export default PostsView
