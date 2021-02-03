import styled from 'styled-components'

const Container = styled.div`
  max-width: 768px;
  padding: 0 16px;
  margin: 48px auto 96px;

  a {
    color: ${props => props.theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export default Container
