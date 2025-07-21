import styled from 'styled-components'

export const ThematicBreak = styled.hr<{ $margin?: string }>`
  margin: ${props => props.$margin};
  border: 0;
  height: 1px;
  background-color: ${props => props.theme.colors.selector};
  background-image: ${props => {
    const { selector, selectorEdge } = props.theme.colors

    return `linear-gradient(to right, ${selectorEdge}, ${selector}, ${selectorEdge})`
  }};
`
