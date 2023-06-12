import { useState, useEffect } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import ThemeContext from '@/contexts/ThemeContext'
import dracula from '@/styles/themes/dracula'
import retro from '@/styles/themes/retro'

interface Props {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => {
  const [theme, setTheme] = useState<DefaultTheme>(dracula)

  useEffect(() => {
    const storageValue = localStorage.getItem('theme')

    if (storageValue && JSON.parse(storageValue).mode === 'retro') {
      setTheme(retro)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
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

export default Provider
