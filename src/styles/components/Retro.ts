import styled from 'styled-components'

export const Marquee = styled.div`
  overflow: hidden;
  position: relative;
  height: 24px;
  margin: 32px 0;

  @media screen and (max-width: 768px) {
    display: none;
  }

  p {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 24px;
    background-image: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transform: translateX(100%);
    animation: scroll-left 15s linear infinite;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

export const Construction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 32px;
`

export const Song = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
