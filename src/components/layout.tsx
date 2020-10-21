import React, { ReactElement, ReactChild } from "react"
import { createGlobalStyle } from "styled-components"

import { Roobert } from "./Typography/index"

const GlobalStyles = createGlobalStyle`
  ${Roobert}

  body {
    background-color: black !important;
    color: white !important;
    font-family: Raleway;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Roobert;
  }

  a, a:hover
  {
    display: inline;
    color:white;
    text-decoration: none currentColor solid;
  }

  a:hover{
    opacity: .6;
  }
`

export interface LayoutProps {
  children: [ReactChild]
}

const Layout = (props : LayoutProps) : ReactElement => (
  <>
    <GlobalStyles />
    {props.children}
  </>
)

export default Layout
