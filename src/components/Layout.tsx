import Switch from './Switch'

import Container from '../styles/components/Layout'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <Container>
    <Switch />
    <main>{children}</main>
  </Container>
)

export default Layout
