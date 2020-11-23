import { render } from '@testing-library/react'
import { RenderResult } from '@testing-library/react/types'
import { ThemeProvider } from 'styled-components'

import theme from './src/styles/theme'

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const customRender = (ui: React.ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
