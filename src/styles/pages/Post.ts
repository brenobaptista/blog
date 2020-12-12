import styled from 'styled-components'

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
    border-left: 5px solid #2e3436;
  }

  code,
  pre {
    font-family: Fira Code, monospace;
    background-color: #dddcdb;
  }

  pre {
    padding: 25px 30px;
    border-radius: 8px;
    overflow: auto;
  }

  :not(pre) > code {
    padding: 3px 5px;
    border-radius: 4px;
    word-break: break-word;
  }
`

export default Body
