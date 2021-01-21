import styled from 'styled-components'

export const Intro = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
  text-indent: 1.5rem;
`

export const Blog = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding-top: 1px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0 0 20px;
    padding: 20px;
    background-color: ${props => props.theme.colors.codeBackground};
    border-radius: 8px;
  }

  div {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  a:hover {
    text-decoration: none;
  }

  p {
    margin: 10px 0 0;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
  }
`
