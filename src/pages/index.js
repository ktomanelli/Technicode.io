import { graphql, Link} from "gatsby"
import React from "react"

export default function Home({data}) {
  const posts = data.allMarkdownRemark.nodes.sort()
  const formatDate = (val)=>{
    const date = new Date(Date.parse(val))
    date.setHours(date.getHours() + 4);
  return date
  }
  return <>
    <h1>// Technicode.io</h1>
    <p>// All things Tech and Code</p>

    {posts.map(post=>{
      const title = post.frontmatter.title
      const slug =`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`
      const date = formatDate(post.frontmatter.date)
      return(
      <div key={post.id}>
      <Link to={slug}>
      <h2>{title}</h2>
      </Link>
      <p>{date.toDateString()}</p>
      </div>)
    })}
  </>
}

export const query = graphql`
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
`