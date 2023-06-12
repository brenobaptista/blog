import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import i2001 from 'public/images/retro/badges/2001.gif'
import anarchy from 'public/images/retro/badges/anarchy.gif'
import bestViewed from 'public/images/retro/badges/best-viewed.gif'
import bookmark from 'public/images/retro/badges/bookmark.gif'
import email from 'public/images/retro/badges/email.gif'
import freeSpeech from 'public/images/retro/badges/free-speech.gif'
import geocities from 'public/images/retro/badges/geocities.gif'
import guestbook from 'public/images/retro/badges/guestbook.gif'
import monitor from 'public/images/retro/badges/monitor.gif'
import nocodeandrun from 'public/images/retro/badges/nocodeandrun.gif'
import nukeIE from 'public/images/retro/badges/nuke-ie.gif'
import penguin from 'public/images/retro/badges/penguin.gif'
import privacy from 'public/images/retro/badges/privacy.gif'
import viewedEyes from 'public/images/retro/badges/viewed-eyes.gif'
import wiby from 'public/images/retro/badges/wiby.gif'
import y2k from 'public/images/retro/badges/y2k.gif'
import ThemeContext from '@/contexts/ThemeContext'
import {
  Nav,
  Column,
  Separator,
  Webring,
  Badges,
  Copyright
} from '@/styles/components/Footer'

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <footer>
      <Separator />
      <Nav>
        <Column>
          <a href='mailto:brenobaptista@protonmail.com'>Email</a>
        </Column>
        <Column>
          <a
            href='https://github.com/brenobaptista/'
            target='_blank'
            rel='noreferrer noopener'
          >
            GitHub
          </a>
        </Column>
        <Column>
          <Link href='/rss.xml'>RSS</Link>
        </Column>

        <Column>
          <Link href='/resume'>Résumé</Link>
        </Column>
      </Nav>
      {theme.mode === 'retro' && (
        <>
          <Separator />
          <Webring>
            <a
              href='https://hotlinewebring.club/brenobaptista/previous'
              target='_blank'
              rel='noreferrer noopener'
            >
              ←
            </a>
            <a
              href='https://hotlinewebring.club/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Hotline Webring
            </a>
            <a
              href='https://hotlinewebring.club/brenobaptista/next'
              target='_blank'
              rel='noreferrer noopener'
            >
              →
            </a>
          </Webring>
          <Badges>
            <Image
              src={bookmark}
              alt='Bookmark this page'
              width='88'
              height='31'
            />
            <Image
              src={guestbook}
              alt='Sign my guestbook'
              width='88'
              height='31'
            />
            <Image
              src={bestViewed}
              alt='Best viewed with anything'
              width='88'
              height='31'
            />
            <Image
              src={freeSpeech}
              alt='Free speech forever'
              width='88'
              height='31'
            />
            <Image src={nukeIE} alt='Nuke IE' width='88' height='31' />
            <Image src={anarchy} alt='Anarchy now' width='88' height='31' />
            <Image
              src={viewedEyes}
              alt='Best viewed with eyes'
              width='88'
              height='31'
            />
            <Image
              src={penguin}
              alt='Tux - Linux penguin'
              width='88'
              height='31'
            />
            <Image src={geocities} alt='Geocities' width='88' height='31' />
            <Image
              src={privacy}
              alt='Internet privacy'
              width='88'
              height='31'
            />
            <Image src={wiby} alt='Wiby search engine' width='88' height='31' />
            <Image src={y2k} alt='I survived Y2K' width='88' height='31' />
            <Image src={email} alt='Email me' width='88' height='31' />
            <Image
              src={monitor}
              alt='Best viewed with a monitor'
              width='88'
              height='31'
            />
            <Image
              src={i2001}
              alt='I wish it was 2001'
              width='88'
              height='31'
            />
            <Image
              src={nocodeandrun}
              alt='No code and run'
              width='88'
              height='31'
            />
          </Badges>
          <Copyright>
            © 2020-{new Date().getFullYear()} Breno Baptista
          </Copyright>
        </>
      )}
    </footer>
  )
}

export default Footer
