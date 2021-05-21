import { useContext } from 'react'

import Switch from './Switch'
import ThemeContext from '../contexts/ThemeContext'
import Container from '../styles/components/Layout'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Container>
      <Switch switchValue={theme.mode === 'dark'} toggleSwitch={toggleTheme} />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
