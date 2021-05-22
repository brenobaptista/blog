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
    font-size: 1.25em;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
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
    margin: 32px 0 16px;
  }

  h3 {
    margin: 16px 0;
  }

  p {
    margin: 16px 0;
  }

  ::selection {
    color: ${props => props.theme.colors.altBackground};
    background: ${props => props.theme.colors.primary};
  }

  /* Custom scrollbar on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${props =>
      `${props.theme.colors.primary} ${props.theme.colors.altBackground}`};
  }

  /* Custom scrollbar on Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.altBackground};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
  }
`
