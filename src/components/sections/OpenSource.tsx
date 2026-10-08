import { motion } from "framer-motion"
import { ExternalLink, GitPullRequest } from "lucide-react"
import { opensource, type OpenSourceProject } from "@/data/opensource"
import { BrandLogo } from "@/components/ui/repo-logos"

function RepoBlock({ project, index }: { project: OpenSourceProject; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.16) }}
      className="bg-white border-2 border-[#1c1c1c] rounded-xl shadow-[6px_6px_0px_#1c1c1c] overflow-hidden"
    >
      {/* Repo header */}
      <div className="flex flex-wrap items-center gap-4 px-6 py-5">
        <BrandLogo brand={project.brand} />
        <div className="min-w-0 flex-1 basis-48">
          <h3 className="text-xl font-bold tracking-tight text-[#1c1c1c] truncate">
            {project.repo}
          </h3>
          <p className="mt-0.5 text-sm text-slate-600">
            {project.org}, {project.date}
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-[#1c1c1c] px-3 py-1 text-xs font-semibold text-white shrink-0">
          {project.mergedCount.toLowerCase()}
        </span>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.repo} repository on GitHub`}
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 font-mono text-sm text-[#1c1c1c] border-2 border-[#1c1c1c] rounded-md hover:bg-[#1c1c1c] hover:text-white transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c] focus-visible:ring-offset-2"
        >
          Repo <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>

      <p className="px-6 pb-4 text-slate-700 leading-relaxed">{project.description}</p>
      <ul aria-label={`${project.repo} topics`} className="flex flex-wrap gap-2 px-6 pb-5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-zinc-300 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* PR rows */}
      <div className="border-t-2 border-[#1c1c1c]">
        {project.prs.map((pr, i) => (
          <div
            key={pr.id}
            className={`px-6 py-5 flex flex-col lg:flex-row lg:items-center gap-4 ${
              i > 0 ? "border-t border-zinc-200" : ""
            }`}
          >
            <div className="flex-1 min-w-0">
              <p className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-950">
                  Merged
                </span>
                <span className="text-sm font-medium text-slate-600">PR {pr.id}</span>
              </p>
              <p className="font-semibold text-[17px] text-[#1c1c1c] leading-snug mb-1">{pr.title}</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 leading-relaxed">
                <li>{pr.xyz}</li>
                <li>{pr.what}</li>
              </ul>
            </div>
            <a
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open PR ${pr.id} ${pr.title} on GitHub`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 font-mono text-sm text-[#1c1c1c] border-2 border-[#1c1c1c] rounded-md hover:bg-[#1c1c1c] hover:text-white transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c] focus-visible:ring-offset-2"
            >
              <GitPullRequest size={15} aria-hidden="true" />
              PR {pr.id} <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>

      <div className="px-6 pb-5 md:hidden">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-zinc-500 hover:text-[#1c1c1c]"
        >
          View repo <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  )
}

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24 md:py-32 bg-[#f5f5f7] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#e34234] mb-4">
            6 merged PRs · upstream
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-[#1c1c1c] uppercase tracking-tight">
            Open Source
          </h2>
        </div>

        <div className="space-y-8">
          {opensource.map((project, index) => (
            <RepoBlock key={project.repo} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
