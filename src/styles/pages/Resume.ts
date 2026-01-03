import styled, { createGlobalStyle } from 'styled-components'

export const PrintingRules = createGlobalStyle`
  @page {
    margin: 0;
    size: A4 portrait;
  }
`

export const Page = styled.div`
  color: #000000;
  background: #ffffff;
  width: 210mm;
  height: 297mm;
  padding: 20mm 18mm;

  @media screen {
    margin: 4mm auto;
  }
`

export const Content = styled.div`
  line-height: normal;
  font-size: 0.7rem;

  a {
    color: #000000;
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Header = styled.header`
  display: flex;
  gap: 32px;
`

export const Author = styled.div`
  flex: 1;

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
  }

  div {
    font-size: 0.7rem;
  }
`

export const Social = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 4px 0;
  }
`

export const Section = styled.div`
  h2 {
    font-size: 0.8rem;
    margin: 24px 0 8px;
  }

  .mt-0 {
    margin-top: 0;
  }

  strong,
  em {
    display: block;
  }

  ul,
  ol {
    margin: 8px 0 24px;
    padding-left: 32px;
  }

  li {
    padding-bottom: 8px;

    ul {
      margin: 8px 0 0;
    }
  }

  div {
    margin-bottom: 16px;
  }

  span {
    display: block;
    margin-bottom: 8px;
  }
`
