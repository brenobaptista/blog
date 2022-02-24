import { render } from '../testUtils'
import Custom404 from '../src/pages/404'
import ThemeContext from '../src/contexts/ThemeContext'

const renderWithContext = (ui, value) =>
  render(<ThemeContext.Provider value={value}>{ui}</ThemeContext.Provider>)

test('matches snapshot in dracula mode', () => {
  const theme = { mode: 'dracula' }
  const { asFragment } = renderWithContext(<Custom404 />, {
    theme
  })

  expect(asFragment()).toMatchSnapshot()
})
