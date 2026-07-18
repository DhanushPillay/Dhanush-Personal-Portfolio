import { useRef, useEffect, useState, lazy, Suspense } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const Spline = lazy(() => import("@splinetool/react-spline"))
import { Mail, Globe, Briefcase } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-button"
import { Magnetic } from "@/components/ui/magnetic"

gsap.registerPlugin(SplitText, ScrambleTextPlugin, ScrollTrigger)

function hideSplineWatermark() {
  const selectors = [
    'a[href*="spline.design"]',
    '[class*="watermark"]',
    '[class*="Watermark"]',
    '[class*="logo-wrap"]',
    '[class*="built-with"]',
    '[class*="branding"]',
    '[aria-label*="Spline"]',
    '[aria-label*="spline"]',
  ]

  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.display = "none"
      htmlEl.style.visibility = "hidden"
      htmlEl.style.opacity = "0"
      htmlEl.style.pointerEvents = "none"
      htmlEl.style.position = "absolute"
      htmlEl.style.width = "0"
      htmlEl.style.height = "0"
      htmlEl.style.overflow = "hidden"
    })
  })

  // Also hide any element containing "Built with Spline" text
  const allElements = document.querySelectorAll("div, a, span, p")
  allElements.forEach((el) => {
    if (el.textContent?.trim() === "Built with Spline" || el.textContent?.trim() === "Built with spline") {
      const htmlEl = el as HTMLElement
      htmlEl.style.display = "none"
      htmlEl.style.visibility = "hidden"
      htmlEl.style.opacity = "0"
      htmlEl.style.pointerEvents = "none"
      // Also hide parent if it's a container
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
  const headingRef = useRef<HTMLHeadingElement>(null)
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

    // Name scramble animation
    if (headingRef.current) {
      tl.to(
        headingRef.current,
        {
          scrambleText: {
            text: "Hi, I'm Dhanush Pillay",
            chars: "!<>-_\\/[]{}—=+*^?#_abcdef0123456789",
          },
          duration: 2.5,
          ease: "power2.inOut",
        },
        0
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
              // Hide watermark after scene loads — use multiple delays to catch late injections
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h1
          ref={headingRef}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 text-center"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Dhanush Pillay
          </span>
        </h1>
        <p
          ref={subheadingRef}
          className="text-xl md:text-2xl lg:text-3xl text-zinc-400 mb-8 text-center font-light tracking-wide"
        >
          Big Data & Cloud Engineer
        </p>
        <div
          ref={iconsRef}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <a
            href="https://github.com/DhanushPillay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-amber-400 transition-colors"
          >
            <Globe size={24} />
          </a>
          <a
            href="https://linkedin.com/in/dhanush-pillay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-amber-400 transition-colors"
          >
            <Briefcase size={24} />
          </a>
          <a
            href="mailto:dhanushpillay28@gmail.com"
            className="text-zinc-400 hover:text-amber-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        <div ref={buttonsRef} className="flex gap-4">
          <Magnetic intensity={0.2}>
            <a href="#projects">
              <LiquidButton size="lg" variant="default">
                View Projects
              </LiquidButton>
            </a>
          </Magnetic>
          <Magnetic intensity={0.2}>
            <a href="#contact">
              <LiquidButton size="lg" variant="outline">
                Contact Me
              </LiquidButton>
            </a>
          </Magnetic>
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
