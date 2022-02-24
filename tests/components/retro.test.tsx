import { render } from '../../testUtils'
import Retro from '../../src/components/Retro'
import ThemeContext from '../../src/contexts/ThemeContext'

const renderWithContext = (ui, value) =>
  render(<ThemeContext.Provider value={value}>{ui}</ThemeContext.Provider>)

test('matches snapshot', () => {
  const theme = { mode: 'retro' }
  const { asFragment } = renderWithContext(<Retro />, { theme })

  expect(asFragment()).toMatchSnapshot()
})
