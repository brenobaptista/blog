import styled from 'styled-components'

export const Container = styled.div`
  max-width: 768px;
  padding: 0 16px;
  margin: 48px auto 96px;

  a {
    color: ${props => props.theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }
`

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

export const Separator = styled.hr`
  border: 0;
  height: 1px;
  background: ${props => props.theme.colors.selector};
  background-image: ${props => {
    const { selector, selectorEdge } = props.theme.colors

    return `linear-gradient(to right, ${selectorEdge}, ${selector}, ${selectorEdge})`
  }};
`

export const ShortBio = styled.div`
  display: flex;

  img {
    flex: 1;
    margin-top: 28px;
    border-radius: 50%;
  }

  p {
    flex: 1;
    margin-left: 20px;
    font-style: italic;
    text-align: justify;
  }
`

export const BackToHome = styled.div`
  margin: 48px 0 0;
`
