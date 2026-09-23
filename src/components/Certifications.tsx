import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import { credentials, type Credential } from "@/data/credentials"


function AccessBadgeCard({ cred, index }: { cred: Credential, index: number }) {
  return (
    <motion.a
      href={cred.link || `https://www.credly.com/badges/${cred.id}/public_url`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
      className="block h-full"
    >
      <div
        className="group h-full relative flex flex-col bg-white border-2 border-[#1c1c1c] rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(28,28,28,1)] overflow-hidden"
      >
        {/* Shimmer sweep */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-30 pointer-events-none" />


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
              Cloud & Technical Certifications
            </h2>
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
