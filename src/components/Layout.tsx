import { useState, useEffect, useContext } from 'react'

import Switch from './Switch'
import ThemeContext from '../contexts/ThemeContext'
import Container from '../styles/components/Layout'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  const [switchValue, setSwitchValue] = useState(true)

  useEffect(() => {
    const storageValue = localStorage.getItem('theme')

    if (storageValue && JSON.parse(storageValue).mode === 'dark') {
      setSwitchValue(true)
    } else if (storageValue && JSON.parse(storageValue).mode === 'light') {
      setSwitchValue(false)
    }
  }, [])

  const toggleTheme = useContext(ThemeContext)

  return (
    <Container>
      <Switch
        switchValue={switchValue}
        toggleSwitch={() => {
          setSwitchValue(!switchValue)
          toggleTheme()
        }}
      />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
