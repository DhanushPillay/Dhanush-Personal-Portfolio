import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { Database, Cloud, Code, MapPin } from "lucide-react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function About() {
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
      
      const gridItems = sectionRef.current.querySelectorAll('.group\\/bento')
      gsap.from(gridItems, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      })
    },
    { scope: sectionRef }
  )

  const items = [
    {
      title: "Passionate Developer",
      description: "I love turning small ideas into real projects. Always curious. Always coding.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-white/5 items-center justify-center">
          <Code className="h-10 w-10 text-amber-500/50" />
        </div>
      ),
      icon: <Code className="h-4 w-4 text-amber-500" />,
      className: "md:col-span-2",
    },
    {
      title: "Based in Pune, India",
      description: "Currently pursuing B.Tech at MIT-ADT University.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/5 items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
          <MapPin className="h-10 w-10 text-amber-500 relative z-10" />
        </div>
      ),
      icon: <MapPin className="h-4 w-4 text-amber-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Data & AI focus",
      description: "Exploring Python, machine learning models, and big data architectures.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-tr from-blue-500/20 to-neutral-900 border border-white/5 items-center justify-center">
          <Database className="h-10 w-10 text-blue-500/50" />
        </div>
      ),
      icon: <Database className="h-4 w-4 text-blue-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Cloud & Security",
      description: "Building resilient cloud-native systems with deep understanding of cybersecurity.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-tl from-emerald-500/20 to-neutral-900 border border-white/5 items-center justify-center">
          <Cloud className="h-10 w-10 text-emerald-500/50" />
        </div>
      ),
      icon: <Cloud className="h-4 w-4 text-emerald-500" />,
      className: "md:col-span-2",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          About{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
