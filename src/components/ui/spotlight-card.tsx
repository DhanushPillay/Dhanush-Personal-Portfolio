"use client"

import React, { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  // Framer motion values for the 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Physics spring for buttery smooth tilt
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Update spotlight position
    setPosition({ x: mouseX, y: mouseY })

    // Calculate percentage for tilt (-0.5 to 0.5)
    const xPct = mouseX / rect.width - 0.5
    const yPct = mouseY / rect.height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
    // Reset tilt on mouse leave
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-2xl bg-white/[0.02] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden",
        className
      )}
    >
      {/* HUD Tech Accents */}
      <div className="absolute top-3 left-3 w-1 h-1 bg-white/20 rounded-full" />
      <div className="absolute top-3 right-3 w-1 h-1 bg-white/20 rounded-full" />
      <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/20 rounded-full" />
      <div className="absolute bottom-3 right-3 w-1 h-1 bg-white/20 rounded-full" />
      {/* 3D Content wrapper to push content out */}
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(245, 158, 11, 0.1), transparent 40%)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 rounded-2xl"
          style={{
            opacity,
            boxShadow: `inset 0 0 0 1px rgba(245, 158, 11, 0.2)`,
            maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
          }}
        />
        <div className="relative h-full z-10">{children}</div>
      </div>
    </motion.div>
  )
}
