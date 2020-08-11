import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Recursive', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 18px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  @media all and (min-width: 769px) {
    html {
      font-size: 24px;
    }
  }
  @media all and (min-width: 1921px) {
    html {
      font-size: 42px;
    }
  }
`;
