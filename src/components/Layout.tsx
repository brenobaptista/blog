import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Header, BackToHome } from '../styles/components/Layout'

interface Props {
  children: React.ReactNode
  home?: boolean
}

const name = 'Breno Baptista'
export const siteTitle = 'Breno Baptista'

const Layout = ({ children, home }: Props): JSX.Element => (
  <Container>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content="Breno Baptista's Portfolio" />
      <meta
        property='og:image'
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name='og:title' content={siteTitle} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
    <Header>
      {home ? (
        <>
          <Image
            src='/images/profile.jpg'
            alt={name}
            width={128}
            height={128}
            priority
          />
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <Link href='/'>
            <a>
              <Image
                src='/images/profile.jpg'
                alt={name}
                width={96}
                height={96}
                priority
              />
            </a>
          </Link>
          <h2>
            <Link href='/'>
              <a>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </Header>
    <main>{children}</main>
    {!home && (
      <BackToHome>
        <Link href='/'>
          <a>← Back to home</a>
        </Link>
      </BackToHome>
    )}
  </Container>
)

export default Layout
