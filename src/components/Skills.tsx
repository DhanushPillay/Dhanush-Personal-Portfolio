import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { Marquee } from "@/components/ui/marquee"

gsap.registerPlugin(ScrollTrigger, SplitText)

const firstRow = [
  "Python", "JavaScript", "HTML/CSS", "SQL", "Flask", "React", "Node.js", "Tailwind CSS"
]

const secondRow = [
  "NLP", "Data Scraping", "Pandas", "SQLite", "Network Security", "AWS", "Git/GitHub", "Linux"
]

const thirdRow = [
  "PyTorch", "Transformers", "Google Cloud", "Docker", "Socket.IO", "BeautifulSoup", "FAISS", "REST APIs"
]

const SkillCard = ({ name }: { name: string }) => {
  return (
    <div className="relative w-max cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 hover:bg-white/10 transition-colors">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      if (headingRef.current) {
        const splitHeading = new SplitText(headingRef.current, {
          type: "chars,words",
        })
        gsap.from(splitHeading.chars, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          stagger: 0.02,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        })
      }
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-center text-white"
        >
          Skills &{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((skill) => (
            <SkillCard key={skill} name={skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((skill) => (
            <SkillCard key={skill} name={skill} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:22s]">
          {thirdRow.map((skill) => (
            <SkillCard key={skill} name={skill} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-950 dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-zinc-950 dark:from-background"></div>
      </div>
    </section>
  )
}
