import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

// Magnetic Button Component
const MagneticLink = ({ 
  children, 
  href, 
  active,
  onClick
}: { 
  children: React.ReactNode; 
  href: string; 
  active: boolean;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.a
      href={href}
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
        active ? "text-[#e34234]" : "text-zinc-500 hover:text-[#1c1c1c]"
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-[#f5f5f7] border border-[#e4e4e7] rounded-full -z-10"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.a>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Scroll spy
      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? "w-[95%] max-w-4xl bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-[#e4e4e7] rounded-full"
            : "w-full max-w-6xl bg-transparent"
        }`}
      >
        <div className={`flex items-center justify-between px-6 py-3 transition-all duration-500 ${isScrolled ? "py-2" : ""}`}>
          <a
            href="#home"
            className="text-xl font-bold text-[#e34234] hover:scale-105 transition-transform"
          >
            DP
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <MagneticLink
                key={link.name}
                href={link.href}
                active={activeSection === link.href.replace("#", "")}
              >
                {link.name}
              </MagneticLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-zinc-500 hover:text-[#1c1c1c] p-3 -mr-1"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-zinc-500 hover:text-[#1c1c1c] p-3"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-3xl font-bold transition-colors duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#e34234]"
                      : "text-zinc-500 hover:text-[#1c1c1c]"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
