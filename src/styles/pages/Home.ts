import styled from 'styled-components'

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
  }
`

export const SocialIcons = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;

  svg {
    fill: ${props => props.theme.colors.primary};
  }

  a {
    line-height: 0;
  }
`

export const Intro = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
  text-indent: 1.5rem;
`

export const Blog = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding-top: 1px;

  a:hover {
    text-decoration: none;
  }

  div {
    margin: 16px 0 24px;
  }

  span {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  p {
    margin: 10px 0 0;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
  }
`
