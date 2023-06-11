import { useState, useEffect, useRef } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import ThemeContext from '@/contexts/ThemeContext'
import dracula from '@/styles/themes/dracula'
import retro from '@/styles/themes/retro'

interface Props {
  children: React.ReactNode
}

const Theme = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<DefaultTheme>(dracula)

  const didMountRef = useRef<boolean>(false)

  useEffect(() => {
    const storageValue = localStorage.getItem('theme')

    if (storageValue && JSON.parse(storageValue).mode === 'retro') {
      setTheme(retro)
    }
  }, [])

  useEffect(() => {
    if (didMountRef.current) {
      localStorage.setItem('theme', JSON.stringify(theme))
    } else {
      didMountRef.current = true
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme.mode === 'retro' ? dracula : retro)
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default Theme
