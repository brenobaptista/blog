import styled from 'styled-components'

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileWrapper = styled.div`
  margin-bottom: 32px;
  overflow: hidden;
  transition: 0.2s all ease-in-out;

  ${props =>
    props.theme.mode === 'retro'
      ? `
      animation: aura 4s infinite;
      border-radius: 0%;
    `
      : `
      animation: eclipse 4s infinite;
      border-radius: 50%;
    `};

  @keyframes aura {
    0%,
    100% {
      transform: translate(0);
      filter: drop-shadow(0 3px 6px orange);
    }

    50% {
      transform: translate(0, -8px);
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
  width: 200px;
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
