import styled, { css } from 'styled-components'

const Body = styled.div`
  p {
    text-align: justify;
  }

  img {
    margin-left: auto;
    margin-right: auto;
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    padding-left: 20px;
    border-left: 5px solid ${props => props.theme.colors.text};
  }

  code,
  pre {
    font-size: 0.9rem;
    font-family: Fira Code, monospace;
    background-color: ${props => props.theme.colors.altBackground};
  }

  pre {
    padding: 25px 30px;
    border-radius: 8px;
    overflow: auto;

    ${props =>
      props.theme.mode === 'light'
        ? css`
            code {
              color: ${props.theme.colors.text};

              ::selection {
                color: black;
                background: transparent;
              }
            }

            span {
              filter: brightness(0.5) saturate(3);

              ::selection {
                color: black;
                background: transparent;
              }
            }
          `
        : null};
  }

  p > code {
    padding: 3px 5px;
    border-radius: 4px;
    word-break: break-word;
  }
`

export default Body
