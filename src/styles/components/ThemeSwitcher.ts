import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`

export const Label = styled.label`
  font-size: 0.6rem;
  font-weight: 500;
`

export const InvisibleCheckbox = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  visibility: hidden;
`

export const Background = styled.label<{ startAnnoyingAnimation: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: ${props =>
    props.theme.mode === 'retro'
      ? "url('/images/retro/cursor/pointer.cur'), pointer"
      : 'pointer'};
  border-radius: 56px;
  width: 56px;
  height: 28px;
  background-color: ${props => props.theme.colors.visited};
  animation: ${props =>
    props.startAnnoyingAnimation && `annoyingBackground 1.5s ease-in-out`};

  @keyframes annoyingBackground {
    45%,
    55% {
      background-color: darkorange;
      transform: scale(1.1);
      filter: drop-shadow(0 0 5px darkorange);
    }
  }
`

export const Toggle = styled.span<{ startAnnoyingAnimation: boolean }>`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 24px;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.colors.background};
  transition: 0.2s all ease-in-out;
  animation: ${props =>
    props.startAnnoyingAnimation && `annoyingToggle 1.5s ease-in-out`};

  @keyframes annoyingToggle {
    45%,
    55% {
      background-color: black;
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }

  ${InvisibleCheckbox}:checked + ${Background} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`
