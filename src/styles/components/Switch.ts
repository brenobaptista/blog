import styled from 'styled-components'

export const InvisibleCheckbox = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  visibility: hidden;
`

export const Background = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: ${props =>
    props.theme.mode === 'retro'
      ? "url('/static/images/retro/cursor/pointer.cur'), pointer"
      : 'pointer'};
  border-radius: 65px;
  width: 65px;
  height: 28px;
  background: ${props => props.theme.colors.primary};
`

export const Toggle = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 24px;
  width: 24px;
  height: 24px;
  background: ${props => props.theme.colors.background};
  transition: 0.2s;

  ${InvisibleCheckbox}:checked + ${Background} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`
