import { render } from '@testing-library/react'
import { RenderResult } from '@testing-library/react/types'
import { ThemeProvider } from 'styled-components'

import retro from '@/styles/themes/retro'

const Providers = ({ children }) => (
  <ThemeProvider theme={retro}>{children}</ThemeProvider>
)

const customRender = (ui: React.ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
