import styled from 'styled-components'

export const Gratitude = styled.div``

export const Address = styled.div`
  h2 {
    text-align: center;
  }

  img {
    margin: 32px auto;
  }

  div {
    margin-bottom: 32px;
    padding: 16px;
    word-break: break-all;
    background-color: ${props => props.theme.colors.altBackground};
  }
`
