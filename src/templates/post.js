import React from 'react'
import {graphql} from 'gatsby'

export default function Post({data}){
    const post = data.markdownRemark
    const date = (Date.parse(post.frontmatter.date))
    return<div>
        <h1>{post.frontmatter.title}</h1>
        {console.log(date)}
        {/* <p>{date.toDateString()}</p> */}
        <div dangerouslySetInnerHTML={{__html:post.html}}/>
    </div>
}

export const query = graphql`
query($id:String!){
    markdownRemark(id:{eq:$id}){
        html
        frontmatter{
            title
            date
        }
    }
}
`
