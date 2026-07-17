import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import gsap from "gsap"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

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

  useEffect(() => {
    if (isMobileOpen) {
      const menu = document.querySelector(".mobile-menu")
      if (menu) {
        gsap.from(menu, {
          x: "100%",
          duration: 0.4,
          ease: "power3.out",
        })
        gsap.from(menu.querySelectorAll("a"), {
          opacity: 0,
          x: 30,
          stagger: 0.05,
          duration: 0.4,
          ease: "power3.out",
          delay: 0.15,
        })
      }
    }
  }, [isMobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                activeSection === link.href.replace("#", "")
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="mobile-menu md:hidden fixed inset-y-0 right-0 w-72 bg-black/80 backdrop-blur-2xl border-l border-white/10 pt-20 px-8 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`text-base font-medium transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-amber-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
