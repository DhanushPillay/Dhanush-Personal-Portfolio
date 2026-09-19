import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Cloud, Brain, Server } from "lucide-react"

type Domain = {
  title: string
  icon: React.ElementType
  color: string
  skills: string[]
}

const domains: Domain[] = [
  {
    title: "Data Engineering",
    icon: Database,
    color: "#e34234",
    skills: ["Python", "SQL", "Spark", "Iceberg", "Kafka", "Pandas", "NumPy"],
  },
  {
    title: "Cloud & Infra",
    icon: Cloud,
    color: "#0274b3",
    skills: ["Google Cloud", "AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "ML & Analytics",
    icon: Brain,
    color: "#a855f7",
    skills: ["PyTorch", "Transformers", "Scikit-learn", "OpenCV", "LLMs"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "#22c55e",
    skills: ["FastAPI", "Flask", "PostgreSQL", "MongoDB", "Rust"],
  },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      id="skills" 
      className="py-24 md:py-32 bg-[#f5f5f7] relative overflow-hidden"
    >
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] tracking-tight uppercase">
          TECHNICAL DOMAINS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="bg-white border-2 border-[#1c1c1c] rounded-2xl p-8 shadow-[8px_8px_0px_#1c1c1c] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#1c1c1c] transition-all duration-300 group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div 
                  className="w-16 h-16 rounded-xl border-2 border-[#1c1c1c] flex items-center justify-center bg-[#f5f5f7] group-hover:rotate-6 transition-transform duration-300"
                  style={{ color: domain.color }}
                >
                  <domain.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1c1c1c] uppercase tracking-wide">
                  {domain.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {domain.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-[#f5f5f7] border-2 border-[#1c1c1c] text-[#1c1c1c] font-bold text-sm uppercase tracking-widest rounded-lg shadow-[2px_2px_0px_#1c1c1c]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
