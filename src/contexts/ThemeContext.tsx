import { createContext } from 'react'
import { DefaultTheme } from 'styled-components'

import dracula from '@/styles/themes/dracula'

interface IThemeContext {
  theme: DefaultTheme
  toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({
  theme: dracula,
  toggleTheme: () => null
})

export default ThemeContext
