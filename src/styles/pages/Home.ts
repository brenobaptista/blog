import styled from 'styled-components'

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Intro = styled.div`
  text-align: center;

  h1 {
    font-size: 2.4rem;
  }

  p {
    max-width: 450px;
  }
`

export const SocialIcons = styled.div`
  width: 160px;
  padding: 16px 0;
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

export const Blog = styled.section`
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

export const BlogHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0 16px;
`

export const Card = styled.div`
  margin: 40px 0;

  div {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    span {
      font-size: 1.1rem;

      &:hover {
        text-decoration: underline;
      }
    }

    small {
      font-size: 0.75rem;
      line-height: 36px;
    }
  }

  p {
    margin-top: 8px;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.text};

    &.not-found {
      color: ${props => props.theme.colors.altText};
    }
  }
`
