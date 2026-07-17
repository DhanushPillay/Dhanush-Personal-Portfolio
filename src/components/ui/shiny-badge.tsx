import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function ShinyBadge({ text, className }: { text: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium",
        "bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:bg-white/10",
        className
      )}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
      </span>
      <span className="text-zinc-300 group-hover:text-white transition-colors">{text}</span>
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
    </motion.div>
  )
}
