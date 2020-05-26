import React from "react"
import { Link } from "gatsby"

const Category = ({ title, description }) => {
  return (
    <div className="demo-category">
      <Link>
        <p className="demo-category-title">{title}</p>
      </Link>
      <p className="demo-category-description">{description}</p>
    </div>
  )
}

export default Category
