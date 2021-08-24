import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 360px) {
    flex-direction: column;
    text-align: center;
  }

  a {
    margin: 16px;
    border-radius: 4px;
  }
`

export const Separator = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${props => props.theme.colors.selector};
  background-image: ${props => {
    const { selector, selectorEdge } = props.theme.colors

    return `linear-gradient(to right, ${selectorEdge}, ${selector}, ${selectorEdge})`
  }};
`

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px 0;
`

export const Copyright = styled.div`
  text-align: center;
  font-size: 0.8rem;
`
