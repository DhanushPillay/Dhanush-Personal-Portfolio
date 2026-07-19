import { motion } from "framer-motion"
import { Brain, Shield, Globe, Database, FileText, Eye, Fingerprint, Network, Cpu, Lock, Cloud, Code, Braces, Binary, Zap, Key } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

// Helper to get skillicons.dev URL
const getIcon = (name: string) => `https://skillicons.dev/icons?i=${name}`

type Skill = { name: string; level?: string; icon?: string; lucide?: React.ReactNode }
type SkillCategory = { title: string; skills: Skill[] }

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: "Strong", icon: getIcon("python") },
      { name: "JavaScript", level: "Solid", icon: getIcon("js") },
      { name: "TypeScript", level: "Learning", icon: getIcon("ts") },
      { name: "HTML/CSS", level: "Strong", icon: getIcon("html") },
      { name: "Rust", level: "Exposure", icon: getIcon("rust") },
      { name: "SQL", level: "Working", icon: getIcon("mysql") },
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", icon: getIcon("pytorch") },
      { name: "Transformers", lucide: <Cpu size={16} /> },
      { name: "Groq LLaMA", lucide: <Zap size={16} /> },
      { name: "FAISS", lucide: <Database size={16} /> },
      { name: "KNN", lucide: <Network size={16} /> },
      { name: "Sentence-Transformers", lucide: <FileText size={16} /> },
      { name: "Pandas", icon: getIcon("pandas") },
      { name: "NumPy", icon: getIcon("numpy") },
      { name: "OpenCV", icon: getIcon("opencv") },
      { name: "Matplotlib", lucide: <Eye size={16} /> },
      { name: "Librosa", lucide: <Binary size={16} /> },
      { name: "NLTK", lucide: <FileText size={16} /> },
    ]
  },
  {
    title: "Web & Data",
    skills: [
      { name: "Node.js", icon: getIcon("nodejs") },
      { name: "Express", icon: getIcon("express") },
      { name: "MongoDB", icon: getIcon("mongodb") },
      { name: "Flask", icon: getIcon("flask") },
      { name: "FastAPI", icon: getIcon("fastapi") },
      { name: "Tailwind CSS", icon: getIcon("tailwind") },
      { name: "Socket.IO", lucide: <Network size={16} /> },
      { name: "BeautifulSoup", lucide: <Code size={16} /> },
      { name: "Fabric.js", lucide: <Braces size={16} /> },
    ]
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "Google Cloud", icon: getIcon("gcp") },
      { name: "AWS", icon: getIcon("aws") },
      { name: "Docker", icon: getIcon("docker") },
      { name: "Kubernetes", icon: getIcon("kubernetes") },
      { name: "Nginx", icon: getIcon("nginx") },
      { name: "GitHub Actions", icon: getIcon("githubactions") },
      { name: "Vercel", icon: getIcon("vercel") },
      { name: "Netlify", icon: getIcon("netlify") },
      { name: "Render", lucide: <Cloud size={16} /> },
      { name: "Hugging Face", lucide: <Brain size={16} /> },
    ]
  },
  {
    title: "Tools & Security",
    skills: [
      { name: "Git", icon: getIcon("git") },
      { name: "Linux", icon: getIcon("linux") },
      { name: "VS Code", icon: getIcon("vscode") },
      { name: "Figma", icon: getIcon("figma") },
      { name: "JWT", lucide: <Lock size={16} /> },
      { name: "Google OAuth", lucide: <Key size={16} /> },
    ]
  }
]

const domains = [
  { name: "AI / Machine Learning", icon: <Brain size={18} /> },
  { name: "Cybersecurity", icon: <Shield size={18} /> },
  { name: "Web Development", icon: <Globe size={18} /> },
  { name: "Data Science", icon: <Database size={18} /> },
  { name: "NLP", icon: <FileText size={18} /> },
  { name: "Computer Vision", icon: <Eye size={18} /> },
  { name: "Adversarial ML", icon: <Network size={18} /> },
  { name: "Deepfake Detection", icon: <Fingerprint size={18} /> },
  { name: "RAG", icon: <Database size={18} /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black relative">
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
            [02] — Capabilities
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-center text-white tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* Full-width Domains Section moved to top for prominence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <SpotlightCard className="p-8 border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)]">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="md:w-1/3">
                <h3 className="text-3xl font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent mb-2 tracking-tight">Core Domains</h3>
                <p className="text-zinc-400 text-sm">Specialized areas of focus spanning artificial intelligence, modern web infrastructure, and data security.</p>
              </div>
              <div className="md:w-2/3 flex flex-wrap gap-3">
                {domains.map((domain) => (
                  <div
                    key={domain.name}
                    className="group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-amber-500/5 text-zinc-200 border border-amber-500/10 hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300 cursor-default"
                  >
                    <span className="text-amber-500 group-hover:scale-110 transition-all duration-300">
                      {domain.icon}
                    </span>
                    {domain.name}
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-6">
                <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-white/10">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 text-zinc-300 border border-white/10 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300 cursor-default"
                    >
                      {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4 rounded-sm group-hover:scale-110 transition-transform duration-300" />}
                      {skill.lucide && <span className="text-zinc-400 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 w-4 h-4 flex items-center justify-center">{skill.lucide}</span>}
                      <span>{skill.name}</span>
                      {skill.level && (
                        <div className="flex gap-0.5 ml-1 opacity-50 group-hover:opacity-100 transition-opacity">
                          {[1, 2, 3].map((dot) => {
                            const isFilled = 
                              (skill.level === "Strong" && dot <= 3) ||
                              ((skill.level === "Solid" || skill.level === "Working") && dot <= 2) ||
                              ((skill.level === "Learning" || skill.level === "Exposure") && dot === 1);
                            return (
                              <div key={dot} className={`w-1 h-1 rounded-full ${isFilled ? "bg-amber-400" : "bg-white/20"}`} />
                            )
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
