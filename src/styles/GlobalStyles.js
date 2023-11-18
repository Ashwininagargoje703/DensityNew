import { createGlobalStyle } from "styled-components"

const globalStyle = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {

        margin: auto;
        background-color: ${({ theme }) => theme.color.bg};
        color: ${({ theme }) => theme.color.text2};
    }
    a {
        color: ${({ theme }) => theme.color.text2};
    }
`

export default globalStyle
