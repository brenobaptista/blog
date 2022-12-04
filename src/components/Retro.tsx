import { useContext } from 'react'
import Image from 'next/image'

import hamster from '../../public/images/retro/hamster.gif'
import jackhammer from '../../public/images/retro/jackhammer.gif'
import money from '../../public/images/retro/money.gif'
import sheep from '../../public/images/retro/sheep.gif'
import worldwideweb from '../../public/images/retro/worldwideweb.gif'
import ThemeContext from '../contexts/ThemeContext'
import { Marquee, Construction, Song, Sheep } from '../styles/components/Retro'

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
            <Image src={hamster} alt='Dancing hamster' height='100' />
            <Image src={jackhammer} alt='Man with jackhammer' height='100' />
            <Image src={money} alt='Spinning money' height='100' />
            <Image src={worldwideweb} alt='World Wide Web' height='100' />
          </Construction>
          <Song>
            <figcaption>Unleash the champion within:</figcaption>
            <audio controls>
              <source src='/audio/champions.ogg' type='audio/ogg' />
              <source src='/audio/champions.mp3' type='audio/mpeg' />
              Your browser does not support the audio element.
            </audio>
          </Song>
          <Sheep>
            <Image
              src={sheep}
              alt='Sheep'
              width='32'
              height='20'
              style={{ animationDelay: '0s' }}
            />
            <Image
              src={sheep}
              alt='Sheep'
              width='32'
              height='20'
              style={{ animationDelay: '1s' }}
            />
            <Image
              src={sheep}
              alt='Sheep'
              width='32'
              height='20'
              style={{ animationDelay: '2s' }}
            />
            <Image
              src={sheep}
              alt='Sheep'
              width='32'
              height='20'
              style={{ animationDelay: '3s' }}
            />
            <Image
              src={sheep}
              alt='Sheep'
              width='32'
              height='20'
              style={{ animationDelay: '4s' }}
            />
          </Sheep>
        </>
      )}
    </>
  )
}

export default Retro
