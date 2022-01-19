import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: ${props => props.theme.mode === 'retro' && '1.05em !important'};
    background-image: ${props =>
      props.theme.mode === 'retro' && 'url(/images/retro/space.gif)'};
    cursor: ${props =>
      props.theme.mode === 'retro' &&
      "url('/images/retro/cursor/default.cur'), default"};
  }

  a {
    cursor: ${props =>
      props.theme.mode === 'retro' &&
      "url('/images/retro/cursor/pointer.cur'), pointer"};
  }

  h1,
  h2,
  h3 {
    ${props =>
      props.theme.mode === 'retro' &&
      `
      margin-left: 8px;
      letter-spacing: 0.0625rem;
      text-shadow:
        -1px 1px violet,
        -2px 2px indigo,
        -3px 3px blue,
        -4px 4px green,
        -5px 5px yellow,
        -6px 6px orange,
        -7px 7px red;
    `}
  }

  h1,
  h2,
  h3,
  p,
  code {
    cursor: ${props =>
      props.theme.mode === 'retro' &&
      "url('/images/retro/cursor/text.cur'), text"};
  }
`
