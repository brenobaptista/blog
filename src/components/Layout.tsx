import { ReactNode } from 'react'
import Link from 'next/link'

import Footer from '@/components/Footer'
import Sparkles from '@/components/Sparkles'
import ThemeSwitcher from '@/components/ThemeSwitcher'

import { Container, Toolbar } from '@/styles/components/Layout'
import RetroGlobalStyle from '@/styles/retro-global'

interface ILayout {
  children: ReactNode
}

const Layout = ({ children }: ILayout) => (
  <Container>
    <Toolbar>
      <Link href='/'>Breno Baptista</Link>
      <ThemeSwitcher />
    </Toolbar>
    <main>{children}</main>
    <Footer />
    <Sparkles />
    <RetroGlobalStyle />
  </Container>
)

export default Layout
