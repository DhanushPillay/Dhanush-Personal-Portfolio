import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { LiquidButton } from "@/components/ui/liquid-button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors: {name?: string; email?: string; message?: string} = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address"
    if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    
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
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Talk</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info — consistent Framer Motion, no GSAP mix */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-zinc-400 leading-relaxed">
              Open to internships, collaborations, and interesting problems.
              Drop a message or reach out directly.
            </p>

            <div className="space-y-5">
              <a href="mailto:dhanushpillay28@gmail.com" className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/[0.04] rounded-lg border border-white/[0.06] group-hover:border-white/20 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-zinc-300 group-hover:text-white transition-colors duration-200">
                  dhanushpillay28@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white/[0.04] rounded-lg border border-white/[0.06]">
                  <MapPin className="w-5 h-5 text-zinc-400" />
                </div>
                <span className="text-zinc-300">Pune, India</span>
              </div>
              <a href="https://github.com/DhanushPillay" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/[0.04] rounded-lg border border-white/[0.06] group-hover:border-white/20 transition-colors duration-200">
                  <GithubIcon size={20} className="text-zinc-400 group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-zinc-300 group-hover:text-white transition-colors duration-200">
                  github.com/DhanushPillay
                </span>
              </a>
              <a href="https://linkedin.com/in/dhanush-pillay" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/[0.04] rounded-lg border border-white/[0.06] group-hover:border-white/20 transition-colors duration-200">
                  <LinkedinIcon size={20} className="text-zinc-400 group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-zinc-300 group-hover:text-white transition-colors duration-200">
                  linkedin.com/in/dhanush-pillay
                </span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form — consistent Framer Motion */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-4 py-3 bg-white/[0.03] border ${errors.name ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors duration-300`}
                placeholder="Your name"
              />
              {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1" aria-live="polite">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 bg-white/[0.03] border ${errors.email ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors duration-300`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1" aria-live="polite">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                rows={5}
                className={`w-full px-4 py-3 bg-white/[0.03] border ${errors.message ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors duration-300 resize-none`}
                placeholder="What do you have in mind?"
              />
              {errors.message && <p id="message-error" className="text-red-400 text-xs mt-1" aria-live="polite">{errors.message}</p>}
            </div>
            <LiquidButton
              type="submit"
              className="w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              <Send size={18} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </LiquidButton>
            <div aria-live="polite" className="mt-4">
              {submitStatus === "success" && (
                <p className="text-emerald-400 text-sm text-center">Message sent. I'll get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm text-center">Failed to send. Try emailing me directly.</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
