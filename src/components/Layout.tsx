import Link from 'next/link'

import Footer from '@/components/Footer'
import Sparkles from '@/components/Sparkles'
import Switch from '@/components/Switch'

import { Container, Toolbar } from '@/styles/components/Layout'
import RetroGlobalStyle from '@/styles/retro-global'

interface Props {
  children: React.ReactNode
  home?: boolean
}

const Layout = ({ children, home = false }: Props): JSX.Element => (
  <Container>
    <Toolbar>
      {home ? <div /> : <Link href='/'>Breno Baptista</Link>}
      <Switch />
    </Toolbar>
    <main>{children}</main>
    <Footer />
    <Sparkles />
    <RetroGlobalStyle />
  </Container>
)

export default Layout
