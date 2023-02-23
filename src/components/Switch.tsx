import { useContext } from 'react'

import ThemeContext from '@/contexts/ThemeContext'
import {
  InvisibleCheckbox,
  Background,
  Toggle
} from '@/styles/components/Switch'

const Switch = (): JSX.Element => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key !== ' ') return

    event.preventDefault()
    toggleTheme()
  }

  return (
    <>
      <InvisibleCheckbox
        id='checkbox'
        type='checkbox'
        checked={theme.mode === 'dracula'}
        onChange={toggleTheme}
      />
      <Background
        htmlFor='checkbox'
        tabIndex={0}
        onKeyDown={event => handleKeyPress(event)}
        data-testid='label-checkbox'
        aria-label='Change the visual styles'
      >
        <Toggle />
      </Background>
    </>
  )
}

export default Switch
