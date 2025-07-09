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

export const Blink = styled.div`
  animation: blink 1s steps(1, end) infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`

export const GIFs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 32px;
  height: 100px;

  img {
    height: 100%;
    object-fit: contain;
  }
`

export const Song = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Sheep = styled.div`
  img {
    visibility: hidden;
    position: fixed;
    transform: scaleX(-1);
    bottom: 0;
    animation: walk 30s linear infinite;
  }

  @keyframes walk {
    0% {
      left: 0;
      transform: scaleX(-1);
      visibility: visible;
    }
    49% {
      left: calc(100vw - 43px);
      transform: scaleX(-1);
    }
    50% {
      transform: scaleX(1);
    }
    99% {
      left: 0;
      transform: scaleX(1);
    }
    100% {
      left: 0;
      transform: scaleX(-1);
    }
  }
`
