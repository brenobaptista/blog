import { useState, useEffect, ReactNode } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import ThemeContext from '@/contexts/ThemeContext'
import { dracula, retro } from '@/styles/themes'

interface IThemeProvider {
  children: ReactNode
}

const Provider = ({ children }: IThemeProvider) => {
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
    localStorage.setItem('hasToggledTheme', 'true')
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
