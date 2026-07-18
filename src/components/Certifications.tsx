import { useEffect } from "react"
import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ExternalLink } from "lucide-react"

const badges = [
  "8bd1785b-33ee-4700-890c-7595911e7cad",
  "ce14c476-3163-4337-bad9-8956a8a87fe6",
  "fc07c0cc-6aba-4f9f-8ffb-40bdec1616f8",
  "784c4883-68ae-4bfb-8f1e-2749922e7bc0",
  "90e38dd3-4100-4bb4-b458-90cd5a1f739a",
  "bbfb8b9c-d9c5-4d42-8937-d41d3f98839c",
  "c2808b2b-c3a8-4d28-a79c-d53e67870c07",
  "8e2e36c8-1d3f-46e6-b6e6-27b30887e1fc",
  "02e343ac-1ba5-41b0-ae05-b6d867d69177",
  "9f29e4ba-3b53-48f2-8bd4-48647a7791c8",
  "d1078748-6b96-49f6-9f0e-a75aee250a10",
  "9730c6c5-901c-4118-a676-bcc6ce7d590b",
]

export default function Certifications() {
  useEffect(() => {
    // Dynamically load the Credly embed script
    const script = document.createElement("script")
    script.src = "//cdn.credly.com/assets/utilities/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup to prevent duplicate scripts on re-renders
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="certifications" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white tracking-tight"
        >
          Valuable{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Credentials
          </span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {badges.map((badgeId, index) => (
            <motion.div
              key={badgeId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-auto"
            >
              <SpotlightCard className="p-6 flex flex-col items-center justify-center min-h-[300px] w-full sm:w-[280px] bg-black border border-white/10 hover:border-amber-500/50 transition-colors shadow-lg">
                <div 
                  data-iframe-width="200" 
                  data-iframe-height="300" 
                  data-share-badge-id={badgeId} 
                  data-share-badge-host="https://www.credly.com"
                />
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://www.credly.com/users/dhanush-pillay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:-translate-y-1"
          >
            View all 16 credentials on Credly
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
