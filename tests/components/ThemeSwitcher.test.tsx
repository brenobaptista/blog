import { render, fireEvent } from 'testUtils'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import ThemeContext from '@/contexts/ThemeContext'

const renderWithContext = (ui, value) =>
  render(<ThemeContext.Provider value={value}>{ui}</ThemeContext.Provider>)

test('toggles ThemeSwitcher using keyboard in retro mode', () => {
  const toggleTheme = jest.fn()
  const theme = { mode: 'retro' }
  const { getByTestId } = renderWithContext(<ThemeSwitcher />, {
    theme,
    toggleTheme
  })

  const checkbox = getByTestId('label-checkbox')
  fireEvent.keyDown(checkbox, { key: 'Enter', keyCode: 13 })
  fireEvent.keyDown(checkbox, { key: ' ', keyCode: 32 })
  expect(toggleTheme).toHaveBeenCalled()
})
