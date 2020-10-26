exports.createPages = async({actions,graphql})=>{
    const {data} = await graphql(`
    query MyQuery {
        allMarkdownRemark {
          nodes {
            id
            html
            frontmatter {
              title
              date
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.nodes.forEach(post=>{
        const slug = post.frontmatter.title.replace(/\s+/g, '-').toLowerCase()
        actions.createPage({
            path:`/posts/${slug}`,
            component:require.resolve('./src/templates/post.js'),
            context:{id:post.id},
        })
    })
}