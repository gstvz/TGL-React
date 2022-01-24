import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: #F7F7F7;
    font-size: 62.5%;
    font-family: Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }
`;