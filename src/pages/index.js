import { graphql, Link} from "gatsby"
import React from "react"
import styled from 'styled-components'
import Layout from '../layouts/Layout'


const HomeStyle = styled.div`
.posts{
  padding:1rem;
  margin-left:10vw;
}
p{
  color:#8694b1;
}
`
const LinkStyle = styled.a`
a{
  font-size:1.7em;
  font-weight:700;
}
`

export default function Home({data}) {
  const posts = data.allMarkdownRemark.nodes.sort((a,b)=>
    Date.parse(b.frontmatter.date)-Date.parse(a.frontmatter.date))
  const formatDate = (val)=>{
    const date = new Date(Date.parse(val))
    date.setHours(date.getHours() + 4);
  return date
  }
  return <>
  <Layout>
    <HomeStyle>
      <div className="posts">
    {posts.map(post=>{
      const title = post.frontmatter.title
      const slug =`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`
      const date = formatDate(post.frontmatter.date)
      return(
      <div key={post.id} className="posts">
        <LinkStyle>
      <Link to={slug}>
      <span className='title'>{title}</span>
      </Link>
        </LinkStyle>
      <p>{date.toDateString()}</p>
      </div>)
    })}
          </div>
      </HomeStyle>
    </Layout>
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