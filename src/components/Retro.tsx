import { useContext } from 'react'

import ThemeContext from '../contexts/ThemeContext'
import { Marquee, Construction } from '../styles/components/Retro'

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
        </>
      )}
    </>
  )
}

export default Retro
