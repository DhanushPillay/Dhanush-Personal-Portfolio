import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { DockTabs, dockItems } from "./ui/dock-tabs"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Scroll spy logic
      const sections = dockItems.map((link) => link.id)
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
    // Trigger once on mount
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop macOS Dock */}
      <div className="hidden md:block">
        <DockTabs activeSection={activeSection} />
      </div>

      {/* Mobile Toggle Button (Floating top right) */}
      <nav className="fixed top-6 right-6 z-50 md:hidden">
        <button
          className={`flex items-center justify-center p-3 rounded-full transition-all ${
            isScrolled ? "bg-white border-2 border-[#1c1c1c] shadow-[2px_2px_0px_0px_rgba(28,28,28,1)]" : "text-zinc-500 bg-white hover:text-[#1c1c1c]"
          }`}
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} className={isScrolled ? "text-[#1c1c1c]" : ""} />
        </button>
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
              className="absolute top-6 right-6 text-zinc-500 hover:text-[#1c1c1c] p-3 border-2 border-transparent hover:border-[#1c1c1c] rounded-full transition-all"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-6">
              {dockItems.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                  className={`flex items-center gap-4 text-4xl font-black uppercase tracking-tighter transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-[#e34234] drop-shadow-[4px_4px_0px_rgba(28,28,28,1)]"
                      : "text-zinc-400 hover:text-[#1c1c1c]"
                  }`}
                >
                  <span style={{ color: activeSection === link.id ? '#e34234' : link.color }}>{link.icon}</span>
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


