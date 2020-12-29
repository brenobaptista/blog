import { createContext } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import usePersistedState from '../utils/usePersistedState'

import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

export const ThemeContext = createContext(null)

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.mode === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={toggleTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
