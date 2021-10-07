import { createContext } from 'react'
import { DefaultTheme } from 'styled-components'

interface Context {
  theme: DefaultTheme
  toggleTheme: () => void
}

const ThemeContext = createContext<Context>(null)

export default ThemeContext
