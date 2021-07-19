import Link from 'next/link'

import Footer from './Footer'
import Sparkles from './Sparkles'
import Switch from './Switch'

import { Container, Toolbar } from '../styles/components/Layout'

interface Props {
  children: React.ReactNode
  home?: boolean
}

const Layout = ({ children, home = false }: Props): JSX.Element => (
  <Container>
    <Toolbar>
      {home ? (
        <div />
      ) : (
        <Link href='/'>
          <a>Breno Baptista</a>
        </Link>
      )}
      <Switch />
    </Toolbar>
    <main>{children}</main>
    <Footer />
    <Sparkles />
  </Container>
)

export default Layout
