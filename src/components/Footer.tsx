import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { SocialButton } from "@/components/ui/social-button"

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-[#1c1c1c]">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left — brand + copyright */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <p className="text-[#1c1c1c] font-bold text-xl uppercase tracking-tight">Dhanush Pillay</p>
            <p className="text-zinc-500 font-medium text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Right — social icons */}
          <div className="flex items-center gap-2">
            <SocialButton
              icon={<GithubIcon />}
              label="GitHub"
              href="https://github.com/DhanushPillay"
              brandColor="#24262a"
            />
            <SocialButton
              icon={<LinkedinIcon />}
              label="LinkedIn"
              href="https://linkedin.com/in/dhanush-pillay"
              brandColor="#0274b3"
            />
            <SocialButton
              icon={<Mail />}
              label="Email"
              href="mailto:dhanushpillay28@gmail.com"
              brandColor="#e34234"
            />
          </div>

        </div>
      </div>
    </footer>
  )
}
