import { useContext } from 'react'
import Link from 'next/link'

import ThemeContext from '../contexts/ThemeContext'
import {
  Nav,
  Column,
  Separator,
  Webring,
  Badges,
  Copyright
} from '../styles/components/Footer'

const Footer = (): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <footer>
      <Separator />
      <Nav>
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
          <a href='mailto:brenobaptista@protonmail.com'>Email</a>
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
            <img
              src='/images/retro/badges/bookmark.gif'
              alt='Bookmark this page'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/guestbook.gif'
              alt='Sign my guestbook'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/best-viewed.gif'
              alt='Best viewed with anything'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/free-speech.gif'
              alt='Free speech forever'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/nuke-ie.gif'
              alt='Nuke IE'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/anarchy.gif'
              alt='Anarchy now'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/viewed-eyes.gif'
              alt='Best viewed with eyes'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/penguin.gif'
              alt='Tux - Linux penguin'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/geocities.gif'
              alt='Geocities'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/privacy.gif'
              alt='Internet privacy'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/wiby.gif'
              alt='Wiby search engine'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/y2k.gif'
              alt='I survived Y2K'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/email.gif'
              alt='Email me'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/monitor.gif'
              alt='Best viewed with a monitor'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/2001.gif'
              alt='I wish it was 2001'
              width='88'
              height='31'
            />
            <img
              src='/images/retro/badges/nocodeandrun.gif'
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
