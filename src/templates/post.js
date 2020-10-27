import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import Layout from '../layouts/Layout'

const StyledPost = styled.div`
    padding:1rem;
    margin-left:25vw;
    color:white;
    width:65%;
    code{
        background-color:#363948;
    }
`


export default function Post({data}){
    const post = data.markdownRemark
    const formatDate = (val)=>{
        const date = new Date(Date.parse(val))
        date.setHours(date.getHours() + 4);
        return date
    }
    const date = formatDate(post.frontmatter.date)
    return<Layout>
        <StyledPost>
        <h1>{post.frontmatter.title}</h1>
        <p>{date.toDateString()}</p>
        <div dangerouslySetInnerHTML={{__html:post.html}}/>
        </StyledPost>
    </Layout>
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
