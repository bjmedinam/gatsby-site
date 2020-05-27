const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const postsTemplate = path.resolve(`src/templates/posts.js`)
    const postDetailTemplate = path.resolve(`src/templates/postDetail.js`)

    resolve(
      graphql(
        `
          {
            allSanityCategory {
              edges {
                node {
                  id
                  slug {
                    current
                  }
                  title
                  description
                }
              }
            }
            allSanityPost {
              edges {
                node {
                  id
                  slug {
                    current
                  }
                  categories {
                    slug {
                      current
                    }
                  }
                  title
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        //Create categories path
        result.data.allSanityCategory.edges.forEach(edgeSection => {
          createPage({
            path: `/section/${edgeSection.node.slug.current}`,
            component: postsTemplate,
            context: {
              id: edgeSection.node.id,
              title: edgeSection.node.title,
              slug: edgeSection.node.slug.current,
            },
          })
        })

        //Create post path
        result.data.allSanityPost.edges.forEach(edgePost => {
          edgePost.node.categories.forEach(categorie => {
            createPage({
              path: `/section/${categorie.slug.current}/${edgePost.node.slug.current}`,
              component: postDetailTemplate,
              context: {
                id: edgePost.node.id,
                title: edgePost.node.title,
                slug: edgePost.node.slug.current,
              },
            })
          })
        })
      })
    )
  })
}
