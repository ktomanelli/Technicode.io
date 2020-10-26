import React from 'react'
import {graphql} from 'gatsby'

export default function Post({data}){
    const post = data.markdownRemark
    const formatDate = (val)=>{
        const date = new Date(Date.parse(val))
        date.setHours(date.getHours() + 4);
        return date
    }
    const date = formatDate(post.frontmatter.date)
    return<div>
        <h1>{post.frontmatter.title}</h1>
        <p>{date.toDateString()}</p>
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
