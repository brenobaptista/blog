import { render } from '../testUtils'
import Layout from '../src/components/Layout'
import ThemeContext from '../src/contexts/ThemeContext'

const renderWithContext = (ui, value) =>
  render(<ThemeContext.Provider value={value}>{ui}</ThemeContext.Provider>)

test('matches snapshot in dark mode', () => {
  const toggleTheme = jest.fn()
  const theme = { mode: 'dark' }
  const { asFragment } = renderWithContext(
    <Layout>
      <></>
    </Layout>,
    { theme, toggleTheme }
  )

  expect(asFragment()).toMatchSnapshot()
})
