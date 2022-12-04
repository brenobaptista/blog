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
    padding-left: 16px;
    border-left: 4px solid ${props => props.theme.colors.text};
  }

  code,
  pre {
    font-size: 0.8rem;
    font-family: Fira Code, monospace;
    background-color: ${props => props.theme.colors.altBackground};
  }

  pre {
    padding: 24px;
    border: ${props =>
      props.theme.mode === 'retro'
        ? `1px solid ${props.theme.colors.selector}`
        : 'none'};
    border-radius: 8px;
    overflow: auto;
  }

  code {
    padding: 4px 8px;
    border-radius: 4px;
    word-break: break-word;
  }

  pre > code {
    padding: 0;
  }

  li,
  li p {
    margin: 8px 0;
  }

  /* Custom theme for Prism.js based on Tomorrow theme */

  .token.function-name {
    color: #6196cc;
  }

  .token.punctuation {
    color: ${props => props.theme.colors.text};
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${props => (props.theme.mode === 'retro' ? 'gray' : `#ccc`)};
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: ${props => (props.theme.mode === 'retro' ? 'red' : `#ff9da4`)};
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: ${props => (props.theme.mode === 'retro' ? 'orange' : `#ffc58f`)};
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${props => (props.theme.mode === 'retro' ? 'orange' : `#f8c555`)};
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: ${props => (props.theme.mode === 'retro' ? 'blue' : `#ebbbff`)};
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: ${props => (props.theme.mode === 'retro' ? 'green' : `#7ec699`)};
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: ${props => (props.theme.mode === 'retro' ? 'cyan' : `#67cdcc`)};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.inserted {
    color: green;
  }

  /* Plugin line-numbers for Prism.js */

  pre[class*='language-'].line-numbers {
    position: relative;
    padding-left: 60px;
    counter-reset: linenumber;
  }

  pre[class*='language-'].line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    user-select: none;
    width: 48px;
    top: -2px;
    left: -60px;
    letter-spacing: -1px;
  }

  .line-numbers-rows > span {
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    display: block;
    padding-right: 12px;
    text-align: right;
    content: counter(linenumber);
    color: ${props => props.theme.colors.altText};
  }

  /* Plugin command-line for Prism.js */

  .command-line-prompt {
    float: left;
    pointer-events: none;
    user-select: none;
  }

  .command-line-prompt > span:before {
    display: block;
    padding-right: 24px;
    color: ${props => props.theme.colors.altText};
    content: '$';
  }
`

export const Separator = styled.hr`
  border: 0;
  height: 1px;
  margin-top: 24px;
  background-color: ${props => props.theme.colors.selector};
  background-image: ${props => {
    const { selector, selectorEdge } = props.theme.colors

    return `linear-gradient(to right, ${selectorEdge}, ${selector}, ${selectorEdge})`
  }};
`

export const ShortBio = styled.div`
  svg {
    float: left;
    margin: 8px;
  }

  p {
    text-align: justify;
  }
`

export const MorePosts = styled.div`
  display: flex;
  gap: 0 32px;
  margin: 32px 0 0;
  font-size: 0.8rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  div {
    flex: 1;
  }

  a {
    flex: 1;
    margin-bottom: 16px;
    padding: 16px;
    border: ${props =>
      props.theme.mode === 'retro'
        ? `1px solid ${props.theme.colors.selector}`
        : 'none'};
    border-radius: 8px;
    background-color: ${props => props.theme.colors.altBackground};

    span {
      display: block;
      color: ${props => props.theme.colors.text};
    }

    &:hover {
      text-decoration: none;
    }

    &:visited {
      color: ${props => props.theme.colors.visited};

      span {
        color: ${props => props.theme.colors.altText};
      }
    }

    &:first-child {
      text-align: right;

      @media screen and (max-width: 768px) {
        text-align: left;
      }
    }
  }
`
