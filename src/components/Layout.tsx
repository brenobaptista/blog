import { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Switch from './Switch'

import { ThemeContext } from '../pages/_app'

import {
  Container,
  HomeHeader,
  SocialIcons,
  Separator,
  ShortBio,
  BackToHome
} from '../styles/components/Layout'

interface Props {
  children: React.ReactNode
  home?: boolean
}

export const siteTitle = 'Breno Baptista'

const Layout = ({ children, home }: Props): JSX.Element => {
  const [switchValue, setSwitchValue] = useState(true)

  useEffect(() => {
    const storageValue = localStorage.getItem('theme')

    if (storageValue && JSON.parse(storageValue).mode === 'dark') {
      setSwitchValue(true)
    } else {
      setSwitchValue(false)
    }
  }, [])

  const toggleTheme = useContext(ThemeContext)

  return (
    <Container>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content="I'm a full-stack developer based in Fortaleza, Brazil."
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Switch
        switchValue={switchValue}
        toggleSwitch={() => {
          setSwitchValue(!switchValue)
          toggleTheme()
        }}
      />
      {home && (
        <HomeHeader>
          <Image
            src='/images/profile.jpg'
            alt='Breno Baptista'
            width={128}
            height={128}
            priority
          />
          <h1>Breno Baptista</h1>
          <SocialIcons>
            <a
              href='https://github.com/brenobaptista/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Image
                src='/images/icons/github.svg'
                alt='GitHub logo'
                width={40}
                height={40}
                priority
              />
            </a>
            <a href='mailto:brenobaptista@protonmail.com'>
              <Image
                src='/images/icons/envelope-square.svg'
                alt='Email icon'
                width={40}
                height={40}
                priority
              />
            </a>
          </SocialIcons>
        </HomeHeader>
      )}
      <main>{children}</main>
      {!home && (
        <>
          <Separator />
          <ShortBio>
            <Image
              src='/images/profile.jpg'
              alt='Breno Baptista'
              width={80}
              height={80}
            />
            <p>
              Breno Baptista is a full-stack developer at{' '}
              <a
                href='https://joinmassive.com/team'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Massive'
              >
                Massive
              </a>
              , where he develops web apps to fight advertising, data selling
              and privacy violations. He is interested in GNU/Linux, open-source
              software, privacy and cybersecurity.
            </p>
          </ShortBio>
          <BackToHome>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </BackToHome>
        </>
      )}
    </Container>
  )
}

export default Layout
