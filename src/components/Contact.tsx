import { useState, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { Send, Mail, MapPin, Globe, Briefcase } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-button"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useGSAP(
    () => {
      if (!sectionRef.current) return

      if (headingRef.current) {
        const splitHeading = new SplitText(headingRef.current, {
          type: "chars,words",
        })
        gsap.from(splitHeading.chars, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          stagger: 0.02,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        })
      }

      if (infoRef.current) {
        gsap.from(infoRef.current, {
          opacity: 0,
          x: -80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
          },
        })
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          x: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        })
      }
    },
    { scope: sectionRef }
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <h3 className="text-3xl font-semibold text-white">
              Let's work together
            </h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <a
                    href="mailto:dhanushpillay28@gmail.com"
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    dhanushpillay28@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Location</p>
                  <p className="text-white">Pune, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <Globe className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">GitHub</p>
                  <a
                    href="https://github.com/DhanushPillay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    github.com/DhanushPillay
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <Briefcase className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/dhanush-pillay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    linkedin.com/in/dhanush-pillay
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-500 resize-none"
                placeholder="Your message..."
              />
            </div>
            <LiquidButton
              type="submit"
              size="lg"
              variant="default"
              className="w-full"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </LiquidButton>
          </form>
        </div>
      </div>
    </section>
  )
}
