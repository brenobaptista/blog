import styled from 'styled-components'

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PortraitWrapper = styled.div`
  height: 128px;
  margin-bottom: 32px;
  border-radius: 50%;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${props =>
    props.theme.mode === 'retro'
      ? `
      animation: aura 4s infinite;
    `
      : `
      background-color: ${props.theme.colors.altBackground};
      animation: eclipse 4s infinite;
    `};

  @keyframes aura {
    0%,
    100% {
      transform: translate(0);
      filter: drop-shadow(0 3px 6px orange);
    }

    50% {
      transform: scale(1.2) translate(0, -8px);
      filter: drop-shadow(0 4px 8px orange);
    }
  }

  @keyframes eclipse {
    0%,
    100% {
      filter: drop-shadow(0 0 10px #bd93f9);
    }

    50% {
      filter: drop-shadow(0 0 5px #bd93f9);
    }
  }
`

export const SocialIcons = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;

  svg {
    stroke: ${props => props.theme.colors.primary};

    &:hover {
      stroke: ${props => props.theme.colors.visited};
    }
  }

  a {
    line-height: 0;
  }
`

export const Intro = styled.section`
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: justify;
  text-indent: 1.5rem;
`

export const Blog = styled.section`
  font-size: 1.1rem;
  line-height: 1.5;

  a {
    &:hover {
      text-decoration: none;
    }

    &:visited {
      color: ${props => props.theme.colors.visited};

      p {
        color: ${props => props.theme.colors.altText};
      }
    }
  }
`

export const Card = styled.div`
  margin: 32px 0;

  div {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    span:hover {
      text-decoration: underline;
    }

    small {
      font-size: 0.75rem;
      line-height: 32px;
    }
  }

  p {
    margin-top: 4px;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.text};

    &.not-found {
      color: ${props => props.theme.colors.altText};
    }
  }
`
