import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, BrainCircuit, Globe } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

// Magnetic laptop sticker component
const MagneticSticker = ({ 
  children, 
  className = "", 
  rotation = "rotate-0",
  bg = "bg-white",
  text = "text-[#1c1c1c]"
}: { 
  children: React.ReactNode, 
  className?: string, 
  rotation?: string,
  bg?: string,
  text?: string
}) => {
  const stickerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    const sticker = stickerRef.current
    if (!sticker) return
    
    // Spring physics for magnetic pull
    const xTo = gsap.quickTo(sticker, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" })
    const yTo = gsap.quickTo(sticker, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" })

    const onMouseMove = (e: MouseEvent) => {
      const rect = sticker.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      // Strong magnetic pull
      xTo(relX * 0.4)
      yTo(relY * 0.4)
    }

    const onMouseLeave = () => {
      // Snap back
      xTo(0)
      yTo(0)
    }

    sticker.addEventListener("mousemove", onMouseMove)
    sticker.addEventListener("mouseleave", onMouseLeave)
    
    return () => {
      sticker.removeEventListener("mousemove", onMouseMove)
      sticker.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <div ref={stickerRef} className={`absolute z-30 cursor-pointer ${rotation} ${className}`}>
      <div className={`flex items-center gap-2 ${bg} ${text} border-2 border-[#1c1c1c] px-4 md:px-6 py-2 md:py-3 font-black font-mono text-xs md:text-base uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,28,28,1)] hover:shadow-[8px_8px_0px_0px_rgba(28,28,28,1)] hover:-translate-y-1 transition-all duration-300 rounded-xl whitespace-nowrap`}>
        {children}
      </div>
    </div>
  )
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // 1. Line-by-Line Reveal for Bio (Deep black text)
    gsap.from(".reveal-line", {
      yPercent: 120,
      opacity: 0,
      rotateZ: 2,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        once: true
      },
      clearProps: "all"
    })

    // 2. Chaotic Sticker Entrances (pop in like stickers being slapped on)
    gsap.from(".magnetic-sticker", {
      scale: 0,
      opacity: 0,
      rotation: () => gsap.utils.random(-30, 30),
      duration: 1,
      stagger: 0.15,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        once: true
      },
      clearProps: "scale,opacity"
    })

    // 3. Background Marquee
    gsap.to(".marquee-bg", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    })

  }, { scope: containerRef })

  const bioLines = [
    "I’m a Data & Cloud Engineer",
    "operating at the messy intersection",
    "of big data pipelines, machine",
    "learning, and scalable cloud infra.",
    "",
    "I don't just write scripts.",
    "I architect robust systems that",
    "turn raw data into actionable,",
    "reliable intelligence."
  ]

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 md:py-32 bg-[#f5f5f7] text-[#1c1c1c] overflow-hidden flex items-center"
      ref={containerRef}
    >
      {/* Gen-Z Marquee Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200vw] overflow-hidden pointer-events-none select-none opacity-5">
        <div className="marquee-bg flex whitespace-nowrap">
          <h2 
            className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: "4px #1c1c1c" }}
          >
            THE LORE ✺ THE LORE ✺ THE LORE ✺ THE LORE ✺&nbsp;
          </h2>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center min-h-[60vh]">
        
        {/* Floating Laptop Stickers (Pushed to the sides) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          
          {/* Left Side */}
          <MagneticSticker 
            className="magnetic-sticker top-[15%] left-0 pointer-events-auto" 
            rotation="-rotate-12"
            bg="bg-[#e34234]"
            text="text-white"
          >
            <MapPin className="w-5 h-5" /> Pune, IN
          </MagneticSticker>

          <MagneticSticker 
            className="magnetic-sticker top-[45%] -left-8 pointer-events-auto" 
            rotation="rotate-6"
            bg="bg-[#1c1c1c]"
            text="text-[#f5f5f7]"
          >
            ⚡ BIG DATA ENERGY
          </MagneticSticker>

          <MagneticSticker 
            className="magnetic-sticker bottom-[20%] left-8 pointer-events-auto" 
            rotation="-rotate-6"
            bg="bg-white"
            text="text-[#1c1c1c]"
          >
            <BrainCircuit className="w-5 h-5 text-[#e34234]" /> ML / AI
          </MagneticSticker>

          {/* Right Side */}
          <MagneticSticker 
            className="magnetic-sticker top-[25%] -right-8 pointer-events-auto" 
            rotation="rotate-12"
            bg="bg-white"
            text="text-[#1c1c1c]"
          >
            🚀 SHIP IT
          </MagneticSticker>

          <MagneticSticker 
            className="magnetic-sticker top-[55%] right-8 pointer-events-auto" 
            rotation="-rotate-6"
            bg="bg-[#e34234]"
            text="text-white"
          >
            <Globe className="w-5 h-5" /> MIT-ADT
          </MagneticSticker>

          <MagneticSticker 
            className="magnetic-sticker bottom-[15%] -right-4 pointer-events-auto" 
            rotation="rotate-12"
            bg="bg-[#1c1c1c]"
            text="text-[#f5f5f7]"
          >
            BASED 💯
          </MagneticSticker>
        </div>

        {/* Bio Text Centered */}
        <div className="relative z-20 w-full max-w-3xl mx-auto space-y-2 text-center md:text-left mix-blend-difference pointer-events-none">
          {/* We use mix-blend-difference so it contrasts with stickers if they overlap, 
              but since bg is light and text is dark, let's just use normal rendering 
              so it doesn't look washed out. Actually, dark text on light bg is fine. */}
          {bioLines.map((line, index) => {
            if (line === "") {
              return <div key={index} className="h-6 md:h-8" /> 
            }
            return (
              <div key={index} className="overflow-hidden">
                <p className="reveal-line text-[1.75rem] md:text-4xl lg:text-[2.75rem] font-black tracking-tighter text-[#1c1c1c] leading-[1.1] uppercase pointer-events-auto">
                  {line}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
