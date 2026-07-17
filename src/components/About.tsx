import { motion } from "framer-motion"
import { Database, Cloud, Code, MapPin, Sparkles } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function About() {
  const cards = [
    {
      title: "Passionate Developer",
      description: "I love turning complex problems into elegant, scalable solutions. Always curious. Always coding.",
      icon: <Code className="h-6 w-6 text-amber-500" />,
      colSpan: "md:col-span-2",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[120px] rounded-xl bg-gradient-to-br from-amber-500/10 via-black to-zinc-900 border border-white/5 items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Code className="h-12 w-12 text-amber-500/50 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-500 z-10" />
          <Sparkles className="absolute top-4 right-4 h-5 w-5 text-amber-500/30 group-hover:text-amber-400 animate-pulse" />
        </div>
      ),
    },
    {
      title: "Based in Pune, India",
      description: "Currently pursuing B.Tech at MIT-ADT University, building global solutions.",
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
      colSpan: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[120px] rounded-xl bg-zinc-900 border border-white/5 items-center justify-center overflow-hidden relative group">
          {/* Stylized Campus Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"></div>
          
          {/* Radar / Pulsing Pin effect */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-amber-500/20 rounded-full animate-ping" />
            <div className="absolute w-16 h-16 bg-amber-500/10 rounded-full animate-pulse" />
            <MapPin className="h-10 w-10 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
          </div>
        </div>
      ),
    },
    {
      title: "Data & AI Focus",
      description: "Architecting machine learning pipelines, RAG systems, and robust data infrastructures.",
      icon: <Database className="h-6 w-6 text-amber-500" />,
      colSpan: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[120px] rounded-xl bg-gradient-to-tr from-amber-500/10 to-zinc-900 border border-white/5 items-center justify-center relative overflow-hidden group">
          <Database className="h-12 w-12 text-amber-500/50 group-hover:text-amber-400 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 z-10" />
        </div>
      ),
    },
    {
      title: "Cloud & Security",
      description: "Building highly available, resilient cloud-native systems with a deep, uncompromising focus on cybersecurity.",
      icon: <Cloud className="h-6 w-6 text-amber-500" />,
      colSpan: "md:col-span-2",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[120px] rounded-xl bg-gradient-to-tl from-amber-500/10 to-zinc-900 border border-white/5 items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Cloud className="h-12 w-12 text-amber-500/50 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-500 z-10" />
        </div>
      ),
    },
  ]

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white tracking-tight"
        >
          About{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

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
              <SpotlightCard className="h-full flex flex-col p-6 group">
                <div className="mb-6 w-full">
                  {card.header}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
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
