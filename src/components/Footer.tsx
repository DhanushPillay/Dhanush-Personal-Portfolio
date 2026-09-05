import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { motion } from "framer-motion"
import { SocialButton } from "@/components/ui/social-button"

const socialLinks = [
  { name: "GitHub", icon: GithubIcon, url: "https://github.com/DhanushPillay" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com/in/dhanush-pillay" },
  { name: "Email", icon: Mail, url: "mailto:dhanushpillay28@gmail.com" },
]

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#e4e4e7] overflow-hidden relative">
      
      {/* Marquee — the part you liked, kept but tighter */}
      <div className="w-full bg-[#e34234] py-6 md:py-10 flex relative overflow-hidden -rotate-1 scale-110 mb-16 shadow-[0_0_40px_rgba(227,66,52,0.25)]">
        <motion.div
          className="whitespace-nowrap flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
        >
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="text-white text-5xl md:text-7xl font-black mx-4 uppercase tracking-tighter">
              LET'S WORK TOGETHER •{" "}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Left — brand + email */}
          <div className="space-y-2">
            <p className="text-[#1c1c1c] font-bold text-lg">Dhanush Pillay</p>
            <a
              href="mailto:dhanushpillay28@gmail.com"
              className="text-zinc-500 hover:text-zinc-700 text-sm transition-colors duration-200"
            >
              dhanushpillay28@gmail.com
            </a>
          </div>

          {/* Right — social icons */}
          <div className="flex items-center">
            <SocialButton
              icon={<GithubIcon />}
              label="GitHub"
              href="https://github.com/DhanushPillay"
              brandColor="#24262a"
            />
            <SocialButton
              icon={<LinkedinIcon />}
              label="LinkedIn"
              href="https://linkedin.com/in/dhanush-pillay"
              brandColor="#0274b3"
            />
            <SocialButton
              icon={<Mail />}
              label="Email"
              href="mailto:dhanushpillay28@gmail.com"
              brandColor="#e34234"
            />
          </div>

        </div>
      </div>
    </footer>
  )
}
