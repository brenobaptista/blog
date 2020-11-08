import styled from 'styled-components'

export const Container = styled.div`
  max-width: 576px;
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

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 16px 0;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 16px 0;
  }
`

export const BackToHome = styled.div`
  margin: 48px 0 0;
`
