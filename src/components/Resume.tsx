import { Timeline } from "@/components/ui/timeline"

const timelineData = [
  {
    title: "AI/ML Intern",
    subtitle: "IEEE Computational Intelligence Society",
    date: "June 2025 - July 2026",
    content: (
      <ul className="list-disc ml-5 space-y-2 mt-2">
        <li>Architected "VaticMacro", an inflation forecasting system ingesting 7 macroeconomic indicators (CPI, WPI, interest rates, USD/INR, Brent Crude) to predict India's YoY inflation 1 month ahead.</li>
        <li>Engineered 35-feature pipeline with autoregressive lags, rolling averages, WPI-CPI spreads, and oil-INR ratios, trained via GridSearchCV with TimeSeriesSplit to avoid lookahead bias.</li>
        <li>Developed Flask dashboard with real-time KPI visualization, scenario analysis sandbox, correlation heatmaps, and JSON REST APIs for predictive analytics.</li>
      </ul>
    ),
  },
  {
    title: "Full-Stack Developer Intern",
    subtitle: "IEEE Student Branch, MIT-ADT University",
    date: "June 2025 - July 2025",
    content: (
      <ul className="list-disc ml-5 space-y-2 mt-2">
        <li>Built "LifeLink", a full-stack Blood and Organ Donor Matching platform with React 19, Vite, Express.js, and MongoDB for real-time donor search and hospital-patient connectivity.</li>
        <li>Engineered backend with JWT authentication, Google OAuth integration, Socket.IO for real-time messaging, SSE for live presence, and Firebase push notifications.</li>
        <li>Implemented security layer: helmet, rate limiting, CORS allowlist, double CSRF protection, input sanitization, and RBAC with Docker Compose.</li>
      </ul>
    ),
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "MIT ADT University (Big Data & Cloud)",
    date: "Aug 2024 - 2028",
    content: (
      <p className="mt-2 text-zinc-400">
        Pursuing a Bachelor of Technology with a specialization in Big Data and Cloud Engineering in Pune, India.
      </p>
    ),
  },
]

export default function Resume() {
  return (
    <section id="experience" className="bg-black w-full overflow-hidden">
      <Timeline data={timelineData} />
    </section>
  )
}
