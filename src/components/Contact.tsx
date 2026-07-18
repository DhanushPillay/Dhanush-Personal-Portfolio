import { useState, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { Send, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { LiquidButton } from "@/components/ui/liquid-button"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useGSAP(
    () => {
      if (!sectionRef.current) return

      // Heading animation handled by framer-motion

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/dhanushpillay28@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
      
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white tracking-tight"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

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
                  <GithubIcon className="w-6 h-6 text-amber-400" />
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
                  <LinkedinIcon className="w-6 h-6 text-amber-400" />
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
                className="w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </LiquidButton>
              {submitStatus === "success" && (
                <p className="text-emerald-400 text-sm text-center mt-4">Message sent successfully! I will get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm text-center mt-4">Failed to send message. Please try again or email me directly.</p>
              )}
          </form>
        </div>
      </div>
    </section>
  )
}
