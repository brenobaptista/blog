import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.6;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    transition: background-color 0.2s, color 0.2s;
  }

  h1, h2 {
    font-family: Open Sans, Source Sans Pro;
  }

  h1 {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 16px 0;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 16px 0;
  }
`
