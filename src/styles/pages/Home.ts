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
  width: 200px;
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

  input {
    padding: 8px 32px 8px 16px;
    font-size: 0.8rem;
    line-height: 1.5;
    vertical-align: middle;
    color: ${props => props.theme.colors.altText};
    background-color: ${props => props.theme.colors.altBackground};
    border-width: 0;
    border-radius: 4px;

    &::placeholder {
      color: ${props => props.theme.colors.altText};
    }
  }

  svg {
    position: relative;
    top: 2px;
    right: 30px;
    fill: none;
    stroke: ${props => props.theme.colors.altText};
  }

  a:hover {
    text-decoration: none;
  }

  div {
    margin: 32px 0 32px;
  }

  span {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  p {
    margin-top: 4px;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};

    &.not-found {
      color: ${props => props.theme.colors.altText};
    }
  }
`
