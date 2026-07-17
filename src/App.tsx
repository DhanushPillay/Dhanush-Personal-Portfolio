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
import Projects from "@/components/Projects"
import Resume from "@/components/Resume"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/ui/custom-cursor"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  useEffect(() => {
    ScrollTrigger.defaults({ toggleActions: "play none none none" })
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, syncTouch: true }}>
      <CustomCursor />
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="min-h-screen bg-black">
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
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
