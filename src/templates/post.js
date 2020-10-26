import React from 'react'
import {graphql} from 'gatsby'

export default function Post({data}){
    const post = data.markdownRemark
    return<div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{__html:post.html}}/>
    {console.log(data)}
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
