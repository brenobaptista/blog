import styled from 'styled-components'

const Article = styled.article`
  h1 {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 16px 0;
  }

  time {
    color: ${props => props.theme.colors.date};
  }
`

export default Article
