import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/Utils.module.css'

interface Props {
  children: React.ReactNode
  home?: boolean
}

const name = 'Breno Baptista'
export const siteTitle = 'Breno Baptista'

const Layout = ({ children, home }: Props) => (
  <div className={styles.container}>
    <Head>
      <link
        rel="icon"
        href="/favicon.ico"
      />
      <meta
        name="description"
        content="Breno Baptista's Portfolio"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta
        name="og:title"
        content={siteTitle}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            alt={name}
            width={128}
            height={128}
          />
          <h1 className={utilStyles.heading2Xl}>
            {name}
          </h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                alt={name}
                width={96}
                height={96}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>
                {name}
              </a>
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>
      {children}
    </main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>
            ← Back to home
          </a>
        </Link>
      </div>
    )}
  </div>
)

export default Layout
