import { ThemeProvider, DefaultTheme } from 'styled-components'

import ThemeContext from '../contexts/ThemeContext'
import usePersistedState from '../hooks/usePersistedState'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

interface Props {
  children: React.ReactNode
}

const Theme = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.mode === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={toggleTheme}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default Theme
