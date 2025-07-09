import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  max-width: 256px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 40px 8px 16px;
  font-size: 0.8rem;
  font-family: inherit;
  line-height: 1.5;
  color: ${props => props.theme.colors.altText};
  background-color: ${props => props.theme.colors.altBackground};
  border: ${props =>
    props.theme.mode === 'retro'
      ? `1px solid ${props.theme.colors.selector}`
      : 'none'};
  border-radius: 4px;
  cursor: ${props =>
    props.theme.mode === 'retro' &&
    "url('/images/retro/cursor/text.cur'), text"};

  &::placeholder {
    color: ${props => props.theme.colors.altText};
  }
`

export const IconWrapper = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);

  svg {
    fill: none;
    stroke: ${props => props.theme.colors.altText};
  }
`
