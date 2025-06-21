import { useState, useEffect, useContext } from 'react'

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
  const [startAnnoyingAnimation, setStartAnnoyingAnimation] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const hasToggledTheme = localStorage.getItem('hasToggledTheme')
      if (hasToggledTheme) {
        clearInterval(interval)
        return
      }

      setStartAnnoyingAnimation(true)
      setTimeout(() => setStartAnnoyingAnimation(false), 1500)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const handleKeyPress = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key !== ' ') return

    event.preventDefault()
    toggleTheme()
  }

  return (
    <Wrapper>
      <Label htmlFor='checkbox'>Retro mode</Label>
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
        aria-label='Change the visual styles'
        startAnnoyingAnimation={startAnnoyingAnimation}
      >
        <Toggle startAnnoyingAnimation={startAnnoyingAnimation} />
      </Background>
    </Wrapper>
  )
}

export default ThemeSwitcher
