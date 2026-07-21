import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const getIcon = (name: string) => `https://skillicons.dev/icons?i=${name}`

type Skill = { name: string; icon?: string }
type SkillCategory = {
  title: string
  description: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "The foundations I think in",
    skills: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "HTML/CSS", icon: "https://cdn.simpleicons.org/html5" },
      { name: "Rust", icon: "https://cdn.simpleicons.org/rust/white" },
      { name: "SQL", icon: "https://cdn.simpleicons.org/mysql" },
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Where I spend most of my time",
    skills: [
      { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
      { name: "Transformers", icon: "https://cdn.simpleicons.org/huggingface" },
      { name: "Groq LLaMA", icon: "https://cdn.simpleicons.org/meta" },
      { name: "FAISS", icon: "https://cdn.simpleicons.org/meta" },
      { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn" },
      { name: "Sentence-Transformers", icon: "https://cdn.simpleicons.org/huggingface" },
      { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/white" },
      { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/white" },
      { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" },
      { name: "Matplotlib" },
      { name: "Librosa" },
      { name: "NLTK" },
    ]
  },
  {
    title: "Web & Data",
    description: "Full-stack building blocks",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask/white" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Socket.IO", icon: "https://cdn.simpleicons.org/socketdotio/white" },
      { name: "BeautifulSoup" },
      { name: "Fabric.js" },
    ]
  },
  {
    title: "Cloud & Infra",
    description: "Deploying and scaling things",
    skills: [
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/white" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/white" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
      { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/white" },
      { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface" },
    ]
  },
  {
    title: "Tools & Security",
    description: "Day-to-day workflow",
    skills: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
      { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
      { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/white" },
      { name: "Google OAuth", icon: "https://cdn.simpleicons.org/google" },
    ]
  }
]

// Collect all unique icons for the marquee strip
const allIconSkills = Array.from(
  new Map(
    skillCategories
      .flatMap(c => c.skills)
      .filter(s => s.icon)
      .map(s => [s.icon, s])
  ).values()
)

function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-8 mb-12">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex items-center gap-6 md:gap-10 w-max pr-6 md:pr-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {/* Duplicate for seamless loop */}
        {[...allIconSkills, ...allIconSkills].map((skill, i) => (
          <div key={`${skill.name}-${i}`} className="flex-shrink-0 flex items-center justify-center transition-all duration-300 group">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 md:w-12 md:h-12 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              loading="lazy"
              onError={(e) => {
                // If an icon fails to load, hide the whole container to prevent empty gaps
                (e.target as HTMLImageElement).parentElement!.style.display = 'none';
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Tools</h2>
          <p className="text-zinc-400 text-lg">
            Technologies I use to build and deploy applications.
          </p>
        </motion.div>

        {/* Auto-scrolling logo marquee — all tech logos in a strip */}
        <LogoMarquee />

        {/* Category cards — each one has personality */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-6 group">
                {/* Category header */}
                <div className="mb-5">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-500">{category.description}</p>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-[13px] rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-200 cursor-default"
                    >
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt=""
                          className="w-3.5 h-3.5 rounded-sm"
                          loading="lazy"
                        />
                      )}
                      <span>{skill.name}</span>
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
