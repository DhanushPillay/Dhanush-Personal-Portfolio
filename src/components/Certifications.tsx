import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ExternalLink, Award } from "lucide-react"

// Mapped from your Credly profile for a native, custom UI
const credentials = [
  {
    id: "c2808b2b-c3a8-4d28-a79c-d53e67870c07",
    title: "Develop Serverless Applications on Cloud Run",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "9f29e4ba-3b53-48f2-8bd4-48647a7791c8",
    title: "Manage Kubernetes in Google Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "fc07c0cc-6aba-4f9f-8ffb-40bdec1616f8",
    title: "Streaming Analytics into BigQuery",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "8e2e36c8-1d3f-46e6-b6e6-27b30887e1fc",
    title: "Implement CI/CD Pipelines on Google Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "02e343ac-1ba5-41b0-ae05-b6d867d69177",
    title: "Machine Learning with Python (V2)",
    issuer: "Coursera",
    image: "/logos/coursera.svg",
  },
  {
    id: "bbfb8b9c-d9c5-4d42-8937-d41d3f98839c",
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/logos/ibm.svg",
  },
  {
    id: "784c4883-68ae-4bfb-8f1e-2749922e7bc0",
    title: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
  },
  {
    id: "90e38dd3-4100-4bb4-b458-90cd5a1f739a",
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
  },
  {
    id: "d1078748-6b96-49f6-9f0e-a75aee250a10",
    title: "Networking Basics",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
  },
  {
    id: "9730c6c5-901c-4118-a676-bcc6ce7d590b",
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "8bd1785b-33ee-4700-890c-7595911e7cad",
    title: "Share Data Using Google Data Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "ce14c476-3163-4337-bad9-8956a8a87fe6",
    title: "Store, Process, and Manage Data",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white tracking-tight"
        >
          Certifications &{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Badges
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {credentials.map((cred, index) => (
              <motion.a
                key={cred.id}
                href={`https://www.credly.com/badges/${cred.id}/public_url`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group block h-full"
              >
                <SpotlightCard className="h-full p-6 flex flex-col items-start justify-between bg-zinc-950 border border-white/10 group-hover:border-amber-500/50 transition-colors">
                  <div className="w-full flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-all duration-300 h-14 w-14 flex items-center justify-center">
                      <img src={cred.image} alt={cred.issuer} className="w-8 h-8 object-contain" />
                    </div>
                    <ExternalLink size={18} className="text-zinc-600 group-hover:text-amber-400 transition-colors" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">
                      {cred.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-zinc-400" />
                      <p className="text-sm font-medium text-zinc-400">{cred.issuer}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.a>
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
