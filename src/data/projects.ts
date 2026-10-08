export type Project = {
  title: string
  description: string[]
  image: string
  imageSrcSet?: string
  tags: string[]
  liveUrl?: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: "Tx-Recon",
    description: [
      "Reconciles payment-gateway webhooks against settlement CSVs with an integer-only paise fee engine (MDR + GST), idempotent provider-aware Iceberg MERGE, and MT940 bank statements as a third leg.",
      "Validated on 13.3M real transactions: 12.6M rows end to end in about 5 minutes with a 94.6% match gate.",
      "Explored through a Trino + Metabase dashboard covering match rate, volume, and at-risk rupees.",
    ],
    image: "/projects/tx-recon-dashboard.webp",
    imageSrcSet: "/projects/tx-recon-dashboard-800.webp 800w, /projects/tx-recon-dashboard.webp 1600w",
    tags: ["PYTHON", "SPARK", "ICEBERG", "KAFKA", "DOCKER"],
    githubUrl: "https://github.com/DhanushPillay/tx-recon",
  },
  {
    title: "Sniffer",
    description: [
      "Flask app scraping 7 tech sources concurrently (asyncio + thread pools) with retries.",
      "Full-text search plus VADER sentiment scoring, category and reading-time enrichment, and offline extractive summaries.",
      "Refreshed hourly by GitHub Actions cron.",
    ],
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=70&w=1200&auto=format&fit=crop",
    tags: ["PYTHON", "FLASK", "SQLITE", "NLP", "BS4"],
    liveUrl: "https://sniffer-vfru.onrender.com/",
    githubUrl: "https://github.com/DhanushPillay/Web-scraper",
  },
]
