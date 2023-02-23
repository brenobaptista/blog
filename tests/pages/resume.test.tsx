import { render } from 'testUtils'
import Resume from '@/pages/resume'
import ThemeContext from '@/contexts/ThemeContext'

const renderWithContext = (ui, value) =>
  render(<ThemeContext.Provider value={value}>{ui}</ThemeContext.Provider>)

test('matches snapshot in dracula mode', () => {
  const theme = { mode: 'dracula' }
  const { asFragment } = renderWithContext(<Resume />, {
    theme
  })

  expect(asFragment()).toMatchSnapshot()
})
