import styled from 'styled-components'

export const Container = styled.div`
  max-width: 768px;
  padding: 0 16px;
  margin: 48px auto 96px;

  a {
    color: ${props => props.theme.colors.primary};
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
  }

  a {
    color: inherit;
  }
`

export const BackToHome = styled.div`
  margin: 48px 0 0;
`
