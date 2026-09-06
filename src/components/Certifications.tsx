import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import { SiGooglecloud, SiNvidia } from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"

// Filtered to only keep the high-value heavy hitters.
const credentials = [
  // Google Cloud
  {
    id: "784c4883-68ae-4bfb-8f1e-2749922e7bc0",
    title: "Develop Serverless Applications on Cloud Run",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "c2808b2b-c3a8-4d28-a79c-d53e67870c07",
    title: "Manage Kubernetes in Google Cloud",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "9730c6c5-901c-4118-a676-bcc6ce7d590b",
    title: "Streaming Analytics into BigQuery",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "90e38dd3-4100-4bb4-b458-90cd5a1f739a",
    title: "Implement CI/CD Pipelines on Google Cloud",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "02e343ac-1ba5-41b0-ae05-b6d867d69177",
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "9f29e4ba-3b53-48f2-8bd4-48647a7791c8",
    title: "Share Data Using Google Data Cloud",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "d1078748-6b96-49f6-9f0e-a75aee250a10",
    title: "Store, Process, and Manage Data",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "google-generative-ai",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
    link: "https://www.skills.google/public_profiles/37f1143b-3f88-4139-af4d-1db049b5d440/badges/20885114",
  },
  {
    id: "google-network-architecture",
    title: "Networking in Google Cloud Network Architecture",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
    link: "https://www.skills.google/public_profiles/37f1143b-3f88-4139-af4d-1db049b5d440/badges/20884943",
  },
  // AWS
  {
    id: "ce14c476-3163-4337-bad9-8956a8a87fe6",
    title: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services",
    icon: FaAws,
    iconColor: "text-[#FF9900]",
  },
  {
    id: "aws-billing-cost",
    title: "AWS Billing and Cost Management",
    issuer: "Amazon Web Services",
    icon: FaAws,
    iconColor: "text-[#FF9900]",
    link: "https://drive.google.com/file/d/1Z6M6IWQipGC9ke8Z6UeWPgnns5wV1MUY/view?usp=drivesdk",
  },
  {
    id: "aws-cloud-essentials-assessment",
    title: "Cloud Essentials Knowledge Badge Assessment",
    issuer: "Amazon Web Services",
    icon: FaAws,
    iconColor: "text-[#FF9900]",
    link: "https://drive.google.com/file/d/1SvQQfNlWgC9Tk14LQf7hSDssGoDE-w1r/view?usp=drivesdk",
  },
  // Oracle
  {
    id: "oracle-ai-foundations-associate",
    title: "AI Foundations Associate",
    issuer: "Oracle",
    icon: GrOracle,
    iconColor: "text-[#F80000]",
    link: "https://drive.google.com/file/d/1kN5EYMZNDBUvExPVA3Y8E_UB6RHdo9PT/view?usp=drivesdk",
  },
  {
    id: "oracle-foundations-associate",
    title: "Foundations Associate",
    issuer: "Oracle",
    icon: GrOracle,
    iconColor: "text-[#F80000]",
    link: "https://drive.google.com/file/d/1I9EPP0N-xuG2zsscZHiev0jFsaC5gemj/view?usp=drivesdk",
  },
  // NVIDIA
  {
    id: "nvidia-ai-jetson",
    title: "AI & Jetson Nano",
    issuer: "NVIDIA",
    icon: SiNvidia,
    iconColor: "text-[#76B900]",
    link: "https://drive.google.com/file/d/180dsFOkDpQuQNMPgR3frH7pPd9G_SprE/view?usp=drivesdk",
  },
]

function AccessBadgeCard({ cred, index }: { cred: typeof credentials[0], index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.a
      href={cred.link || `https://www.credly.com/badges/${cred.id}/public_url`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }} // Cap the delay so the bottom ones don't take forever
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col bg-white border-2 border-[#1c1c1c] rounded-[24px] p-6 transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(28,28,28,1)] overflow-hidden"
    >


      {/* Lanyard Punch Hole */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2.5 bg-[#f5f5f7] border-2 border-[#1c1c1c] rounded-full z-10 shadow-inner" />

      {/* Content */}
      <div className="mt-6 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="w-16 h-16 bg-[#f5f5f7] border-2 border-[#1c1c1c] rounded-xl flex items-center justify-center p-3 shrink-0 group-hover:rotate-6 group-hover:shadow-[4px_4px_0px_0px_rgba(28,28,28,1)] transition-all duration-300">
            <cred.icon className={`w-full h-full ${cred.iconColor}`} />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 bg-zinc-100 px-2 py-1 rounded-md">
            ID: {cred.id.substring(0, 8)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#1c1c1c] leading-tight mb-2 group-hover:text-[#e34234] transition-colors">
          {cred.title}
        </h3>
        
        <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">
          {cred.issuer}
        </p>

        {/* Barcode / Footer */}
        <div className="mt-auto pt-6 border-t-2 border-dashed border-zinc-200 flex justify-between items-center">
           {/* Fake Barcode */}
          <div className="flex gap-[3px] h-6 items-center opacity-40">
            <div className="w-1 h-full bg-black"></div>
            <div className="w-2 h-full bg-black"></div>
            <div className="w-[1px] h-full bg-black"></div>
            <div className="w-1.5 h-full bg-black"></div>
            <div className="w-1 h-full bg-black"></div>
            <div className="w-2.5 h-full bg-black"></div>
            <div className="w-[2px] h-full bg-black"></div>
            <div className="w-2 h-full bg-black"></div>
            <div className="w-[1.5px] h-full bg-black"></div>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#1c1c1c] bg-[#f5f5f7] px-3 py-1.5 rounded-md group-hover:bg-[#1c1c1c] group-hover:text-white transition-colors">
            VERIFY <ExternalLink size={14} />
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-[#f5f5f7] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight uppercase mb-4">
              Security Clearance
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl font-medium">
              Validated credentials across Google Cloud, AWS, Oracle, and NVIDIA.
            </p>
          </div>
          
          <a
            href="https://www.credly.com/users/dhanush-pillay"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-[#1c1c1c] text-white border-2 border-[#1c1c1c] hover:bg-transparent hover:text-[#1c1c1c] hover:shadow-[4px_4px_0px_0px_rgba(28,28,28,1)] hover:-translate-y-1 rounded-full font-bold uppercase tracking-wider transition-all duration-300 flex-shrink-0"
          >
            <Award size={18} className="group-hover:text-[#e34234] transition-colors" />
            Credly Profile
            <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Grid of Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {credentials.map((cred, index) => (
            <AccessBadgeCard key={cred.id} cred={cred} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
