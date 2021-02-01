import { useState, useEffect, useContext } from 'react'
import Head from 'next/head'

import Switch from './Switch'
import { ThemeContext } from '../pages/_app'
import { Container } from '../styles/components/Layout'

interface Props {
  children: React.ReactNode
}

export const siteTitle = 'Breno Baptista'

const Layout = ({ children }: Props): JSX.Element => {
  const [switchValue, setSwitchValue] = useState(true)

  useEffect(() => {
    const storageValue = localStorage.getItem('theme')

    if (storageValue && JSON.parse(storageValue).mode === 'dark') {
      setSwitchValue(true)
    } else if (storageValue && JSON.parse(storageValue).mode === 'light') {
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
      <main>{children}</main>
    </Container>
  )
}

export default Layout
