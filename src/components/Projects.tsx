import { motion } from "framer-motion"
import { ExternalLink, Code } from "lucide-react"

const projects = [
  {
    title: "LifeLink",
    description: "Full-stack Blood & Organ Donor Matching platform with real-time donor search, hospital connectivity, JWT auth, and WebSocket messaging.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop",
    tags: ["React 19", "Express", "MongoDB", "Socket.IO"],
    liveUrl: "https://blood-and-organ-donar-matching-syst.vercel.app/",
    githubUrl: "https://github.com/DhanushPillay/LifeLink",
  },
  {
    title: "VaticMacro",
    description: "Inflation forecasting system ingesting 7 macroeconomic indicators to predict India's YoY inflation 1 month ahead. 35-feature pipeline avoiding lookahead bias.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2071&auto=format&fit=crop",
    tags: ["PyTorch", "Transformers", "Flask"],
    liveUrl: "https://vaticmacro.onrender.com/#command-center",
    githubUrl: "https://github.com/DhanushPillay/VaticMacro",
  },
  {
    title: "Tech News Aggregator",
    description: "Flask app aggregating tech news from 5 sources. Concurrent scraping, SQLite FTS5 full-text search, and NLP enrichment via APScheduler.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Python", "Flask", "SQLite", "NLP"],
    liveUrl: "https://sniffer-vfru.onrender.com/",
    githubUrl: "https://github.com/DhanushPillay",
  },
  {
    title: "SmartSheti",
    description: "Agricultural decision support for Maharashtra farmers — crop recommendations, pest risk analysis, and real-time market price tracking.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    tags: ["JavaScript", "Python", "Flask", "Tailwind CSS"],
    liveUrl: "https://smartsheti-rho.vercel.app/",
    githubUrl: "https://github.com/DhanushPillay/Smartsheti",
  },
  {
    title: "PixBooth",
    description: "Web-based photobooth — WebRTC camera, real-time vintage filters, Fabric.js canvas editor, and an IndexedDB scattered-polaroid gallery.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
    tags: ["Vanilla JS", "Fabric.js", "IndexedDB"],
    liveUrl: "https://pixb00th.netlify.app/",
    githubUrl: "https://github.com/DhanushPillay/PixBooth",
  },
  {
    title: "VisioNova",
    description: "Deepfake & Misinformation Defense Grid. Detects deepfakes and defends against digital misinformation using adversarial ML.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    tags: ["Python", "AI", "Cybersecurity"],
    liveUrl: "https://visio-nova.vercel.app",
    githubUrl: "https://github.com/DhanushPillay/VisioNova",
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-zinc-400 text-lg">
            Recent work and personal explorations. ({projects.length} featured)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              {/* Image — clean, no fake window chrome */}
              <div className="relative w-full aspect-[16/10] bg-zinc-900 rounded-xl overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content — description visible by default, not hidden in a hover overlay */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0 pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                      className="text-zinc-500 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="text-zinc-500 hover:text-white transition-colors duration-200"
                    >
                      <Code size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono rounded bg-white/[0.04] text-zinc-500 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
