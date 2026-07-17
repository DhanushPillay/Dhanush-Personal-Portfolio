import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, SplitText)

const education = [
  {
    degree: "B.Tech in Computer Science",
    specialization: "Big Data & Cloud Computing",
    institution: "MIT-ADT University",
    location: "Pune, India",
    period: "2022 - 2026",
    coursework: [
      "Big Data Analytics",
      "Cloud Computing",
      "Distributed Systems",
      "Data Warehousing",
      "Machine Learning",
      "Database Management",
      "Cybersecurity",
      "Web Development",
    ],
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)

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

      if (cardRef.current) {
        gsap.from(cardRef.current, {
          opacity: 0,
          x: -60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        })
      }

      if (tagsRef.current) {
        gsap.from(tagsRef.current.children, {
          opacity: 0,
          scale: 0.5,
          y: 20,
          stagger: 0.06,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: tagsRef.current,
            start: "top 85%",
          },
        })
      }
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              ref={cardRef}
              className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-amber-400 font-medium mb-3">
                    {edu.specialization}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-zinc-400">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-300 mb-3">
                      Relevant Coursework:
                    </h4>
                    <div ref={tagsRef} className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-white/[0.05] text-zinc-300 text-sm rounded-full border border-white/10 hover:border-amber-500/30 transition-colors duration-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
