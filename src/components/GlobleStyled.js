import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: #000;
        color: #777;
    }
    h1 {
       font-family: 'IBM Plex Mono', monospace;
       text-transform: capitalize;
       font-weight: 700;
       font-size: 2.8rem;
       margin:  4rem 0;
    }
    h2{
        font-family: 'Teko', sans-serif;
        font-weight: 600;
    }

`;

export default GlobalStyle;
