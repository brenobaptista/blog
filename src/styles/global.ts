import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.6;
    font-size: 1.25em;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    scroll-behavior: smooth;
  }

  h1 {
    font-size: 1.9rem;
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

  h3,
  h4,
  p {
    margin: 16px 0;
  }

  abbr {
    cursor: help;
  }

  ::selection {
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.primary};
  }

  /* Custom scrollbar on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${props => {
      const { primary, altBackground } = props.theme.colors

      return `${primary} ${altBackground}`
    }};
  }

  /* Custom scrollbar on Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.altBackground};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
  }
`
