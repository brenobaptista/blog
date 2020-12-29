import { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ThemeContextProvider } from '../context/theme-context'

import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.mode === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContextProvider toggleTheme={toggleTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
