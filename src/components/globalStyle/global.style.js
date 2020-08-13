import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @font-face {

        font-family: 'Ubuntu';
        src: url("fonts/ubuntu/Ubuntu-Regular.woff") format("woff");
    }
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
