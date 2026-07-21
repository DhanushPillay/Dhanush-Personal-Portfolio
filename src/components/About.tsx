import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
          <div className="max-w-3xl space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              I'm a second-year B.Tech student at MIT-ADT in Pune, specializing in Big Data & Cloud Computing. I enjoy building software that solves real problems, particularly focusing on data and machine learning.
            </p>
            <p>
              Whether it's forecasting inflation using macroeconomic indicators or building a real-time organ donor matching platform, I like taking complex challenges and turning them into functional systems. Right now, I'm diving deeper into PyTorch and actively pursuing cloud certifications to strengthen my backend and infrastructure skills.
            </p>
          </div>
        </motion.div>

        {/* Stat strip — horizontal, minimal, no glowing cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8"
        >
          {[
            { value: "20+", label: "Projects shipped" },
            { value: "22+", label: "Certifications" },
            { value: "Pune", label: "Based in" },
            { value: "Data & Cloud", label: "Specialization" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
