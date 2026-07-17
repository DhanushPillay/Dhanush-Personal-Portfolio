import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Globe, Briefcase, Mail, Heart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { name: "GitHub", icon: Globe, url: "https://github.com/DhanushPillay" },
  {
    name: "LinkedIn",
    icon: Briefcase,
    url: "https://linkedin.com/in/dhanush-pillay",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:dhanushpillay28@gmail.com",
  },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!footerRef.current) return

      gsap.from(footerRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      })
    },
    { scope: footerRef }
  )

  return (
    <footer
      ref={footerRef}
      className="py-12 bg-black border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
            <span className="text-white font-medium">Dhanush Pillay</span>
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors duration-300"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Dhanush Pillay. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
