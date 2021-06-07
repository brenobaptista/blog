import styled from 'styled-components'

export const Marquee = styled.div`
  overflow: hidden;
  position: relative;
  height: 25px;
  margin: 30px 0;

  @media screen and (max-width: 768px) {
    display: none;
  }

  p {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 25px;
    color: red;
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
  margin-bottom: 30px;
`

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
