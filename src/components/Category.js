import React from "react"
import { Link } from "gatsby"

const Category = ({ title, slug, description }) => {
  return (
    <div className="demo-category">
      <Link to={`/section/${slug.current}`}>
        <p className="demo-category-title">{title}</p>
      </Link>
      <p className="demo-category-description">{description}</p>
    </div>
  )
}

export default Category
