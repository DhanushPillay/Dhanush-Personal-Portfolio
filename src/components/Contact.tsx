import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { ToasterButton } from "@/components/ui/toaster-button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _honey: "",
  })
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

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
    if (formData._honey) return
    if (!validate()) return
    
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const target = import.meta.env.VITE_FORMSUBMIT_KEY || "dhanushpillay28@gmail.com"
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${target}`, {
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
        setFormData({ name: "", email: "", message: "", _honey: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
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
                GOT<br /><span className="text-[#e34234]">SOMETHING?</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#1c1c1c]/70 leading-relaxed max-w-md pt-4">
                I read every message. Even the weird ones.
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
              className={`border-2 border-[#1c1c1c] p-8 md:p-12 rounded-2xl shadow-[8px_8px_0px_#1c1c1c] space-y-6 transition-colors duration-500 ${isFocused ? 'bg-[#fff8e7]' : 'bg-white'}`}
            >
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full px-4 py-4 bg-[#f5f5f7] border-2 ${errors.name ? 'border-[#e34234]' : 'border-[#1c1c1c]'} rounded-xl text-[#1c1c1c] font-medium focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_#1c1c1c] focus:bg-white transition-all duration-200`}
                  placeholder="Future Boss"
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full px-4 py-4 bg-[#f5f5f7] border-2 ${errors.email ? 'border-[#e34234]' : 'border-[#1c1c1c]'} rounded-xl text-[#1c1c1c] font-medium focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_#1c1c1c] focus:bg-white transition-all duration-200`}
                  placeholder="hiring@unicorn.com"
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  rows={4}
                  className={`w-full px-4 py-4 bg-[#f5f5f7] border-2 ${errors.message ? 'border-[#e34234]' : 'border-[#1c1c1c]'} rounded-xl text-[#1c1c1c] font-medium focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_#1c1c1c] focus:bg-white transition-all duration-200 resize-none`}
                  placeholder="Let's build something cool."
                />
                {errors.message && <p id="message-error" className="text-[#e34234] text-xs mt-2 font-bold" aria-live="polite">{errors.message}</p>}
              </div>
              
              <div className="pt-4 flex items-center justify-between">
                <div aria-live="polite" className="text-sm font-bold text-[#1c1c1c]">
                  {isSubmitting && <span className="animate-pulse">Loading toaster...</span>}
                  {submitStatus === "error" && (
                    <span className="text-[#e34234]">Failed to send. Try email instead.</span>
                  )}
                </div>
                
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
