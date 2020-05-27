import React from "react"
import { Link } from "gatsby"

const Post = ({ title, slug, sectionSlug }) => {
  return (
    <div className="demo-post">
      <Link to={`/section/${sectionSlug}/${slug.current}`}>
        <p className="demo-post-title">{title}</p>
      </Link>
    </div>
  )
}

export default Post
