import styled from 'styled-components'

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PortraitWrapper = styled.div`
  height: 128px;
  background-color: ${props => props.theme.colors.altBackground};
  border-radius: 50%;
`

export const SocialIcons = styled.div`
  width: 225px;
  display: flex;
  justify-content: space-between;

  svg {
    fill: ${props => props.theme.colors.primary};

    &:hover {
      fill: ${props => props.theme.colors.visited};
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
  margin: 32px 0 32px;

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
      line-height: 33px;
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
