import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export const siteTitle = 'Breno Baptista'

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

  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/static/favicons/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/static/favicons/safari-pinned-tab.svg'
            color='#282a36'
          />
          <link rel='shortcut icon' href='/static/favicons/favicon.ico' />
          <meta name='apple-mobile-web-app-title' content='Breno Baptista' />
          <meta name='application-name' content='Breno Baptista' />
          <meta name='msapplication-TileColor' content='#282a36' />
          <meta
            name='msapplication-config'
            content='/static/favicons/browserconfig.xml'
          />
          <meta name='theme-color' content='#282a36' />
          <link
            rel='alternate'
            type='application/rss+xml'
            title='RSS feed for blog posts'
            href='https://brenobaptista.vercel.app/rss.xml'
          />
          <meta
            property='og:image'
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg`}
          />
          <meta name='og:title' content={siteTitle} />
          <meta name='twitter:card' content='summary_large_image' />
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
