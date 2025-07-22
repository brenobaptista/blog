import { useContext } from 'react'
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
import Separator from '@/components/Separator'
import ThemeContext from '@/contexts/ThemeContext'
import { Webring, Badges, Copyright } from '@/styles/components/RetroFooter'

const RetroFooter = () => {
  const { theme } = useContext(ThemeContext)

  return (
    theme.mode === 'retro' && (
      <footer>
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
          <Image src={bookmark} alt='Bookmark this page' />
          <Image src={guestbook} alt='Sign my guestbook' />
          <Image unoptimized src={bestViewed} alt='Best viewed with anything' />
          <Image src={freeSpeech} alt='Free speech forever' />
          <Image unoptimized src={nukeIE} alt='Nuke IE' />
          <Image unoptimized src={anarchy} alt='Anarchy now' />
          <Image unoptimized src={viewedEyes} alt='Best viewed with eyes' />
          <Image src={penguin} alt='Tux - Linux penguin' />
          <Image unoptimized src={geocities} alt='Geocities' />
          <Image unoptimized src={privacy} alt='Internet privacy' />
          <Image src={wiby} alt='Wiby search engine' />
          <Image unoptimized src={y2k} alt='I survived Y2K' />
          <Image unoptimized src={email} alt='Email me' />
          <Image src={monitor} alt='Best viewed with a monitor' />
          <Image unoptimized src={i2001} alt='I wish it was 2001' />
          <Image src={nocodeandrun} alt='No code and run' />
        </Badges>
        <Copyright>© 2020-{new Date().getFullYear()} Breno Baptista</Copyright>
      </footer>
    )
  )
}

export default RetroFooter
