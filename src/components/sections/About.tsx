import { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { GraduationCap, Layers, MapPin, ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, SplitText)

const ACCENT_WORDS = new Set(["SCALE.", "CLEAN", "PRODUCTS."])

const TICKER_ITEMS = [
  "Python",
  "SQL",
  "Apache Spark",
  "Kafka",
  "Apache Iceberg",
  "Google Cloud",
  "AWS",
  "Docker",
  "Kubernetes",
  "PyTorch",
  "FastAPI",
  "PostgreSQL",
  "Rust",
  "LLMs",
  "CI/CD",
]

const DOMAINS = ["Data Engineering", "Cloud & Infra", "ML & Analytics", "Backend & APIs"]

const cardClass =
  "about-card bg-white border-2 border-[#1c1c1c] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#1c1c1c] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#1c1c1c] transition-all duration-300"

function DomainCounter() {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => String(Math.round(v)))

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      count.set(DOMAINS.length)
      return
    }
    const controls = animate(count, DOMAINS.length, {
      duration: 1.2,
      ease: "easeOut",
    })
    return () => controls.stop()
  }, [inView, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      gsap.from(".about-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
        clearProps: "all",
      })

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      const statementSplit = new SplitText(".about-statement", {
        type: "words",
        wordsClass: "about-word",
      })
      statementSplit.words.forEach((word) => {
        if (ACCENT_WORDS.has(word.textContent?.trim().toUpperCase() ?? "")) {
          word.classList.add("text-[#e34234]")
        }
      })
      gsap.fromTo(
        statementSplit.words,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".about-statement",
            start: "top 80%",
            end: "bottom 45%",
            scrub: true,
          },
        }
      )

      const manifestoSplit = new SplitText(".about-manifesto", {
        type: "words,chars",
        charsClass: "about-char",
      })
      gsap.fromTo(
        manifestoSplit.chars,
        { opacity: 0.15 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.04,
          scrollTrigger: {
            trigger: ".about-manifesto",
            start: "top 85%",
            end: "bottom 55%",
            scrub: true,
          },
        }
      )

      return () => {
        statementSplit.revert()
        manifestoSplit.revert()
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-32 bg-[#f5f5f7] text-[#1c1c1c] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#e34234] mb-4">
            About me
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.02]">
            The human
            <br />
            behind the pipelines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
          <div className={`${cardClass} md:col-span-2 md:row-span-2 flex flex-col justify-center`}>
            <p className="about-statement text-2xl md:text-4xl font-black uppercase tracking-tight leading-[1.15]">
              3rd-year B.Tech student building systems that scale. I focus on
              writing clean code and shipping real products.
            </p>
          </div>

          <div className="about-card md:col-span-2 bg-[#1c1c1c] text-[#f5f5f7] border-2 border-[#1c1c1c] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#e34234] flex items-center overflow-hidden">
            <p className="about-manifesto text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.02]">
              Learn. Build. Ship.
            </p>
          </div>

          <a href="#skills" className={`${cardClass} group block`}>
            <Layers className="w-7 h-7 text-[#e34234] mb-4" />
            <p className="text-5xl md:text-6xl font-black tracking-tight leading-none">
              <DomainCounter />
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-zinc-500">
              Engineering domains
            </p>
            <p className="mt-4 text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-[#e34234] transition-colors">
              View skills <ArrowUpRight className="inline w-4 h-4" />
            </p>
          </a>

          <div className={cardClass}>
            <GraduationCap className="w-7 h-7 text-[#e34234] mb-4" />
            <p className="text-2xl font-black uppercase tracking-tight">B.Tech</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-zinc-500">
              MIT-ADT · Pune
            </p>
          </div>

          <div className="about-card md:col-span-4 bg-white border-2 border-[#1c1c1c] rounded-2xl py-5 shadow-[6px_6px_0px_#1c1c1c] overflow-hidden">
            <div
              className="ticker-track flex w-max gap-6"
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  aria-hidden={index >= TICKER_ITEMS.length}
                  className="flex items-center gap-6 font-mono text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap"
                >
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e34234]" />
                </span>
              ))}
            </div>
          </div>

          <a href="#contact" aria-label="Get in touch — based in Pune, India" className={`${cardClass} group flex items-center gap-4`}>
            <span className="relative flex w-3 h-3 shrink-0">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 animate-ping" />
              <span className="relative inline-flex w-3 h-3 rounded-full bg-green-600" />
            </span>
            <span>
              <span className="flex items-center gap-1 font-mono text-sm font-bold uppercase tracking-[0.2em]">
                <MapPin className="w-4 h-4 text-[#e34234]" /> Pune, IN
              </span>
              <span className="mt-1 block text-sm font-bold uppercase tracking-widest text-zinc-500 group-hover:text-[#e34234] transition-colors">
                Let's talk <ArrowUpRight className="inline w-4 h-4" />
              </span>
            </span>
          </a>

          <a
            href="#projects"
            className="about-card group md:col-span-3 bg-[#e34234] text-white border-2 border-[#1c1c1c] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#1c1c1c] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#1c1c1c] transition-all duration-300 flex items-center justify-between gap-4"
          >
            <span className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              See the work
            </span>
            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 shrink-0 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>

        <p className="sr-only">{DOMAINS.join(", ")}</p>
      </div>
    </section>
  )
}
