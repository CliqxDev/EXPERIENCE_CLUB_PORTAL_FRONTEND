import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('fonts/WorkSans-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('fonts/WorkSans-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Work Sans';
    font-weight: 600;
    src: local(''),
        url('fonts/WorkSans-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Work Sans';
    font-weight: 800;
    src: local(''),
        url('fonts/WorkSans-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: local(''),
        url('fonts/Roboto-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: local(''),
        url('fonts/Roboto-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 600;
    src: local(''),
        url('fonts/Roboto-Bold.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: Work Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

export default GlobalStyles;
