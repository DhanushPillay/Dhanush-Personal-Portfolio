import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger)
}

interface ScrambleHeaderProps {
  text: string
  className?: string
  chars?: string
  duration?: number
}

export function ScrambleHeader({ 
  text, 
  className = "", 
  chars = "!<>-_\\/[]{}—=+*^?#_abcdef0123456789",
  duration = 1.5 
}: ScrambleHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!textRef.current || !containerRef.current) return

    // Ensure initial state is invisible to prevent flash of unscrambled text
    gsap.set(textRef.current, { opacity: 0 })

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%", // Trigger slightly before it hits the viewport
      once: true, // Only run the animation once
      onEnter: () => {
        gsap.to(textRef.current, {
          opacity: 1,
          duration: 0.1
        })
        gsap.to(textRef.current, {
          scrambleText: {
            text: text,
            chars: chars,
            speed: 0.8,
            revealDelay: 0.2
          },
          duration: duration,
          ease: "power2.out",
        })
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={`relative flex items-center gap-4 ${className}`}>
      <span className="text-amber-500/50 font-mono text-sm hidden md:inline-block">
        $ ./decrypt.sh --target
      </span>
      <h2 
        ref={textRef} 
        className="text-3xl md:text-5xl font-bold font-mono tracking-tight text-white"
        style={{ opacity: 0 }} // Hardcoded initial state
      >
        {/* Placeholder dashes while waiting to trigger */}
        {text.replace(/./g, "_")}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-amber-500/50 to-transparent ml-4" />
    </div>
  )
}
