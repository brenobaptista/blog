import { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

import Theme from '../components/Theme'
import GlobalStyle from '../styles/global'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Theme>
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
    <GlobalStyle />
  </Theme>
)

export default MyApp
