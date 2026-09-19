import { useRef, useState, lazy, Suspense } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Spline = lazy(() => import("@splinetool/react-spline"))
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { useIsMobile } from "@/hooks/useIsMobile"

export default function Hero() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false)
  const isMobile = useIsMobile()

  const sectionRef = useRef<HTMLElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const greetingRef = useRef<HTMLParagraphElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const tl = gsap.timeline({ delay: 0.6 })

    // Greeting fade in
    if (greetingRef.current) {
      tl.from(
        greetingRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        },
        0.1
      )
    }

    // Heading fade and slide in
    if (headingRef.current) {
      tl.from(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
        },
        0.3
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
        0.6
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
        1.5
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
      <div className="absolute inset-0 md:left-[25%] lg:left-[30%] xl:left-[35%] z-0 flex items-center justify-center">

        {isMobile ? (
          <div className="w-full h-full bg-gradient-to-br from-[#f5f5f7] via-[#e4e4e7]/80 to-[#f5f5f7]/30 opacity-60" />
        ) : (
          <Suspense fallback={null}>
            <div className={`absolute inset-0 pointer-events-auto transition-opacity duration-1000 ${isSplineLoaded ? "opacity-100" : "opacity-0"}`}>
              <Spline
                scene="https://prod.spline.design/K4qEdxKLque-YBJ7/scene.splinecode"
                style={{ width: "100%", height: "100%", background: "transparent" }}
                onLoad={(spline) => {
                  spline.setZoom(1.4)
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
          <div className="text-center md:text-left w-full md:w-auto relative mb-24 md:mb-0">
            <p
              ref={greetingRef}
              className="text-xl md:text-2xl text-zinc-500 font-sans font-medium mb-2 lowercase"
            >
              sup. i'm
            </p>
            <h1
              ref={headingRef}
              className="text-6xl md:text-7xl lg:text-[7.5rem] font-cursive italic leading-[1.05] tracking-tight mb-6"
            >
              <span className="block text-[#1c1c1c]">
                Dhanush
              </span>
              <span className="block text-[#e34234]">Pillay</span>
            </h1>
            <p
              ref={subheadingRef}
              className="text-sm md:text-base lg:text-lg font-bold text-zinc-500 uppercase tracking-[0.25em] font-sans"
            >
              Data Engineer &middot; Cloud Architect
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mt-8">
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
