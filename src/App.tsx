import { useEffect } from "react"
import { ReactLenis } from "lenis/react"
import "lenis/dist/lenis.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Certifications from "@/components/Certifications"
import Projects from "@/components/Projects"
import Resume from "@/components/Resume"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/ui/custom-cursor"

gsap.registerPlugin(ScrollTrigger, SplitText)

import { motion, useScroll, useSpring } from "framer-motion"

export default function App() {
  useEffect(() => {
    ScrollTrigger.defaults({ toggleActions: "play none none none" })
  }, [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, syncTouch: true }}>
      <CustomCursor />
      
      {/* Interactive Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 origin-left z-[100] shadow-[0_0_15px_rgba(245,158,11,0.8)]"
        style={{ scaleX }}
      />
      
      {/* Noise texture overlay removed */}
      <div className="min-h-screen bg-black">
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <div className="section-divider" />
        <Resume />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  )
}
