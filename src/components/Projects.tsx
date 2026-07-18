import { motion } from "framer-motion"
import { ExternalLink, Code } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const projects = [
  {
    title: "LifeLink",
    description: "A full-stack Blood and Organ Donor Matching platform with real-time donor search, hospital connectivity, JWT authentication, and WebSocket messaging.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["React 19", "Express", "MongoDB", "Socket.IO"],
    liveUrl: "#",
    githubUrl: "#",
    colSpan: "md:col-span-2"
  },
  {
    title: "VaticMacro",
    description: "An inflation forecasting system ingesting 7 macroeconomic indicators to predict India's YoY inflation 1 month ahead. Engineered a 35-feature pipeline avoiding lookahead bias.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2071&auto=format&fit=crop",
    tags: ["PyTorch", "Transformers", "Flask"],
    liveUrl: "https://vaticmacro.onrender.com/#command-center",
    githubUrl: "#",
    colSpan: "md:col-span-1"
  },
  {
    title: "Tech News Aggregator",
    description: "A Flask application aggregating tech news from 5 major sources. Features concurrent scraping, SQLite FTS5 full-text search, and NLP enrichment via APScheduler.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Python", "Flask", "SQLite", "NLP"],
    liveUrl: "https://sniffer-vfru.onrender.com/",
    githubUrl: "#",
    colSpan: "md:col-span-1"
  },
  {
    title: "SmartSheti",
    description: "Agricultural decision support platform for Maharashtra farmers providing crop recommendations, pest risk analysis, and real-time market price tracking.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    tags: ["JavaScript", "Python", "Flask", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    colSpan: "md:col-span-1"
  },
  {
    title: "PixBooth",
    description: "Web-based photobooth with WebRTC camera access, real-time vintage filters, Fabric.js canvas editor, and an IndexedDB scattered-polaroid masonry gallery.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
    tags: ["Vanilla JS", "Fabric.js", "IndexedDB"],
    liveUrl: "#",
    githubUrl: "#",
    colSpan: "md:col-span-1"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white tracking-tight"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`h-full ${project.colSpan}`}
            >
              <SpotlightCard className="h-full group flex flex-col p-6">
                
                {/* Browser Mockup Image Container */}
                <div className="relative w-full aspect-video rounded-xl bg-zinc-900 border border-white/10 overflow-hidden mb-6 flex-shrink-0">
                  {/* MacOS Style Browser Header */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-950/80 backdrop-blur-sm border-b border-white/10 flex items-center px-3 gap-1.5 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                <div className="flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-amber-500/80 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-amber-500 hover:text-black px-4 py-2 rounded-lg transition-all duration-300 border border-white/10 hover:border-amber-500 shadow-[0_0_0_rgba(245,158,11,0)] hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white px-4 py-2 rounded-lg transition-colors hover:bg-white/10"
                    >
                      <Code size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
