import { useContext } from 'react'

import ThemeContext from '../contexts/ThemeContext'
import { Marquee, Construction, Song } from '../styles/components/Retro'

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
              src='/images/retro/jackhammer.gif'
              alt='Man with jackhammer'
              height='100'
            />
            <img
              src='/images/retro/hamster.gif'
              alt='Dancing hamster'
              height='100'
            />
            <img
              src='/images/retro/money.gif'
              alt='Spinning money'
              height='100'
            />
            <img
              src='/images/retro/worldwideweb.gif'
              alt='World Wide Web'
              height='100'
            />
          </Construction>
          <Song>
            <figcaption>Unleash the champion within:</figcaption>
            <audio controls>
              <source src='/audio/champions.ogg' type='audio/ogg' />
              <source src='/audio/champions.mp3' type='audio/mpeg' />
              Your browser does not support the audio element.
            </audio>
          </Song>
        </>
      )}
    </>
  )
}

export default Retro
