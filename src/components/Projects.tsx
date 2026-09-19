import { useRef } from "react"
import { ExternalLink, Code } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Magnetic } from "@/components/ui/magnetic"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type Project = {
  title: string
  description: string
  image: string
  imageSrcSet?: string
  tags: string[]
  liveUrl?: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "Tx-Recon",
    description:
      "Engineered a transaction reconciliation pipeline capable of processing 162k rows/sec with 100% accuracy (0 false positives) by integrating Redpanda streaming, Apache Iceberg MERGE, and Pandera validation. Eliminated floating-point financial drift by implementing integer-only paise math for webhook and settlement comparisons.",
    image: "/projects/tx-recon-dashboard.webp",
    imageSrcSet: "/projects/tx-recon-dashboard-800.webp 800w, /projects/tx-recon-dashboard.webp 1600w",
    tags: ["PYTHON", "SPARK", "ICEBERG", "KAFKA", "DOCKER"],
    githubUrl: "https://github.com/DhanushPillay/tx-recon",
  },
  {
    title: "Tech News Aggregator",
    description:
      "Aggregated real-time tech news from 5 distinct sources by developing a concurrent scraping engine and integrating SQLite FTS5 for full-text search. Enhanced content discoverability by implementing automated NLP enrichment pipelines via APScheduler.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=70&w=1200&auto=format&fit=crop",
    tags: ["PYTHON", "FLASK", "SQLITE", "NLP", "BS4"],
    liveUrl: "https://sniffer-vfru.onrender.com/",
    githubUrl: "https://github.com/DhanushPillay",
  },
]

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

        <p className="text-zinc-600 text-lg leading-relaxed reveal-item">
          {project.description}
        </p>

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
