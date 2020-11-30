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
`

export const Separator = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
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
  }
`

export const BackToHome = styled.div`
  margin: 48px 0 0;
`
