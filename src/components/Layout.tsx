import { useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Switch from './Switch'

import { ThemeContext } from '../pages/_app'

import {
  Container,
  HomeHeader,
  Separator,
  ShortBio,
  BackToHome
} from '../styles/components/Layout'

interface Props {
  children: React.ReactNode
  home?: boolean
}

const name = 'Breno Baptista'
export const siteTitle = 'Breno Baptista'

const Layout = ({ children, home }: Props): JSX.Element => {
  const [switchValue, setSwitchValue] = useState(false)

  const toggleTheme = useContext(ThemeContext)

  return (
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
            alt={name}
            width={128}
            height={128}
            priority
          />
          <h1>{name}</h1>
        </HomeHeader>
      )}
      <main>{children}</main>
      {!home && (
        <>
          <Separator />
          <ShortBio>
            <Image
              src='/images/profile.jpg'
              alt={name}
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
