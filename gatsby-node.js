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


// const colorText=[
// //red
// 'to',
// 'over',
// 'on',
// 'from',
// 'of',
// 'by',
// 'at',
// 'up',
// 'with',
// 'for',
// 'as',
// 'like',
// 'for',
// 'round',
// 'about',
// 'via',
// 'along',
// 'out',
// 'in',
// 'between',
// 'off',
// //blue
// 'and',
// 'where',
// 'because',
// 'that',
// 'so',
// 'if',
// 'but',
// //green
// 'this',
// 'all',
// 'i',
// 'us',
// 'we',
// 'which',
// 'these',
// 'they',
// 'each',
// 'it',
// 'you',
// 'any',
// 'what',
// ]

// const getColor=(i)=>{
// console.log('inside getColor')
// if(i<=20)return 'red'
// else if(i<=27) return 'blue'
// else return 'green'
// }