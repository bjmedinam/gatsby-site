import React from "react"
import Image from "gatsby-image"

const PostDetail = ({ title, description, mainImage }) => {
  return (
    <div className="demo-post-detail">
      <h2 className="demo-post-title">{title}</h2>
      <p>{description}</p>
      <Image fluid={mainImage.asset.fluid} />
    </div>
  )
}

export default PostDetail
