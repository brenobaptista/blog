/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
import React from 'react'

export const ThemeContext = React.createContext(() => {})

interface Props {
  children: React.ReactNode
  toggleTheme: () => void
}

export const ThemeContextProvider = (props: Props): JSX.Element => {
  const { children, toggleTheme } = props

  return (
    <ThemeContext.Provider value={toggleTheme}>
      {children}
    </ThemeContext.Provider>
  )
}
