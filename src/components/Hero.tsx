import { useRef, useState, lazy, Suspense, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const Spline = lazy(() => import("@splinetool/react-spline"))
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { LiquidButton } from "@/components/ui/liquid-button"
import { Magnetic } from "@/components/ui/magnetic"
import { ScrambleText } from "@/components/ui/scramble-text"

gsap.registerPlugin(ScrollTrigger)

const hideSplineWatermark = () => {
  const allElements = document.querySelectorAll("div, a, span, p")
  allElements.forEach((el) => {
    if (el.textContent?.trim() === "Built with Spline" || el.textContent?.trim() === "Built with spline") {
      const htmlEl = el as HTMLElement
      htmlEl.style.display = "none"
      htmlEl.style.visibility = "hidden"
      htmlEl.style.opacity = "0"
      htmlEl.style.pointerEvents = "none"
      const parent = htmlEl.parentElement
      if (parent) {
        parent.style.display = "none"
        parent.style.visibility = "hidden"
        parent.style.opacity = "0"
      }
    }
  })
}

export default function Hero() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial attempt to hide watermark
    hideSplineWatermark()

    // Set up MutationObserver to catch late-injected watermarks
    const observer = new MutationObserver(() => {
      hideSplineWatermark()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  useGSAP(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({ delay: 0.3 })

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
        1.5
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
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Spline as full background */}
      <div className="absolute inset-0">
        {/* 3D Engine Loading Indicator */}
        <div 
          className={`absolute bottom-8 right-8 z-50 flex items-center gap-4 bg-black/40 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 transition-all duration-1000 ${
            isSplineLoaded ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="w-5 h-5 border-2 border-zinc-700 border-t-amber-500 rounded-full animate-spin shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
          <span className="text-zinc-300 text-xs font-medium tracking-[0.2em] uppercase">
            Loading 3D Engine...
          </span>
        </div>

        <Suspense fallback={null}>
          <Spline
            scene="/scene.splinecode"
            style={{ width: "100%", height: "100%", background: "transparent" }}
            onLoad={(spline) => {
              spline.setZoom(1)
              setIsSplineLoaded(true)
              setTimeout(hideSplineWatermark, 500)
              setTimeout(hideSplineWatermark, 1500)
              setTimeout(hideSplineWatermark, 3000)
            }}
          />
        </Suspense>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 pb-32 md:pb-24 pointer-events-none">
        <div className="max-w-6xl pointer-events-auto">
          <p
            ref={subheadingRef}
            className="text-amber-500 mb-6 font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-medium drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"
          >
            [SYSTEM_READY] // Big Data & Cloud Engineer
          </p>
          <h1
            className="text-[14vw] md:text-[9vw] lg:text-[7vw] leading-[0.9] font-bold text-white mb-10 tracking-tighter"
          >
            <ScrambleText text="Hi, I'm" delay={0.3} duration={1.5} className="block text-zinc-100" />
            <ScrambleText 
              text="Dhanush Pillay" 
              delay={0.8} 
              duration={1.5} 
              className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent block pb-4" 
            />
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
                className="text-zinc-400 hover:text-amber-400 hover:scale-110 transition-all duration-300"
              >
                <GithubIcon size={28} />
              </a>
              <a
                href="https://linkedin.com/in/dhanush-pillay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-zinc-400 hover:text-amber-400 hover:scale-110 transition-all duration-300"
              >
                <LinkedinIcon size={28} />
              </a>
              <a
                href="mailto:dhanushpillay28@gmail.com"
                aria-label="Send an Email"
                className="text-zinc-400 hover:text-amber-400 hover:scale-110 transition-all duration-300"
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
        <div className="w-5 h-8 border-2 border-zinc-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-amber-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}
