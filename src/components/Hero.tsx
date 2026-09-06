import { useRef, useState, lazy, Suspense, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Spline = lazy(() => import("@splinetool/react-spline"))
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { LiquidButton } from "@/components/ui/liquid-button"
import { Magnetic } from "@/components/ui/magnetic"
import { SplitText } from "gsap/SplitText"
import { useIsMobile } from "@/hooks/useIsMobile"

export default function Hero() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) {
      setIsSplineLoaded(true)
    }
  }, [isMobile])


  const sectionRef = useRef<HTMLElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({ delay: 0.6 })

    // Heading character stagger animation
    if (headingRef.current) {
      const split = SplitText.create(headingRef.current, { type: "lines,words,chars" })
      
      // Wrap lines in overflow-hidden divs for a clean mask effect
      split.lines.forEach((line: HTMLElement) => {
        const wrap = document.createElement("div")
        wrap.style.overflow = "hidden"
        // keep block display so lines stack correctly
        line.parentNode?.insertBefore(wrap, line)
        wrap.appendChild(line)
      })

      tl.from(
        split.chars,
        {
          y: "120%",
          rotateZ: 5,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.02,
        },
        0.2 // Start early
      )
    }

    // Subheading fade in
    if (subheadingRef.current) {
      tl.from(
        subheadingRef.current,
        {
          opacity: 0,
          y: 20,
          filter: "blur(10px)",
          duration: 1,
          ease: "power3.out",
        },
        1.0 // adjusted timing relative to heading
      )
    }

    // Icons stagger in
    if (iconsRef.current) {
      tl.from(
        iconsRef.current.children,
        {
          opacity: 0,
          y: 30,
          scale: 0.5,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        2
      )
    }

    // Buttons stagger in
    if (buttonsRef.current) {
      tl.from(
        buttonsRef.current.children,
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
          stagger: 0.15,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
        2.3
      )
    }

    // Scroll indicator
    if (scrollRef.current) {
      tl.from(
        scrollRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power3.out",
        },
        2.8
      )

      gsap.to(scrollRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      })
    }
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#f5f5f7]"
    >

      {/* Spline as full background */}
      <div className="absolute inset-0 md:left-1/3 lg:left-[40%] xl:left-1/2 z-0 flex items-center justify-center">

        {isMobile ? (
          <div className="w-full h-full bg-gradient-to-br from-[#f5f5f7] via-[#e4e4e7]/80 to-[#f5f5f7]/30 opacity-60" />
        ) : (
          <Suspense fallback={null}>
            <div className="absolute inset-0 pointer-events-auto">
              <Spline
                scene="https://prod.spline.design/K4qEdxKLque-YBJ7/scene.splinecode"
                style={{ width: "100%", height: "100%", background: "transparent" }}
                onLoad={(spline) => {
                  spline.setZoom(1)
                  setIsSplineLoaded(true)
                }}
              />
            </div>
          </Suspense>
        )}
        
        {/* Solid block to perfectly hide the watermark without stretching the canvas */}
        <div className="absolute bottom-0 right-0 w-[180px] h-[60px] bg-[#f5f5f7] pointer-events-none" />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#f5f5f7]/80 pointer-events-none z-10" />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center md:justify-end px-8 md:px-16 pb-32 md:pb-24 pointer-events-none">
        <div className="w-full md:w-[60%] lg:w-[55%] xl:w-1/2 pointer-events-auto mt-20 md:mt-0">
          <p
            ref={subheadingRef}
            className="text-[#e34234] mb-6 font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-medium"
          >
            Big Data & Cloud Engineer
          </p>
          <h1
            ref={headingRef}
            className="text-[14vw] md:text-[9vw] lg:text-[7vw] leading-[0.9] font-bold text-[#1c1c1c] mb-10 tracking-tighter"
          >
            <span className="block">Hi, I'm</span>
            <span className="block pb-4">Dhanush Pillay</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <Magnetic intensity={0.2}>
                <a href="#projects" aria-label="View Projects">
                  <LiquidButton size="lg" variant="default">
                    View Projects
                  </LiquidButton>
                </a>
              </Magnetic>
              <Magnetic intensity={0.2}>
                <a href="#contact" aria-label="Contact Me">
                  <LiquidButton size="lg" variant="outline">
                    Contact Me
                  </LiquidButton>
                </a>
              </Magnetic>
            </div>

            <div
              ref={iconsRef}
              className="flex items-center gap-6"
            >
              <a
                href="https://github.com/DhanushPillay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-zinc-600 hover:text-[#e34234] hover:scale-110 transition-all duration-300"
              >
                <GithubIcon size={28} />
              </a>
              <a
                href="https://linkedin.com/in/dhanush-pillay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-zinc-600 hover:text-[#e34234] hover:scale-110 transition-all duration-300"
              >
                <LinkedinIcon size={28} />
              </a>
              <a
                href="mailto:dhanushpillay28@gmail.com"
                aria-label="Send an Email"
                className="text-zinc-600 hover:text-[#e34234] hover:scale-110 transition-all duration-300"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 border-2 border-zinc-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-[#e34234] rounded-full" />
        </div>
      </div>
    </section>
  )
}
