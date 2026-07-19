import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

interface TimelineEntry {
  title: string
  subtitle: string
  date: string
  content: React.ReactNode
}

const TimelineDot = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center 60%", "center 40%"],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#262626", "#f59e0b"])
  const borderColor = useTransform(scrollYProgress, [0, 1], ["#404040", "#fbbf24"])
  const boxShadow = useTransform(scrollYProgress, [0, 1], ["0 0 0px 0px rgba(245, 158, 11, 0)", "0 0 20px 4px rgba(245, 158, 11, 0.6)"])

  return (
    <div ref={ref} className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
      <motion.div 
        style={{ backgroundColor, borderColor, boxShadow }}
        className="h-4 w-4 rounded-full border p-2" 
      />
    </div>
  )
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full bg-black font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Experience &{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-sm">
          My journey in Big Data, Cloud Engineering, and Full-Stack Development.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <TimelineDot />
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-amber-500/80">
                {item.date}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-amber-500/80">
                {item.date}
              </h3>
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                <p className="text-lg text-zinc-400 font-medium">{item.subtitle}</p>
              </div>
              <div className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{ height: "100%" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-amber-500 via-amber-300 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
