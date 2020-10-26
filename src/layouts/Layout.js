import React from 'react'
import {Link}from 'gatsby'
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282a36;
    width:80vw;
    font-family:'Space Mono';
  }
  h4{
      color:#8694b1;
      text-decoration:none;
  }
a{
  text-decoration:none;
}
a{
  color:#bd96f0;
}
a:hover{
  color:#282a36;
  background-color:#bd96f0;
}
img{
    width:100%;
    height:auto;    
}
`
const Layout = ({children})=>{
    return (<>
        <GlobalStyle/>
        <Link to='/'>
        <h4>// Technicode.io</h4>
        </Link>
        <h4>// All things Tech and Code</h4>
        {children}
    </>)
}
export default Layout