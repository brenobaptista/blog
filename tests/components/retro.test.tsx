import { render } from 'testUtils'
import Retro from '@/components/Retro'
import ThemeContext from '@/contexts/ThemeContext'

const renderWithContext = (ui, value) =>
  render(<ThemeContext.Provider value={value}>{ui}</ThemeContext.Provider>)

test('matches snapshot', () => {
  const theme = { mode: 'retro' }
  const { asFragment } = renderWithContext(<Retro />, { theme })

  expect(asFragment()).toMatchSnapshot()
})
