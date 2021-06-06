import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import ThemeContext from '../contexts/ThemeContext'
import dracula from '../styles/themes/dracula'
import retro from '../styles/themes/retro'

interface Props {
  children: React.ReactNode
}

const getTheme = () => {
  let theme

  if (typeof window !== 'undefined') {
    const storageValue = localStorage.getItem('theme')

    if (storageValue && JSON.parse(storageValue).mode === 'dracula') {
      theme = dracula
    } else if (storageValue && JSON.parse(storageValue).mode === 'retro') {
      theme = retro
    } else {
      theme = dracula
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
    setTheme(theme.mode === 'retro' ? dracula : retro)
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
