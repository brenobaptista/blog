import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='alternate'
            type='application/rss+xml'
            title='RSS feed for blog posts'
            href='https://www.brenobaptista.com/rss.xml'
          />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='theme-color' content='#bd93f9' />
          <meta
            property='og:image'
            content='https://www.brenobaptista.com/og-image.png'
          />
          <meta
            name='google-site-verification'
            content='_cd7mw2YWYlX1KdSTwEDVxDz2n5eWnW87t8mo4WdKF8'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
