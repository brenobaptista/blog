import { useEffect } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import ThemeContext from '../contexts/ThemeContext'
import usePersistedState from '../hooks/usePersistedState'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

interface Props {
  children: React.ReactNode
}

const getDefaultTheme = () => {
  let defaultTheme

  useEffect(() => {
    const storageValue = localStorage.getItem('theme')

    if (storageValue && JSON.parse(storageValue).mode === 'dark') {
      defaultTheme = dark
    } else if (storageValue && JSON.parse(storageValue).mode === 'light') {
      defaultTheme = light
    } else {
      defaultTheme = dark
    }
  }, [])

  return defaultTheme
}

const Theme = ({ children }: Props): JSX.Element => {
  const defaultTheme = getDefaultTheme()

  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    defaultTheme
  )

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
