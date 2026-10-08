import { useRef } from "react"
import { ExternalLink, Code } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Magnetic } from "@/components/ui/magnetic"
import { projects, type Project } from "@/data/projects"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!cardRef.current) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
      })

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            ease: "power2.inOut",
            duration: 1.5,
          }
        )
      }

      if (contentRef.current) {
        gsap.from(contentRef.current.querySelectorAll(".reveal-item"), {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
          },
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        })
      }
    },
    { scope: cardRef }
  )

  // Alternate layout direction for visual variety
  const isReversed = index % 2 !== 0

  return (
    <div
      ref={cardRef}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-start ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Large Pinned Image */}
      <div className="w-full lg:w-2/3 h-[50vh] lg:h-[70vh] relative bg-zinc-100 rounded-xl overflow-hidden">
        <div ref={imageRef} className="absolute inset-0 w-full h-full">
          <img
            src={project.image}
            srcSet={project.imageSrcSet}
            sizes="(max-width: 1024px) 100vw, 66vw"
            alt={project.title === "Tx-Recon" ? "tx-recon reconciliation dashboard" : project.title}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            decoding="async"
            width={1600}
            height={1024}
          />
        </div>
      </div>

      {/* Details */}
      <div
        ref={contentRef}
        className="w-full lg:w-1/3 flex flex-col justify-center lg:sticky lg:top-32 space-y-8"
      >
        <h3 className="text-3xl lg:text-4xl font-bold text-[#1c1c1c] leading-tight reveal-item">
          {project.title}
        </h3>

        <ul className="text-zinc-600 text-lg leading-relaxed space-y-2 list-disc pl-6 reveal-item">
          {project.description.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 reveal-item">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1c1c1c] border-2 border-[#1c1c1c] rounded-md shadow-[2px_2px_0px_0px_rgba(28,28,28,1)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-4 reveal-item">
          {project.liveUrl && (
            <Magnetic intensity={0.2}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-bold text-lg text-[#e34234] hover:text-[#1c1c1c] transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink size={20} />
              </a>
            </Magnetic>
          )}
          <Magnetic intensity={0.2}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold text-lg text-zinc-500 hover:text-[#1c1c1c] transition-colors"
            >
              <span>Source</span>
              <Code size={20} />
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] uppercase tracking-tight">
            FEATURED PROJECTS
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
