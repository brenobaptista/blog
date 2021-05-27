import styled from 'styled-components'

export const Body = styled.div`
  p,
  li {
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
  }

  p > code {
    padding: 3px 5px;
    border-radius: 4px;
    word-break: break-word;
  }

  /* Custom theme for Prism.js based on Tomorrow theme */

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${props => (props.theme.mode === 'dark' ? `#ccc` : `#5a5c5a`)};
  }

  .token.punctuation {
    color: ${props => props.theme.colors.text};
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: ${props => (props.theme.mode === 'dark' ? `#ff9da4` : `#781818`)};
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: ${props => (props.theme.mode === 'dark' ? `#ffc58f` : `#5d4900`)};
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${props => (props.theme.mode === 'dark' ? `#f8c555` : `#5d4900`)};
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: ${props => (props.theme.mode === 'dark' ? `#ebbbff` : `#274368`)};
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: ${props => (props.theme.mode === 'dark' ? `#7ec699` : `#005800`)};
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: ${props => (props.theme.mode === 'dark' ? `#67cdcc` : `#285151`)};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }

  /* Plugin line-numbers for Prism.js */

  pre[class*='language-'].line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre[class*='language-'].line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: -2px;
    font-size: 100%;
    left: -3.8em;
    width: 3em;
    letter-spacing: -1px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: ${props => props.theme.colors.altText};
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }

  /* Plugin command-line for Prism.js */

  .command-line-prompt {
    display: block;
    float: left;
    font-size: 100%;
    letter-spacing: -1px;
    pointer-events: none;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .command-line-prompt > span:before {
    color: ${props => props.theme.colors.altText};
    content: '$';
    display: block;
    padding-right: 1.5em;
  }
`

export const Separator = styled.hr`
  border: 0;
  height: 1px;
  margin-top: 26px;
  background: ${props => props.theme.colors.selector};
  background-image: ${props => {
    const { selector, selectorEdge } = props.theme.colors

    return `linear-gradient(to right, ${selectorEdge}, ${selector}, ${selectorEdge})`
  }};
`

export const ShortBio = styled.div`
  svg {
    float: left;
    margin-top: 5px;
    margin-right: 5px;
  }

  p {
    margin-left: 10px;
    text-align: justify;
  }
`

export const MorePosts = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0 0;
  font-size: 0.9rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  a,
  div {
    flex: 1;
  }

  a {
    margin-bottom: 16px;
    padding: 10px 12px;
    border-radius: 8px;
    background: ${props => props.theme.colors.altBackground};

    &:hover {
      text-decoration: none;
    }

    &:visited {
      color: ${props => props.theme.colors.visited};

      span {
        color: ${props => props.theme.colors.altText};
      }
    }
  }

  span {
    display: block;
    color: ${props => props.theme.colors.text};
    font-size: 0.8rem;
  }

  .left {
    text-align: right;
    margin-right: 16px;

    @media screen and (max-width: 768px) {
      text-align: left;
      margin-right: 0;
      margin-bottom: 16px;
    }
  }

  .right {
    margin-left: 16px;

    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
  }
`
