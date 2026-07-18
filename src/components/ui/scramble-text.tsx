import { useEffect, useState } from "react"

interface ScrambleTextProps {
  text: string
  delay?: number
  duration?: number
  className?: string
}

const CHARS = "!<>-_\\/[]{}—=+*^?#_abcdef0123456789"

export function ScrambleText({ text, delay = 0, duration = 1, className = "" }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text.replace(/./g, " "))

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let frame: number

    const startAnimation = () => {
      const length = text.length
      const startTime = Date.now()
      const durationMs = duration * 1000

      const update = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / durationMs, 1)

        const revealCount = Math.floor(progress * length)

        let result = ""
        for (let i = 0; i < length; i++) {
          if (text[i] === " ") {
            result += " "
            continue
          }
          if (i < revealCount) {
            result += text[i]
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)]
          }
        }

        setDisplayText(result)

        if (progress < 1) {
          frame = requestAnimationFrame(update)
        } else {
          setDisplayText(text)
        }
      }

      frame = requestAnimationFrame(update)
    }

    if (delay > 0) {
      timeout = setTimeout(startAnimation, delay * 1000)
    } else {
      startAnimation()
    }

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frame)
    }
  }, [text, delay, duration])

  return <span className={className}>{displayText}</span>
}
