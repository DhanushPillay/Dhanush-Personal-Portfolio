import { motion } from "framer-motion"
import { ExternalLink, Code } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const projects = [
  {
    title: "LifeLink",
    description: "A full-stack Blood and Organ Donor Matching platform with real-time donor search, hospital connectivity, JWT authentication, and WebSocket messaging.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop",
    tags: ["React 19", "Express", "MongoDB", "Socket.IO"],
    liveUrl: "#",
    githubUrl: "#",
    colSpan: "md:col-span-1"
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
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-amber-500/60 font-mono text-xs uppercase tracking-[0.4em] mb-4 text-center">
            [04] — Work
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-center text-white tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="h-full group flex flex-col overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500">
                  
                  {/* Image Container with Hover Overlay */}
                  <div className="relative w-full aspect-video bg-zinc-900 border-b border-white/10 overflow-hidden flex-shrink-0">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-950/80 backdrop-blur-sm border-b border-white/10 flex items-center px-3 gap-1.5 z-20">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark gradient overlay always visible for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    
                    {/* Hover text overlay */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none z-10">
                      <p className="text-zinc-300 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col p-6 z-20 bg-zinc-950/50">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium rounded bg-white/5 text-amber-500/80 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-500 hover:text-amber-400 text-sm font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Visit
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <Code size={14} />
                        Source
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
