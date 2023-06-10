import Link from 'next/link'

import Footer from '@/components/Footer'
import Sparkles from '@/components/Sparkles'
import Switch from '@/components/Switch'

import { Container, Toolbar } from '@/styles/components/Layout'
import RetroGlobalStyle from '@/styles/retro-global'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <Container>
    <Toolbar>
      <Link href='/'>Breno Baptista</Link>
      <Switch />
    </Toolbar>
    <main>{children}</main>
    <Footer />
    <Sparkles />
    <RetroGlobalStyle />
  </Container>
)

export default Layout
