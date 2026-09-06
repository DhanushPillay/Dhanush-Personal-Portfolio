"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Home, Mail, FileText, Briefcase, Code, Wrench, GraduationCap } from 'lucide-react'

// Map sections to icons
export const dockItems = [
  { id: "home", name: "Home", href: "#home", icon: <Home className="w-6 h-6" />, color: "#e34234" },
  { id: "about", name: "About", href: "#about", icon: <FileText className="w-6 h-6" />, color: "#4f46e5" },
  { id: "skills", name: "Skills", href: "#skills", icon: <Wrench className="w-6 h-6" />, color: "#10b981" },
  { id: "certifications", name: "Certifications", href: "#certifications", icon: <GraduationCap className="w-6 h-6" />, color: "#f59e0b" },
  { id: "projects", name: "Projects", href: "#projects", icon: <Code className="w-6 h-6" />, color: "#ec4899" },
  { id: "experience", name: "Experience", href: "#experience", icon: <Briefcase className="w-6 h-6" />, color: "#8b5cf6" },
  { id: "contact", name: "Contact", href: "#contact", icon: <Mail className="w-6 h-6" />, color: "#14b8a6" },
]

const containerVariants = {
  hidden: { y: -80, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 20 },
  },
}

export const DockTabs = ({ activeSection }: { activeSection: string }) => {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-end h-20 gap-3 px-6 pb-3 bg-[#f5f5f7]/90 backdrop-blur-xl border-4 border-[#1c1c1c] rounded-3xl shadow-[6px_6px_0px_0px_rgba(28,28,28,1)]"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {dockItems.map((item) => (
        <DockIcon key={item.id} item={item} mouseX={mouseX} active={activeSection === item.id} />
      ))}
    </motion.div>
  )
}

function DockIcon({
  item,
  mouseX,
  active,
}: {
  item: typeof dockItems[0]
  mouseX: any
  active: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  // Width scales from 48px to 80px based on distance from mouse
  const widthSync = useTransform(distance, [-150, 0, 150], [48, 80, 48])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })
  
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative">
      <motion.a
        ref={ref}
        href={item.href}
        variants={itemVariants}
        style={{ width, height: width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center justify-center rounded-2xl border-2 transition-colors duration-200 ${
          active 
            ? "border-[#1c1c1c] bg-[#e34234] shadow-[2px_2px_0px_0px_rgba(28,28,28,1)] text-white"
            : "border-transparent bg-black/5 hover:bg-black/10 text-[#1c1c1c]"
        }`}
      >
        <div className="flex items-center justify-center w-full h-full" style={{ color: active ? 'white' : item.color }}>
          {item.icon}
        </div>
      </motion.a>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -2, x: "-50%" }}
            className="absolute -bottom-14 left-1/2 whitespace-nowrap rounded-lg bg-[#1c1c1c] border-2 border-[#1c1c1c] px-4 py-1.5 text-sm font-bold text-white z-50 pointer-events-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
          >
            {item.name}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-[#1c1c1c]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
