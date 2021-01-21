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

  a:hover {
    text-decoration: none;
  }

  div {
    padding: 20px;
    background-color: ${props => props.theme.colors.altBackground};
    border-radius: 8px;
  }

  span {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  p {
    margin: 10px 0 0;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
  }
`
