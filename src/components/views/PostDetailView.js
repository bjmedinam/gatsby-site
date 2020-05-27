import React from "react"
import Layout from "./../layout"
import PostDetail from "./../PostDetail"

const PostDetailView = ({ post }) => (
  <Layout>
    <PostDetail {...post} />
  </Layout>
)

export default PostDetailView
