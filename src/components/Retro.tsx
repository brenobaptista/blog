import { useContext } from 'react'

import ThemeContext from '../contexts/ThemeContext'
import { Marquee, Construction, Badges } from '../styles/components/Retro'

const Retro = (): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {theme.mode === 'retro' && (
        <>
          <Marquee>
            <p>WARNING! This site is currently under heavy construction.</p>
          </Marquee>
          <Construction>
            <img
              src='/static/images/retro/man-jackhammer.gif'
              alt='Man with jackhammer'
              width='100'
              height='113'
            />
            <img
              src='/static/images/retro/construction.gif'
              alt='Construction'
              width='90'
              height='95'
            />
            <img
              src='/static/images/retro/construction2.gif'
              alt='Construction2'
              width='100'
              height='113'
            />
            <img
              src='/static/images/retro/worldwideweb.gif'
              alt='World Wide Web'
              width='91'
              height='100'
            />
          </Construction>
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
        </>
      )}
    </>
  )
}

export default Retro
