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

  // Tomorrow theme for Prism.js

  code[class*='language-'],
  pre[class*='language-'] {
    color: #ccc;
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
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
  display: flex;

  img {
    flex: 1;
    margin-top: 28px;
    border-radius: 50%;
  }

  p {
    flex: 1;
    margin-left: 20px;
    font-style: italic;
    text-align: justify;
  }
`

export const BackToHome = styled.div`
  margin: 32px 0 0;
`
