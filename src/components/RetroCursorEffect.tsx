import { useEffect, useContext, useRef, useState } from 'react'

import ThemeContext from '@/contexts/ThemeContext'
import {
  SparkleWrapper,
  Star,
  StarHorizontal,
  StarVertical,
  Tiny
} from '@/styles/components/RetroCursorEffect'

interface Sparkle {
  id: number
  type: 'star' | 'tiny'
  x: number
  y: number
  life: number
  color: string
  size: 'large' | 'small'
}

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const MAX_SPARKLES = 10
const ANIMATION_INTERVAL = 40

const RetroCursorEffect = () => {
  const { theme } = useContext(ThemeContext)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const mousePos = useRef({ x: 0, y: 0 })
  const lastMousePos = useRef({ x: 0, y: 0 })
  const intervalId = useRef<number | undefined>(undefined)
  const nextId = useRef(0)

  useEffect(() => {
    if (theme.mode !== 'retro') {
      setSparkles([])
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.pageX, y: e.pageY }
    }

    const animate = () => {
      const curr = mousePos.current
      const last = lastMousePos.current

      setSparkles(prev => {
        const updated = [...prev]

        // Create new sparkle if mouse moved
        if (Math.abs(curr.x - last.x) > 1 || Math.abs(curr.y - last.y) > 1) {
          lastMousePos.current = curr
          if (updated.filter(s => s.type === 'star').length < MAX_SPARKLES) {
            updated.push({
              id: nextId.current++,
              type: 'star',
              x: curr.x,
              y: curr.y + 1,
              life: MAX_SPARKLES,
              color: COLORS[Math.floor(Math.random() * COLORS.length)],
              size: 'large'
            })
          }
        }

        // Update and filter sparkles
        return updated
          .map(s => {
            const life = s.life - 1
            if (life <= 0) {
              return s.type === 'star'
                ? {
                    ...s,
                    type: 'tiny' as const,
                    life: MAX_SPARKLES,
                    size: 'small' as const
                  }
                : null
            }
            return {
              ...s,
              x: s.x + ((s.id % 5) - 2) / 5,
              y: s.y + 1 + Math.random() * 3,
              life,
              size: life === Math.floor(MAX_SPARKLES / 2) ? 'small' : s.size
            }
          })
          .filter((s): s is Sparkle => s !== null)
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    intervalId.current = window.setInterval(animate, ANIMATION_INTERVAL)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (intervalId.current) clearInterval(intervalId.current)
    }
  }, [theme.mode])

  if (theme.mode !== 'retro') return null

  return sparkles.map(sparkle => (
    <SparkleWrapper key={sparkle.id} $x={sparkle.x} $y={sparkle.y}>
      {sparkle.type === 'star' ? (
        <Star $size={sparkle.size}>
          <StarHorizontal $color={sparkle.color} />
          <StarVertical $color={sparkle.color} />
        </Star>
      ) : (
        <Tiny $color={sparkle.color} $size={sparkle.size} />
      )}
    </SparkleWrapper>
  ))
}

export default RetroCursorEffect
