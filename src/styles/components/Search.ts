import styled from 'styled-components'

export const Input = styled.input`
  width: 256px;
  padding: 8px 32px 8px 16px;
  font-size: 0.8rem;
  font-family: inherit;
  line-height: 1.5;
  vertical-align: middle;
  color: ${props => props.theme.colors.altText};
  background-color: ${props => props.theme.colors.altBackground};
  border: ${props =>
    props.theme.mode === 'retro'
      ? `1px solid ${props.theme.colors.altText}`
      : 'none'};
  border-radius: 4px;
  cursor: ${props =>
    props.theme.mode === 'retro' &&
    "url('/static/images/retro/cursor/text.cur'), text"};

  &::placeholder {
    color: ${props => props.theme.colors.altText};
  }
`

export const IconWrapper = styled.span`
  svg {
    position: relative;
    top: 2px;
    right: 30px;
    fill: none;
    stroke: ${props => props.theme.colors.altText};
  }
`
