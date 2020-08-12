import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

    html, body {
        height:100%;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #2c3e50;
        color: #ffffff;
        font-family: 'Ubuntu', sans-serif;
    }

    #___gatsby, #gatsby-focus-wrapper{
        height:100%;
    }
`
