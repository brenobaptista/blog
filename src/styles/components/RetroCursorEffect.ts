import styled from 'styled-components'

export const SparkleWrapper = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${props => props.$x}px;
  top: ${props => props.$y}px;
  pointer-events: none;
  z-index: 999;
`

export const Star = styled.div<{ $size: 'large' | 'small' }>`
  width: 5px;
  height: 5px;
  position: relative;
  clip-path: ${props =>
    props.$size === 'large'
      ? 'inset(0px calc(100% - 5px) calc(100% - 5px) 0px)'
      : 'inset(1px calc(100% - 4px) calc(100% - 4px) 1px)'};
`

export const StarHorizontal = styled.div<{ $color: string }>`
  position: absolute;
  top: 2px;
  left: 0px;
  width: 5px;
  height: 1px;
  background-color: ${props => props.$color};
`

export const StarVertical = styled.div<{ $color: string }>`
  position: absolute;
  top: 0px;
  left: 2px;
  width: 1px;
  height: 5px;
  background-color: ${props => props.$color};
`

export const Tiny = styled.div<{ $color: string; $size: 'small' | 'large' }>`
  width: ${props => (props.$size === 'small' ? '1px' : '2px')};
  height: ${props => (props.$size === 'small' ? '1px' : '2px')};
  background-color: ${props => props.$color};
`
