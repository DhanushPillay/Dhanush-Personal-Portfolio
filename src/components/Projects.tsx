import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { ExternalLink, Globe } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-button"

gsap.registerPlugin(ScrollTrigger, SplitText)

const projects = [
  {
    title: "VaticMacro",
    description: "An inflation forecasting system ingesting 7 macroeconomic indicators to predict India's YoY inflation 1 month ahead. Engineered a 35-feature pipeline avoiding lookahead bias.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    tags: ["PyTorch", "Transformers", "GridSearchCV", "Flask", "JSON REST"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "LifeLink",
    description: "A full-stack Blood and Organ Donor Matching platform with real-time donor search, hospital-patient connectivity, and live presence tracking.",
    image: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=2070&auto=format&fit=crop",
    tags: ["React 19", "Vite", "Express.js", "MongoDB", "Socket.IO", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smartsheti",
    description: "A comprehensive agricultural platform empowering Maharashtra farmers with intelligent crop recommendations, real-time weather monitoring, pest risk analysis, and live market prices.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    tags: ["JavaScript", "Python", "Flask", "Tailwind CSS"],
    liveUrl: "https://smartsheti-rho.vercel.app",
    githubUrl: "https://github.com/DhanushPillay/Smartsheti",
  },
  {
    title: "Tech News Aggregator",
    description: "A Flask application that collects technology stories from 5 major sources, enriches data with NLP metadata, and serves a searchable dashboard.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    tags: ["Python", "Flask", "SQLite", "NLP"],
    liveUrl: "https://sniffer-vfru.onrender.com/",
    githubUrl: "https://github.com/DhanushPillay/Web-scraper",
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current || !wrapperRef.current) return

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

      // Horizontal Scroll Logic
      const sections = gsap.utils.toArray(".project-panel")
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (wrapperRef.current?.offsetWidth || 0) * 2,
        }
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="projects" className="bg-black relative">
      <div className="pt-20 px-6 max-w-6xl mx-auto absolute w-full left-0 right-0 z-10">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-center text-white"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      <div ref={wrapperRef} className="h-screen w-[400vw] flex flex-nowrap items-center overflow-hidden">
        {projects.map((project, i) => (
          <div key={i} className="project-panel w-screen h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <div className="relative aspect-video rounded-3xl overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h3>
                <p className="text-zinc-400 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <LiquidButton size="lg" variant="default">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </LiquidButton>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <LiquidButton size="lg" variant="outline">
                      <Globe className="w-5 h-5 mr-2" />
                      View Code
                    </LiquidButton>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
