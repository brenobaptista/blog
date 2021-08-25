import { useContext } from 'react'
import Link from 'next/link'

import ThemeContext from '../contexts/ThemeContext'
import {
  Nav,
  Column,
  Separator,
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
          <a
            href='https://www.linkedin.com/in/breno-baptista/'
            target='_blank'
            rel='noreferrer noopener'
          >
            LinkedIn
          </a>
        </Column>
        <Column>
          <Link href='/rss.xml'>RSS Feed</Link>
          <Link href='/donations'>Donations</Link>
        </Column>
        <Column>
          <a href='mailto:contact@brenobaptista.tech'>Email</a>
          <Link href='/resume'>Résumé</Link>
        </Column>
      </Nav>
      {theme.mode === 'retro' && (
        <>
          <Badges>
            <img
              src='/static/images/retro/badges/bookmark.gif'
              alt='Bookmark this page'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/guestbook.gif'
              alt='Sign my guestbook'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/best-viewed.gif'
              alt='Best viewed with anything'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/free-speech.gif'
              alt='Free speech forever'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/nuke-ie.gif'
              alt='Nuke IE'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/anarchy.gif'
              alt='Anarchy now'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/viewed-eyes.gif'
              alt='Best viewed with eyes'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/penguin.gif'
              alt='Tux - Linux penguin'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/geocities.gif'
              alt='Geocities'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/privacy.gif'
              alt='Internet privacy'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/wiby.gif'
              alt='Wiby search engine'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/y2k.gif'
              alt='I survived Y2K'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/email.gif'
              alt='Email me'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/monitor.gif'
              alt='Best viewed with a monitor'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/2001.gif'
              alt='I wish it was 2001'
              width='88'
              height='31'
            />
            <img
              src='/static/images/retro/badges/nocodeandrun.gif'
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
