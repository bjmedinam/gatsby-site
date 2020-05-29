import React, { useEffect, useState } from "react"
import queryString from "query-string"
import HomeView from "./../../components/views/HomeView"
import { client as sanityClient } from "./../../utilities/sanityClient"
import { normalizeSanityData } from "./../../utilities/helpers"

const CategoriesPreview = ({ location: { search } }) => {
  const [categories, setCategories] = useState([])
  const params = queryString.parse(search)
  console.log("params", params)

  useEffect(() => {
    ;(async function () {
      const categoryId = `drafts.${params.id}`
      console.log("categoryId", categoryId)
      const allCategoriesQuery =
        '*[_type == "category" && !(_id in path("drafts.**"))] {id, title, slug, description}'
      const categoryQuery = `*[_id == '${categoryId}'] {id, title, slug, description}`
      const [allCategoriesSnapshot, categorySnapshot] = await Promise.all([
        sanityClient.fetch(allCategoriesQuery),
        sanityClient.fetch(categoryQuery),
      ])
      setCategories(normalizeSanityData(allCategoriesSnapshot))
      console.log("categorySnapshot", categorySnapshot)
    })()
  }, [])

  return <HomeView categories={categories} />
}

export default CategoriesPreview
