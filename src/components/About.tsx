import { motion } from "framer-motion"
import { Database, Cloud, Code, MapPin } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function About() {
  const cards = [
    {
      title: "Passionate Developer",
      description: "I love turning complex problems into elegant, scalable solutions. Always curious. Always coding.",
      icon: <Code className="h-6 w-6 text-amber-500" />,
      colSpan: "md:col-span-2",
      stat: "5+",
      statLabel: "Projects Built",
    },
    {
      title: "Based in Pune, India",
      description: "Currently pursuing B.Tech at MIT-ADT University, building global solutions.",
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
      colSpan: "md:col-span-1",
      stat: "2025",
      statLabel: "Since",
    },
    {
      title: "Data & AI Focus",
      description: "Architecting machine learning pipelines, RAG systems, and robust data infrastructures.",
      icon: <Database className="h-6 w-6 text-amber-500" />,
      colSpan: "md:col-span-1",
      stat: "ML",
      statLabel: "Specialty",
    },
    {
      title: "Cloud & Security",
      description: "Building highly available, resilient cloud-native systems with a deep, uncompromising focus on cybersecurity.",
      icon: <Cloud className="h-6 w-6 text-amber-500" />,
      colSpan: "md:col-span-2",
      stat: "22+",
      statLabel: "Certifications",
    },
  ]

  return (
    <section id="about" className="py-20 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >

          <h2 className="text-5xl md:text-7xl font-bold text-center text-white tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Custom CSS Grid instead of buggy third-party BentoGrid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`h-full ${card.colSpan}`}
            >
              <SpotlightCard className="h-full flex flex-col p-6 group border-l-[3px] border-l-transparent hover:border-l-amber-500 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right flex-shrink-0">
                    <div className="text-2xl font-black text-amber-500">{card.stat}</div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono mt-0.5">{card.statLabel}</div>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mt-auto">
                  {card.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
