import { ReactNode } from 'react'
import Link from 'next/link'

import Footer from '@/components/Footer'
import RetroBrowserTab from '@/components/RetroBrowserTab'
import RetroCursorEffect from '@/components/RetroCursorEffect'
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
    <RetroBrowserTab />
    <RetroCursorEffect />
    <RetroGlobalStyle />
  </Container>
)

export default Layout
