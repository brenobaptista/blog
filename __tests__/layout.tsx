import { render, fireEvent } from '../testUtils'
import Layout from '../src/components/Layout'
import ThemeContext from '../src/contexts/ThemeContext'

const renderWithContext = (ui, value) =>
  render(<ThemeContext.Provider value={value}>{ui}</ThemeContext.Provider>)

test('matches snapshot', () => {
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

test('toggles Switch in dark mode', () => {
  Storage.prototype.getItem = jest.fn(
    () =>
      '{"mode":"dark","colors":{"primary":"#bd93f9","text":"#eaeaea","altText":"#bababa","background":"#282a36","altBackground":" #44475a","selector":"#cccccc","selectorEdge":"#333333"}}'
  )
  const toggleTheme = jest.fn()
  const theme = { mode: 'dark' }
  const { getByTestId } = renderWithContext(
    <Layout>
      <></>
    </Layout>,
    { theme, toggleTheme }
  )

  const checkbox = getByTestId('label-checkbox')
  fireEvent.click(checkbox)
  expect(toggleTheme).toHaveBeenCalled()
})

test('toggles Switch in light mode', () => {
  Storage.prototype.getItem = jest.fn(
    () =>
      '{"mode":"light","colors":{"primary":"#586693","text":"#2e3436","altText":"#565656","background":"#f6f5f4","altBackground":" #e4e3e2","selector":"#333333","selectorEdge":"#cccccc"}}'
  )
  const toggleTheme = jest.fn()
  const theme = { mode: 'light' }
  const { getByTestId } = renderWithContext(
    <Layout>
      <></>
    </Layout>,
    { theme, toggleTheme }
  )

  const checkbox = getByTestId('label-checkbox')
  fireEvent.click(checkbox)
  expect(toggleTheme).toHaveBeenCalled()
})
