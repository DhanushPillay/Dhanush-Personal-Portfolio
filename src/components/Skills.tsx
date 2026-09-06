import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type SkillCategory = {
  title: string
  skills: string[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    color: "#e34234",
    skills: ["Python", "SQL", "Rust", "TypeScript"],
  },
  {
    title: "AI & ML",
    color: "#0274b3",
    skills: [
      "PyTorch",
      "Transformers",
      "FAISS",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Groq LLaMA"
    ],
  },
  {
    title: "Data & Web",
    color: "#fbbf24",
    skills: [
      "FastAPI",
      "Flask",
      "MongoDB",
      "PostgreSQL",
      "BeautifulSoup",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "#22c55e",
    skills: [
      "Google Cloud",
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    title: "Core",
    color: "#a855f7",
    skills: [
      "Linux",
      "Git",
      "Bash",
    ],
  },
]

// Flatten all skills into a single array for the sandbox
const allSkills = skillCategories.flatMap(cat => 
  cat.skills.map(skill => ({
    name: skill,
    category: cat.title,
    color: cat.color
  }))
)

export default function Skills() {
  const constraintsRef = useRef<HTMLElement>(null)
  const isInView = useInView(constraintsRef, { once: true, margin: "-20%" })

  return (
    <section 
      ref={constraintsRef}
      id="skills" 
      className="py-24 md:py-32 bg-[#f5f5f7] relative min-h-[80vh] md:min-h-[100vh] overflow-hidden border-t-[8px] border-b-[8px] border-[#1c1c1c] flex flex-col"
      style={{
        backgroundImage: "radial-gradient(#1c1c1c 2px, transparent 2px)",
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0"
      }}
    >
      
      {/* Massive Background Watermark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-5 leading-none">
        <span className="text-[10rem] md:text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap">
          SKILLS
        </span>
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full mb-12">
        <h2 className="text-5xl md:text-8xl font-black text-[#1c1c1c] tracking-tighter uppercase leading-none">
          Tech Skills.
        </h2>
        <p className="text-xl md:text-2xl text-[#1c1c1c] font-bold mt-4 uppercase tracking-wider">
          Grab a block. Throw it around.
        </p>
      </div>

      {/* Physics Sandbox Container */}
      <div className="flex-1 relative w-full h-full p-4 md:p-12 flex flex-wrap gap-4 md:gap-6 justify-center content-center z-20">
        {allSkills.map((skill, idx) => (
          <motion.div
            key={`${skill.category}-${skill.name}`}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.4}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ y: -500, opacity: 0, rotate: Math.random() * 40 - 20, scale: 0.8 }}
            animate={isInView ? { y: 0, opacity: 1, rotate: 0, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: idx * 0.02, // Stagger them so it looks like a pile falling
            }}
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 1.1, zIndex: 50, rotate: Math.random() * 10 - 5 }}
            className="cursor-grab active:cursor-grabbing px-5 py-3 md:px-8 md:py-5 bg-white border-[4px] border-[#1c1c1c] shadow-[6px_6px_0px_#1c1c1c] md:shadow-[8px_8px_0px_#1c1c1c] rounded-xl select-none flex flex-col items-center justify-center"
            style={{
              borderBottomColor: skill.color,
              borderBottomWidth: "8px"
            }}
          >
            <span className="text-xl md:text-3xl font-black text-[#1c1c1c] uppercase tracking-tight pointer-events-none">
              {skill.name}
            </span>
            <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1 pointer-events-none">
              {skill.category}
            </span>
          </motion.div>
        ))}
      </div>
      
    </section>
  )
}
