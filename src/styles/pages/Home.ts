import styled from 'styled-components'

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Intro = styled.div`
  text-align: center;

  h1 {
    font-size: 2.2rem;
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

export const BlogHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: 40px 0;

  h2 {
    margin: 0;
  }
`

export const CardsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px 0;
`

export const Card = styled.div`
  a {
    font-size: 1.2rem;

    &:visited {
      color: ${props => props.theme.colors.visited};
    }
  }

  div {
    color: ${props => props.theme.colors.text};
  }

  small {
    font-size: 0.8rem;
  }
`
