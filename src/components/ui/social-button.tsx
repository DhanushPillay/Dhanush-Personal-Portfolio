import React from "react"
import { cn } from "@/lib/utils"

interface SocialButtonProps {
  icon: React.ReactNode
  label: string
  href: string
  brandColor?: string
  brandGradient?: string
  className?: string
}

export function SocialButton({
  icon,
  label,
  href,
  brandColor = "#000",
  brandGradient,
  className,
}: SocialButtonProps) {
  return (
    <div className={cn("relative group mx-2 flex flex-col items-center", className)}>
      {/* Tooltip */}
      <div
        className="absolute -top-8 left-1/2 -translate-x-1/2 text-white px-2.5 py-1.5 rounded-md text-sm opacity-0 invisible transition-all duration-300 ease-out group-hover:opacity-100 group-hover:visible group-hover:-top-12 z-20 whitespace-nowrap shadow-md"
        style={{ background: brandGradient || brandColor }}
      >
        {label}
        {/* Tooltip arrow */}
        <div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
          style={{ background: brandGradient || brandColor }}
        />
      </div>

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full bg-white text-zinc-600 transition-all duration-300 ease-in-out group-hover:shadow-[3px_2px_45px_0px_rgba(0,0,0,0.12)] group-hover:text-white"
      >
        <span className="relative z-10 w-5 h-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
          {icon}
        </span>
        
        {/* Fill effect */}
        <div
          className="absolute top-auto bottom-0 left-0 w-full h-0 transition-all duration-300 ease-in-out group-hover:h-full z-0"
          style={{ background: brandGradient || brandColor }}
        />
      </a>
    </div>
  )
}
