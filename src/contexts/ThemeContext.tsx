import { createContext } from 'react'
import { DefaultTheme } from 'styled-components'

import dracula from '@/styles/themes/dracula'

interface Context {
  theme: DefaultTheme
  toggleTheme: () => void
}

const ThemeContext = createContext<Context>({
  theme: dracula,
  toggleTheme: () => null
})

export default ThemeContext
