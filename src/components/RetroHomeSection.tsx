import { useContext } from 'react'
import Image from 'next/image'

import hamster from 'public/images/retro/hamster.gif'
import jackhammer from 'public/images/retro/jackhammer.gif'
import money from 'public/images/retro/money.gif'
import sheep from 'public/images/retro/sheep.gif'
import worldwideweb from 'public/images/retro/worldwideweb.gif'
import ThemeContext from '@/contexts/ThemeContext'
import {
  Marquee,
  Blink,
  GIFs,
  Song,
  Sheep
} from '@/styles/components/RetroHomeSection'

const RetroHomeSection = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {theme.mode === 'retro' && (
        <>
          <Marquee>
            <p>WARNING! This site is currently under heavy construction.</p>
          </Marquee>
          <GIFs>
            <Image unoptimized src={hamster} alt='Dancing hamster' />
            <Image unoptimized src={jackhammer} alt='Man with jackhammer' />
            <Image unoptimized src={money} alt='Spinning money' />
            <Image unoptimized src={worldwideweb} alt='World Wide Web' />
          </GIFs>
          <Song>
            <figcaption>
              <Blink>Unleash the champion within:</Blink>
            </figcaption>
            <audio controls>
              <source src='/audio/champions.ogg' type='audio/ogg' />
              <source src='/audio/champions.mp3' type='audio/mpeg' />
              Your browser does not support the audio element.
            </audio>
          </Song>
          <Sheep>
            {[0, 1, 2, 3, 4].map(delay => (
              <Image
                key={delay}
                unoptimized
                src={sheep}
                alt='Sheep'
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </Sheep>
        </>
      )}
    </>
  )
}

export default RetroHomeSection
