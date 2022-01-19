import { useEffect, useContext } from 'react'

import ThemeContext from '../contexts/ThemeContext'

const Sparkles = (): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  const sparkles = 10

  let currentX = 400
  let lastX = 400
  let currentY = 300
  let lastY = 300
  let screenWidth = 800
  let screenHeight = 600
  let scrollLeft = 0
  let scrollDown = 0

  const tiny = []
  const star = []
  const starV = []
  const starX = []
  const starY = []
  const tinyX = []
  const tinyY = []
  const tinyV = []

  const updateStar = (i: number) => {
    if (--starV[i] === sparkles / 2) {
      star[i].style.clip = 'rect(1px, 4px, 4px, 1px)'
    }

    if (starV[i]) {
      starY[i] += 1 + Math.random() * 3
      starX[i] += ((i % 5) - 2) / 5

      if (
        starY[i] < screenHeight + scrollDown &&
        starX[i] < screenWidth + scrollLeft
      ) {
        star[i].style.top = `${starY[i]}px`
        star[i].style.left = `${starX[i]}px`
      } else {
        star[i].style.visibility = 'hidden'
        starV[i] = 0
      }
    } else {
      tinyV[i] = sparkles
      tiny[i].style.top = `${(tinyY[i] = starY[i])}px`
      tiny[i].style.left = `${(tinyX[i] = starX[i])}px`
      tiny[i].style.width = '2px'
      tiny[i].style.height = '2px'
      if (star[i].childNodes[0]) {
        tiny[i].style.backgroundColor =
          star[i].childNodes[0].style.backgroundColor
      }
      star[i].style.visibility = 'hidden'
      tiny[i].style.visibility = 'visible'
    }
  }

  const updateTiny = (i: number) => {
    if (--tinyV[i] === sparkles / 2) {
      tiny[i].style.width = '1px'
      tiny[i].style.height = '1px'
    }

    if (tinyV[i]) {
      tinyY[i] += 1 + Math.random() * 3
      tinyX[i] += ((i % 5) - 2) / 5

      if (
        tinyY[i] < screenHeight + scrollDown &&
        tinyX[i] < screenWidth + scrollLeft
      ) {
        tiny[i].style.top = `${tinyY[i]}px`
        tiny[i].style.left = `${tinyX[i]}px`
      } else {
        tiny[i].style.visibility = 'hidden'
        tinyV[i] = 0
      }
    } else {
      tiny[i].style.visibility = 'hidden'
    }
  }

  const createSparkle = () => {
    if (Math.abs(currentX - lastX) > 1 || Math.abs(currentY - lastY) > 1) {
      lastX = currentX
      lastY = currentY

      for (let i = 0; i < sparkles; i++)
        if (!starV[i]) {
          const filteredColor = color[Math.floor(Math.random() * 7)]

          star[i].style.left = `${(starX[i] = currentX)}px`
          star[i].style.top = `${(starY[i] = currentY + 1)}px`
          star[i].style.clip = 'rect(0px, 5px, 5px, 0px)'
          if (star[i].childNodes[0] && star[i].childNodes[1]) {
            star[i].childNodes[0].style.backgroundColor = filteredColor
            star[i].childNodes[1].style.backgroundColor = filteredColor
          }
          star[i].style.visibility = 'visible'
          starV[i] = sparkles

          break
        }
    }

    for (let i = 0; i < sparkles; i++) {
      if (starV[i]) updateStar(i)
      if (tinyV[i]) updateTiny(i)
    }

    setTimeout(createSparkle, 40)
  }

  const calculateScroll = () => {
    if (typeof window.self.pageYOffset === 'number') {
      scrollDown = window.self.pageYOffset
      scrollLeft = window.self.pageXOffset
    } else if (
      document.body &&
      (document.body.scrollTop || document.body.scrollLeft)
    ) {
      scrollDown = document.body.scrollTop
      scrollLeft = document.body.scrollLeft
    } else if (
      document.documentElement &&
      (document.documentElement.scrollTop ||
        document.documentElement.scrollLeft)
    ) {
      scrollLeft = document.documentElement.scrollLeft
      scrollDown = document.documentElement.scrollTop
    } else {
      scrollDown = 0
      scrollLeft = 0
    }
  }

  const moveMouse = (event: MouseEvent) => {
    if (event) {
      currentY = event.pageY
      currentX = event.pageX
    }
  }

  const calculateScreen = () => {
    let screenWidthTemp = 999999
    let screenHeightTemp = 999999

    if (document.documentElement && document.documentElement.clientWidth) {
      if (document.documentElement.clientWidth > 0) {
        screenWidthTemp = document.documentElement.clientWidth
      }

      if (document.documentElement.clientHeight > 0) {
        screenHeightTemp = document.documentElement.clientHeight
      }
    }

    if (typeof window.self.innerWidth === 'number' && window.self.innerWidth) {
      if (
        window.self.innerWidth > 0 &&
        window.self.innerWidth < screenWidthTemp
      ) {
        screenWidthTemp = window.self.innerWidth
      }

      if (
        window.self.innerHeight > 0 &&
        window.self.innerHeight < screenHeightTemp
      ) {
        screenHeightTemp = window.self.innerHeight
      }
    }

    if (document.body.clientWidth) {
      if (
        document.body.clientWidth > 0 &&
        document.body.clientWidth < screenWidthTemp
      ) {
        screenWidthTemp = document.body.clientWidth
      }

      if (
        document.body.clientHeight > 0 &&
        document.body.clientHeight < screenHeightTemp
      ) {
        screenHeightTemp = document.body.clientHeight
      }
    }

    if (screenWidthTemp === 999999 || screenHeightTemp === 999999) {
      screenWidthTemp = 800
      screenHeightTemp = 600
    }

    screenWidth = screenWidthTemp
    screenHeight = screenHeightTemp
  }

  const createDiv = (height: number, width: number) => {
    const div = document.createElement('div')

    div.style.position = 'absolute'
    div.style.height = `${height}px`
    div.style.width = `${width}px`
    div.style.overflow = 'hidden'
    div.className = 'sparkle'

    return div
  }

  useEffect(() => {
    if (theme.mode === 'retro') {
      if (typeof document !== 'undefined') {
        for (let i = 0; i < sparkles; i++) {
          starV[i] = 0
          tinyV[i] = 0

          const ratsFirst = createDiv(3, 3)
          ratsFirst.style.visibility = 'hidden'
          ratsFirst.style.zIndex = '999'
          document.body.appendChild((tiny[i] = ratsFirst))

          const ratsLeft = createDiv(1, 5)
          const ratsDown = createDiv(5, 1)
          ratsLeft.style.top = '2px'
          ratsLeft.style.left = '0px'
          ratsDown.style.top = '0px'
          ratsDown.style.left = '2px'

          const ratsSecond = createDiv(5, 5)
          ratsSecond.style.backgroundColor = 'transparent'
          ratsSecond.style.visibility = 'hidden'
          ratsSecond.style.zIndex = '999'
          ratsSecond.appendChild(ratsLeft)
          ratsSecond.appendChild(ratsDown)

          document.body.appendChild((star[i] = ratsSecond))
        }

        calculateScreen()
        createSparkle()

        document.addEventListener('mousemove', moveMouse)

        document.body.style.overflowX = 'hidden'
      }

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', calculateScreen)
        window.addEventListener('scroll', calculateScroll, { passive: true })
      }
    } else {
      document.querySelectorAll('.sparkle').forEach(sparkle => {
        sparkle.remove()
      })
    }

    return () => {
      document.removeEventListener('mousemove', moveMouse)
      window.removeEventListener('resize', calculateScreen)
      window.removeEventListener('scroll', calculateScroll)

      document.querySelectorAll('.sparkle').forEach(sparkle => {
        sparkle.remove()
      })
    }
  }, [theme])

  return null
}

export default Sparkles
