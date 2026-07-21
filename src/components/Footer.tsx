import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { motion } from "framer-motion"

const socialLinks = [
  { name: "GitHub", icon: GithubIcon, url: "https://github.com/DhanushPillay" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com/in/dhanush-pillay" },
  { name: "Email", icon: Mail, url: "mailto:dhanushpillay28@gmail.com" },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] overflow-hidden relative">
      
      {/* Marquee — the part you liked, kept but tighter */}
      <div className="w-full bg-amber-500 py-6 md:py-10 flex relative overflow-hidden -rotate-1 scale-110 mb-16 shadow-[0_0_40px_rgba(245,158,11,0.25)]">
        <motion.div
          className="whitespace-nowrap flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
        >
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="text-black text-5xl md:text-7xl font-black mx-4 uppercase tracking-tighter">
              LET'S WORK TOGETHER •{" "}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Left — brand + email */}
          <div className="space-y-2">
            <p className="text-white font-bold text-lg">Dhanush Pillay</p>
            <a
              href="mailto:dhanushpillay28@gmail.com"
              className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200"
            >
              dhanushpillay28@gmail.com
            </a>
          </div>

          {/* Right — social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors duration-200"
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
