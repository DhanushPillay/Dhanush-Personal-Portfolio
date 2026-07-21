import { useRef } from "react"
import { motion, useSpring } from "framer-motion"

interface MagneticProps {
  children: React.ReactElement
  className?: string
  intensity?: number // How strongly it pulls towards the mouse
}

export function Magnetic({ children, className = "", intensity = 0.5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Spring configuration for extremely snappy, organic physics
  const springConfig = { stiffness: 350, damping: 15, mass: 0.1 }
  
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    
    // Calculate distance from center of the element
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    
    // Apply the magnetic pull based on intensity
    x.set(middleX * intensity)
    y.set(middleY * intensity)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
