import styled from 'styled-components'

export const Container = styled.div`
  max-width: 768px;
  padding: 16px;
  margin: 16px auto;
  background-color: ${props => props.theme.colors.background};
  border: ${props =>
    props.theme.mode === 'retro'
      ? `1px solid ${props.theme.colors.selector}`
      : 'none'};
  border-radius: 8px;
  font-family: ${props => props.theme.mode === 'retro' && 'monospace'};

  @media screen and (max-width: 768px) {
    margin: 8px;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 16px;
  align-items: center;
  margin-bottom: 32px;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 8px;
  border-radius: 0 0 8px 8px;
  background-color: ${props => {
    const transparency = props.theme.mode === 'dracula' ? 'aa' : ''
    return `${props.theme.colors.background}${transparency}`
  }};
  backdrop-filter: blur(4px);

  a {
    font-size: 1.4rem;
    font-weight: bold;
  }
`
