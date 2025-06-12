import styled from 'styled-components'

export const Separator = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${props => props.theme.colors.selector};
  background-image: ${props => {
    const { selector, selectorEdge } = props.theme.colors

    return `linear-gradient(to right, ${selectorEdge}, ${selector}, ${selectorEdge})`
  }};
`

export const Webring = styled.div`
  margin: 24px 0;
  font-size: 0.9rem;
  text-align: center;

  a {
    margin: 0 8px;
  }
`

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 8px 0 16px;
`

export const Copyright = styled.div`
  text-align: center;
  font-size: 0.8rem;
`
