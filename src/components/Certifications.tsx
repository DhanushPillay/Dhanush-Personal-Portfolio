import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Award, ChevronDown } from "lucide-react"

const credentials = [
  {
    id: "784c4883-68ae-4bfb-8f1e-2749922e7bc0",
    title: "Develop Serverless Applications on Cloud Run",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "c2808b2b-c3a8-4d28-a79c-d53e67870c07",
    title: "Manage Kubernetes in Google Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "9730c6c5-901c-4118-a676-bcc6ce7d590b",
    title: "Streaming Analytics into BigQuery",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "90e38dd3-4100-4bb4-b458-90cd5a1f739a",
    title: "Implement CI/CD Pipelines on Google Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "02e343ac-1ba5-41b0-ae05-b6d867d69177",
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "9f29e4ba-3b53-48f2-8bd4-48647a7791c8",
    title: "Share Data Using Google Data Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "d1078748-6b96-49f6-9f0e-a75aee250a10",
    title: "Store, Process, and Manage Data",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
  },
  {
    id: "google-generative-ai",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    link: "https://www.skills.google/public_profiles/37f1143b-3f88-4139-af4d-1db049b5d440/badges/20885114",
  },
  {
    id: "google-network-architecture",
    title: "Networking in Google Cloud Network Architecture",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    link: "https://www.skills.google/public_profiles/37f1143b-3f88-4139-af4d-1db049b5d440/badges/20884943",
  },
  {
    id: "ce14c476-3163-4337-bad9-8956a8a87fe6",
    title: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
  },
  {
    id: "8bd1785b-33ee-4700-890c-7595911e7cad",
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
  },
  {
    id: "aws-billing-cost",
    title: "AWS Billing and Cost Management",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
    link: "https://drive.google.com/file/d/1Z6M6IWQipGC9ke8Z6UeWPgnns5wV1MUY/view?usp=drivesdk",
  },
  {
    id: "aws-ebadge",
    title: "AWSEBadge",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
    link: "https://drive.google.com/file/d/1hAcePaBoB63rf4Vb0sx5guhgRwJ-s5Xf/view?usp=drivesdk",
  },
  {
    id: "aws-cloud-essentials-assessment",
    title: "Cloud Essentials Knowledge Badge Assessment",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
    link: "https://drive.google.com/file/d/1SvQQfNlWgC9Tk14LQf7hSDssGoDE-w1r/view?usp=drivesdk",
  },
  {
    id: "bfbf8b9c-d9c5-4d42-8937-d41d3f98839c",
    title: "Machine Learning with Python (V2)",
    issuer: "Coursera",
    image: "/logos/coursera.svg",
  },
  {
    id: "fc07c0cc-6aba-4f9f-8ffb-40bdec1616f8",
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/logos/ibm.svg",
  },
  {
    id: "8e2e36c8-1d3f-46e6-b6e6-27b30887e1fc",
    title: "Networking Basics",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
  },
  {
    id: "d3fe93e3-bb58-4510-bb8c-d0d0fce1fc10",
    title: "Intro to Cybersecurity",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
  },
  {
    id: "9efd5628-2e4b-44d6-9f60-a484c567462c",
    title: "Python Essentials 1",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
  },
  {
    id: "ffe9ae7a-019c-42b7-9fb3-d20b7ce75091",
    title: "Python Essentials 2",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
  },
  {
    id: "oracle-ai-foundations-associate",
    title: "AI Foundations Associate",
    issuer: "Oracle",
    image: "/logos/oracle.svg",
    link: "https://drive.google.com/file/d/1kN5EYMZNDBUvExPVA3Y8E_UB6RHdo9PT/view?usp=drivesdk",
  },
  {
    id: "oracle-foundations-associate",
    title: "Foundations Associate",
    issuer: "Oracle",
    image: "/logos/oracle.svg",
    link: "https://drive.google.com/file/d/1I9EPP0N-xuG2zsscZHiev0jFsaC5gemj/view?usp=drivesdk",
  },
  {
    id: "nvidia-ai-jetson",
    title: "AI & Jetson Nano",
    issuer: "NVIDIA",
    image: "/logos/nvidia.svg",
    link: "https://drive.google.com/file/d/180dsFOkDpQuQNMPgR3frH7pPd9G_SprE/view?usp=drivesdk",
  },
  {
    id: "forage-aws",
    title: "AWS Solutions Architecture - Job Simulation",
    issuer: "Forage",
    image: "/logos/forage.jpg",
    link: "https://drive.google.com/file/d/1GNZqEnu_Pig-dt3GWFUduXi1mjEJUIh3/view?usp=drivesdk",
  },
  {
    id: "forage-deloitte",
    title: "Deloitte Cyber - Job Simulation",
    issuer: "Forage",
    image: "/logos/forage.jpg",
    link: "https://drive.google.com/file/d/1FxrSb0WsNv9pPvxwTVlkicfXMC_r7W6r/view?usp=drivesdk",
  },
  {
    id: "forage-verizon",
    title: "Verizon Cloud Platform - Job Simulation",
    issuer: "Forage",
    image: "/logos/forage.jpg",
    link: "https://drive.google.com/file/d/1VAUA0X6exr5mNYBx6Z7XxqOzTbhQK-rT/view?usp=drivesdk",
  },
]

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

function ProviderAccordion({ group, defaultOpen }: { group: typeof grouped[0]; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false)

  return (
    <div className="border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-300">
      {/* Clickable header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="px-3 bg-zinc-200/95 rounded-lg h-10 flex items-center justify-center flex-shrink-0 min-w-[60px]">
            <img src={group.image} alt={group.issuer} className="h-5 w-auto max-w-[120px] object-contain" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{group.issuer}</p>
            <p className="text-zinc-500 text-xs mt-0.5">
              {group.items.length} {group.items.length === 1 ? "credential" : "credentials"}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown size={18} className="text-zinc-500" />
        </motion.div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {group.items.map((cred) => (
                <a
                  key={cred.id}
                  href={cred.link || `https://www.credly.com/badges/${cred.id}/public_url`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 hover:bg-amber-500/[0.04] transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-amber-500/50 flex-shrink-0" />
                  <p className="text-sm text-zinc-300 group-hover/item:text-white transition-colors truncate">
                    {cred.title}
                  </p>
                  <ExternalLink size={12} className="text-zinc-600 group-hover/item:text-amber-500 flex-shrink-0 ml-auto transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Certifications & Badges
            </h2>
            <p className="text-zinc-400 text-lg">
              {credentials.length} credentials across {grouped.length} providers (Google Cloud, AWS, Oracle, etc.)
            </p>
          </div>
          
          <a
            href="https://www.credly.com/users/dhanush-pillay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-sm bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-black rounded-full font-medium transition-all duration-300 flex-shrink-0 lg:mb-6"
          >
            <Award size={16} />
            View on Credly
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Accordion groups */}
        <div className="space-y-3">
          {grouped.map((group, i) => (
            <motion.div
              key={group.issuer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ProviderAccordion group={group} defaultOpen={i === 0} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
