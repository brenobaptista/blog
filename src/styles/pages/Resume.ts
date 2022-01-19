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
  padding: 25mm;

  @media screen {
    margin: 5mm auto;
  }
`

export const Content = styled.div`
  line-height: normal;
  font-size: 0.8em;
  text-align: justify;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const Author = styled.div`
  flex: 1;

  h1 {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0;
  }

  div {
    font-size: 1rem;
  }
`

export const Social = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 4px 0;
    color: #000000;
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Section = styled.div`
  h2 {
    font-size: 0.9rem;
    margin: 16px 0;
  }

  b,
  i {
    display: block;
  }

  div {
    margin-bottom: 16px;
  }
`
