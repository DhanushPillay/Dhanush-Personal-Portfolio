import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { SocialButton } from "@/components/ui/social-button"
import { ToasterButton } from "@/components/ui/toaster-button"

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Massive Typography & Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold text-[#1c1c1c] tracking-tighter leading-[0.9]"
              >
                LET'S<br />WORK<br /><span className="text-[#e34234]">TOGETHER.</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#1c1c1c]/70 leading-relaxed max-w-md pt-4">
                Open to internships, collaborations, and interesting problems. Drop a message or reach out directly.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-4">
              <div className="flex flex-wrap gap-4">
                <a href="mailto:dhanushpillay28@gmail.com" className="inline-flex items-center gap-3 p-4 bg-white border-2 border-[#1c1c1c] rounded-xl shadow-[4px_4px_0px_#1c1c1c] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                  <Mail className="w-5 h-5 text-[#e34234]" />
                  <span className="text-[#1c1c1c] font-semibold">
                    dhanushpillay28@gmail.com
                  </span>
                </a>
                <div className="inline-flex items-center gap-3 p-4 bg-white border-2 border-[#1c1c1c] rounded-xl shadow-[4px_4px_0px_#1c1c1c] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 cursor-default">
                  <MapPin className="w-5 h-5 text-[#e34234]" />
                  <span className="text-[#1c1c1c] font-semibold">Pune, India</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/DhanushPillay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-14 h-14 bg-white border-2 border-[#1c1c1c] rounded-xl shadow-[4px_4px_0px_#1c1c1c] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 hover:bg-[#24262a]"
                  aria-label="GitHub"
                >
                  <span className="w-6 h-6 flex items-center justify-center text-[#1c1c1c] group-hover:text-white transition-colors duration-200 [&>svg]:w-full [&>svg]:h-full">
                    <GithubIcon />
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/dhanush-pillay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-14 h-14 bg-white border-2 border-[#1c1c1c] rounded-xl shadow-[4px_4px_0px_#1c1c1c] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 hover:bg-[#0274b3]"
                  aria-label="LinkedIn"
                >
                  <span className="w-6 h-6 flex items-center justify-center text-[#1c1c1c] group-hover:text-white transition-colors duration-200 [&>svg]:w-full [&>svg]:h-full">
                    <LinkedinIcon />
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white border-2 border-[#1c1c1c] p-8 md:p-12 rounded-2xl shadow-[8px_8px_0px_#1c1c1c] space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#1c1c1c] mb-2 uppercase tracking-wider">
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
                  className={`w-full px-4 py-4 bg-[#f5f5f7] border-2 ${errors.name ? 'border-[#e34234]' : 'border-[#1c1c1c]'} rounded-xl text-[#1c1c1c] font-medium focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_#1c1c1c] transition-all duration-200`}
                  placeholder="John Doe"
                />
                {errors.name && <p id="name-error" className="text-[#e34234] text-xs mt-2 font-bold" aria-live="polite">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#1c1c1c] mb-2 uppercase tracking-wider">
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
                  className={`w-full px-4 py-4 bg-[#f5f5f7] border-2 ${errors.email ? 'border-[#e34234]' : 'border-[#1c1c1c]'} rounded-xl text-[#1c1c1c] font-medium focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_#1c1c1c] transition-all duration-200`}
                  placeholder="john@example.com"
                />
                {errors.email && <p id="email-error" className="text-[#e34234] text-xs mt-2 font-bold" aria-live="polite">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#1c1c1c] mb-2 uppercase tracking-wider">
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
                  rows={4}
                  className={`w-full px-4 py-4 bg-[#f5f5f7] border-2 ${errors.message ? 'border-[#e34234]' : 'border-[#1c1c1c]'} rounded-xl text-[#1c1c1c] font-medium focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_#1c1c1c] transition-all duration-200 resize-none`}
                  placeholder="What's on your mind?"
                />
                {errors.message && <p id="message-error" className="text-[#e34234] text-xs mt-2 font-bold" aria-live="polite">{errors.message}</p>}
              </div>
              
              <div className="pt-4 flex items-center justify-between">
                <div aria-live="polite" className="text-sm font-bold text-[#1c1c1c]">
                  {isSubmitting && <span className="animate-pulse">Loading toaster...</span>}
                  {submitStatus === "error" && (
                    <span className="text-[#e34234]">Failed to send.</span>
                  )}
                </div>
                
                {/* The Uiverse Toaster Button */}
                <div className="flex justify-end">
                  <ToasterButton type="submit" status={isSubmitting ? "submitting" : submitStatus} />
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
