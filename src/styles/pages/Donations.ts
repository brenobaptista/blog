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
    padding: 8px 16px;
    word-break: break-all;
    font-size: 0.8rem;
    background-color: ${props => props.theme.colors.altBackground};
  }
`
