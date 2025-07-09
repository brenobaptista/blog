import { useEffect, useContext } from 'react'

import ThemeContext from '@/contexts/ThemeContext'

const RetroBrowserTab = () => {
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

  return null
}

export default RetroBrowserTab
