import { motion } from "framer-motion"
import { ExternalLink, Award, ChevronRight } from "lucide-react"

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
  {
    id: "google-generative-ai",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "google-network-architecture",
    title: "Networking in Google Cloud Network Architecture",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
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
    id: "aws-billing-cost",
    title: "AWS Billing and Cost Management",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
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
    id: "d1078748-6b96-49f6-9f0e-a75aee250a10",
    title: "Networking Basics",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
  },
  {
    id: "cisco-intro-cyber",
    title: "Intro to Cybersecurity",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
  },
  {
    id: "oracle-ai-foundations-associate",
    title: "AI Foundations Associate",
    issuer: "Oracle",
    image: "/logos/oracle.svg",
  },
  {
    id: "oracle-foundations-associate",
    title: "Foundations Associate",
    issuer: "Oracle",
    image: "/logos/oracle.svg",
  },
  {
    id: "nvidia-ai-jetson",
    title: "AI & Jetson Nano",
    issuer: "NVIDIA",
    image: "/logos/nvidia.svg",
  },
  {
    id: "forage-aws",
    title: "AWS Solutions Architecture - Job Simulation",
    issuer: "Forage",
    image: "/logos/forage.svg",
  },
  {
    id: "forage-deloitte",
    title: "Deloitte Cyber - Job Simulation",
    issuer: "Forage",
    image: "/logos/forage.svg",
  },
  {
    id: "forage-verizon",
    title: "Verizon Cloud Platform - Job Simulation",
    issuer: "Forage",
    image: "/logos/forage.svg",
  },
]

// Group credentials by issuer, maintaining insertion order
function groupByIssuer(creds: typeof credentials) {
  const groups: { issuer: string; image: string; items: typeof credentials }[] = []
  const map = new Map<string, typeof credentials>()

  for (const cred of creds) {
    if (!map.has(cred.issuer)) {
      const items: typeof credentials = []
      map.set(cred.issuer, items)
      groups.push({ issuer: cred.issuer, image: cred.image, items })
    }
    map.get(cred.issuer)!.push(cred)
  }

  return groups
}

const grouped = groupByIssuer(credentials)

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-zinc-950 relative">
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
            [03] — Credentials
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-center text-white tracking-tight">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Badges
            </span>
          </h2>
        </motion.div>

        {/* Provider Groups */}
        <div className="space-y-12 mb-16">
          {grouped.map((group, groupIndex) => (
            <motion.div
              key={group.issuer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              {/* Provider Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 h-11 w-11 flex items-center justify-center flex-shrink-0">
                  <img src={group.image} alt={group.issuer} className="w-6 h-6 object-contain" />
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">{group.issuer}</h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500/60 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    {group.items.length} {group.items.length === 1 ? "cert" : "certs"}
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
              </div>

              {/* Horizontal Scroll Row */}
              <div className="relative group/scroll">
                {/* Right fade mask */}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div
                  className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {group.items.map((cred) => (
                    <a
                      key={cred.id}
                      href={`https://www.credly.com/badges/${cred.id}/public_url`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-shrink-0 snap-start"
                    >
                      <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 hover:bg-amber-500/[0.05] transition-all duration-300 w-[280px]">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-zinc-200 group-hover:text-amber-400 transition-colors truncate leading-snug">
                            {cred.title}
                          </p>
                        </div>
                        <ChevronRight size={14} className="text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
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
            <Award size={18} />
            View all credentials on Credly
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
