import React from "react"
import queryString from "query-string"
import HomeView from "./../../components/views/HomeView"

const CategoriesPreview = ({ location: { search } }) => {
  const params = queryString.parse(search)
  console.log("params", params)
  return (
    <div>
      <h1>CategoriesPreview</h1>
    </div>
  )
}

export default CategoriesPreview
