import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    src: url(/fonts/inter-var-latin.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    cursor: ${props =>
      props.theme.mode === 'retro' &&
      "url('/static/images/retro/cursor/pointer.cur'), pointer"};

    &:hover {
      text-decoration: underline;
    }
  }

  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.6;
    font-size: ${props => (props.theme.mode === 'retro' ? '1.05em' : '1.25em')};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    background-image: ${props =>
      props.theme.mode === 'retro'
        ? 'url(/static/images/retro/space.gif)'
        : 'none'};
    cursor: ${props =>
      props.theme.mode === 'retro' &&
      "url('/static/images/retro/cursor/default.cur'), default"};
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

  h1,
  h2,
  h3 {
    ${props =>
      props.theme.mode === 'retro' &&
      `
      margin-left: 12px;
      margin-bottom: 28px;
      letter-spacing: 0.125rem;
      text-transform: uppercase;
      text-shadow:
        -2px 2px violet,
        -4px 4px indigo,
        -6px 6px blue,
        -8px 8px green,
        -10px 10px yellow,
        -12px 12px orange,
        -14px 14px red;
    `}
  }

  h1,
  h2,
  h3,
  p,
  code {
    cursor: ${props =>
      props.theme.mode === 'retro' &&
      "url('/static/images/retro/cursor/text.cur'), text"};
  }

  ::selection {
    color: ${props => props.theme.colors.altBackground};
    background-color: ${props => props.theme.colors.primary};
  }

  .emoji {
    display: ${props => (props.theme.mode === 'retro' ? 'none' : 'inline')};
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
