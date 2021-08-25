import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #__next {
    min-height: 100vh;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }
`;
