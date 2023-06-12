import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import ThemeProvider from '@/components/ThemeProvider'
import GlobalStyle from '@/styles/global'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
    <GlobalStyle />
  </ThemeProvider>
)

export default MyApp
