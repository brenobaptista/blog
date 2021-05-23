import styled from 'styled-components'

export const Container = styled.div`
  max-width: 768px;
  padding: 0 16px;
  margin: 48px auto;

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
    font-size: 1.5rem;
    font-weight: bold;
  }
`
