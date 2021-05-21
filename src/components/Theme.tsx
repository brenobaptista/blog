import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import ThemeContext from '../contexts/ThemeContext'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

interface Props {
  children: React.ReactNode
}

const getTheme = () => {
  let theme

  if (typeof window !== 'undefined') {
    const storageValue = localStorage.getItem('theme')

    if (storageValue && JSON.parse(storageValue).mode === 'dark') {
      theme = dark
    } else if (storageValue && JSON.parse(storageValue).mode === 'light') {
      theme = light
    } else {
      theme = dark
    }
  }

  return theme
}

const Theme = ({ children }: Props): JSX.Element => {
  const initialTheme = getTheme()

  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme.mode === 'light' ? dark : light)
  }

  return (
    <>
      {theme && (
        <ThemeProvider theme={theme}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
          </ThemeContext.Provider>
        </ThemeProvider>
      )}
    </>
  )
}

export default Theme
