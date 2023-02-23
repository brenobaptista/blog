import { render } from 'testUtils'
import Layout from '@/components/Layout'
import ThemeContext from '@/contexts/ThemeContext'

const renderWithContext = (ui, value) =>
  render(<ThemeContext.Provider value={value}>{ui}</ThemeContext.Provider>)

test('matches snapshot in dracula mode', () => {
  const toggleTheme = jest.fn()
  const theme = { mode: 'dracula' }
  const { asFragment } = renderWithContext(
    <Layout>
      <></>
    </Layout>,
    { theme, toggleTheme }
  )

  expect(asFragment()).toMatchSnapshot()
})

test('matches snapshot in retro mode for home', () => {
  const toggleTheme = jest.fn()
  const theme = { mode: 'retro' }
  const { asFragment } = renderWithContext(
    <Layout home>
      <></>
    </Layout>,
    { theme, toggleTheme }
  )

  expect(asFragment()).toMatchSnapshot()
})
