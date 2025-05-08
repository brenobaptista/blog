import { render } from 'testUtils'
import RetroHomeSection from '@/components/RetroHomeSection'
import ThemeContext from '@/contexts/ThemeContext'

const renderWithContext = (ui, value) =>
  render(<ThemeContext.Provider value={value}>{ui}</ThemeContext.Provider>)

test('matches snapshot', () => {
  const theme = { mode: 'retro' }
  const { asFragment } = renderWithContext(<RetroHomeSection />, { theme })

  expect(asFragment()).toMatchSnapshot()
})
