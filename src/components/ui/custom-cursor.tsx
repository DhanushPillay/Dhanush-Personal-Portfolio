import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Tight spring for the terminal block so it feels snappy and responsive
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)
    
    // Hide default cursor globally
    document.documentElement.style.cursor = "none"

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, input, textarea, [data-cursor-hover], [role="button"]')
      setIsHovering(!!isInteractive)
      
      // Ensure the hovered element also hides its native cursor (like the pointer hand)
      if (isInteractive) {
        (isInteractive as HTMLElement).style.cursor = "none"
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%"
      }}
    >
      {isHovering ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="text-white font-mono text-3xl font-bold flex items-center"
        >
          <span className="mr-8 text-amber-500">&lt;</span>
          <span className="text-amber-500">&gt;</span>
        </motion.div>
      ) : (
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-3 h-6 bg-white"
        />
      )}
    </motion.div>
  )
}
