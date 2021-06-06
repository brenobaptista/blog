import styled from 'styled-components'

export const Container = styled.div`
  max-width: 768px;
  padding: 16px;
  margin: 32px auto;
  background-color: ${props => props.theme.colors.background};

  @media screen and (max-width: 768px) {
    margin: 16px 8px;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  a {
    position: relative;
    top: -8px;
    font-size: 1.4rem;
    font-weight: bold;
  }
`
