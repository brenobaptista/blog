import { useContext } from 'react'

import ThemeContext from '@/contexts/ThemeContext'
import {
  Wrapper,
  Label,
  InvisibleCheckbox,
  Background,
  Toggle
} from '@/styles/components/ThemeSwitcher'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key !== ' ') return

    event.preventDefault()
    toggleTheme()
  }

  return (
    <Wrapper>
      <Label>Retro mode</Label>
      <InvisibleCheckbox
        id='checkbox'
        type='checkbox'
        checked={theme.mode === 'retro'}
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
    </Wrapper>
  )
}

export default ThemeSwitcher
