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
    <footer className="bg-black border-t border-white/10 overflow-hidden relative">
      
      {/* Infinite Scrolling Marquee */}
      <div className="w-full bg-amber-500 py-8 md:py-12 flex relative overflow-hidden -rotate-1 scale-110 mb-20 shadow-[0_0_50px_rgba(245,158,11,0.3)]">
        <motion.div
          className="whitespace-nowrap flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="text-black text-6xl md:text-8xl font-black mx-4 uppercase tracking-tighter mix-blend-overlay opacity-90">
              LET'S WORK TOGETHER • LET'S WORK TOGETHER • 
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand & CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Ready to build something amazing?
            </h2>
            <p className="text-zinc-400 text-lg max-w-md">
              Whether you have a wild idea or a massive scaling problem, I'd love to help you build elegant, high-performance solutions.
            </p>
            <a href="mailto:dhanushpillay28@gmail.com" className="inline-block mt-4 text-white font-medium border-b-2 border-amber-500 hover:text-amber-400 transition-colors pb-1">
              dhanushpillay28@gmail.com
            </a>
          </div>

          {/* Socials & Links */}
          <div className="flex flex-col md:items-end justify-center space-y-6">
            <h3 className="text-white font-semibold text-xl">Connect with me</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/10 transition-colors duration-300 shadow-lg"
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
