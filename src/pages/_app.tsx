import { AppProps } from 'next/app'

import Theme from '../components/Theme'
import GlobalStyle from '../styles/global'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Theme>
    <Component {...pageProps} />
    <GlobalStyle />
  </Theme>
)

export default MyApp
