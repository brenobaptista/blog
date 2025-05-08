import { useEffect, useContext } from 'react'

import ThemeContext from '@/contexts/ThemeContext'

const Tab = () => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const originalTitle = document.title

    let interval: NodeJS.Timeout

    if (theme.mode === 'retro') {
      let retroTitle = ".:::. ♫ [ Breno's Webspace ] ଘ(੭ˊᵕˋ)੭ "
      let offset = 0
      const updateTitle = () => {
        document.title =
          retroTitle.substring(offset) + retroTitle.substring(0, offset)
        offset = (offset + 1) % retroTitle.length
      }

      updateTitle()
      interval = setInterval(updateTitle, 250)
    }

    return () => {
      clearInterval(interval)
      document.title = originalTitle
    }
  }, [theme.mode])

  useEffect(() => {
    const originalFavicon = '/favicon.ico'
    const retroFavicon = '/favicon-retro.ico'

    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }

    const bustCache = () => `?v=${new Date().getTime()}`

    if (theme.mode === 'retro') {
      link.href = retroFavicon + bustCache()
    }

    return () => {
      link.href = originalFavicon + bustCache()
    }
  }, [theme.mode])

  return null
}

export default Tab
