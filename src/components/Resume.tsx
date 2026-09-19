import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    title: "AI/ML Intern",
    company: "IEEE Computational Intelligence",
    date: "June 2025 - July 2026",
    bullets: [
      "Architected 'VaticMacro', an inflation forecasting system ingesting 7 macroeconomic indicators (CPI, WPI, interest rates, USD/INR, Brent Crude) to predict India's YoY inflation 1 month ahead.",
      "Engineered 35-feature pipeline with autoregressive lags, rolling averages, WPI-CPI spreads, and oil-INR ratios, trained via GridSearchCV with TimeSeriesSplit to avoid lookahead bias.",
      "Developed Flask dashboard with real-time KPI visualization, scenario analysis sandbox, correlation heatmaps, and JSON REST APIs for predictive analytics.",
    ],
    accent: "bg-[#e34234]",
  },
  {
    title: "Full-Stack Intern",
    company: "IEEE Student Branch",
    date: "June 2025 - July 2025",
    bullets: [
      "Built 'LifeLink', a full-stack Blood and Organ Donor Matching platform with React 19, Vite, Express.js, and MongoDB for real-time donor search and hospital-patient connectivity.",
      "Engineered backend with JWT authentication, Google OAuth integration, Socket.IO for real-time messaging, SSE for live presence, and Firebase push notifications.",
      "Implemented security layer: helmet, rate limiting, CORS allowlist, double CSRF protection, input sanitization, and RBAC with Docker Compose.",
    ],
    accent: "bg-[#1c1c1c]",
  },
  {
    title: "B.Tech CSE",
    company: "MIT ADT University",
    date: "Aug 2024 - 2028",
    bullets: [
      "Pursuing a Bachelor of Technology with a specialization in Big Data and Cloud Engineering in Pune, India.",
    ],
    accent: "bg-zinc-400",
  },
];

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (containerRef.current) {
        containerRef.current.style.height = "auto";
        containerRef.current.style.overflow = "visible";
      }
      if (trackRef.current) {
        trackRef.current.style.width = "auto";
        trackRef.current.style.flexDirection = "column";
        trackRef.current.style.alignItems = "stretch";
      }
      return
    }
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => window.innerWidth * (experienceData.length);

      scrollTween.current = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });

      // Animate text inside cards when they enter view horizontally
      const cards = gsap.utils.toArray<HTMLElement>(".exp-card");
      cards.forEach((card) => {
        gsap.from(card.querySelectorAll(".exp-anim"), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween.current ?? undefined,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Total slides = 1 title slide + N experience slides
  const totalSlides = experienceData.length + 1;

  return (
    <section 
      ref={containerRef} 
      id="experience" 
      className="bg-[#f5f5f7] w-full h-screen overflow-hidden relative border-y-8 border-[#1c1c1c]"
    >
      <div 
        ref={trackRef} 
        className="flex h-full items-center"
        style={{ width: `${totalSlides * 100}vw` }}
      >
        {/* SLIDE 1: Title Slide */}
        <div className="w-[100vw] h-full flex flex-col justify-center items-center shrink-0 border-r-4 border-[#1c1c1c]/10 overflow-hidden px-4">
           <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-none text-[#1c1c1c] text-center max-w-[90vw]">
             Experience
             <br />
             <span className="text-[#e34234]">& Education</span>
           </h2>
           <p className="mt-8 text-xl font-bold uppercase tracking-widest text-zinc-500">
             // Keep Scrolling 
           </p>
        </div>

        {/* SLIDES 2+: Experience Cards */}
        {experienceData.map((exp, i) => (
          <div 
            key={i} 
            className="exp-card w-[100vw] h-full flex flex-col justify-center px-10 md:px-32 shrink-0 border-r-4 border-[#1c1c1c]/10 relative"
          >
             <div className="max-w-4xl mx-auto w-full relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h4 className="exp-anim text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#1c1c1c] leading-none mb-4">
                      {exp.title}
                    </h4>
                    <div className="exp-anim flex items-center gap-4">
                      <span className={`w-4 h-4 rounded-none ${exp.accent} border-2 border-[#1c1c1c]`}></span>
                      <p className="text-xl md:text-2xl font-bold text-[#1c1c1c] uppercase tracking-widest border-b-4 border-[#1c1c1c] pb-1 w-max">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <p className="exp-anim text-lg md:text-xl font-bold uppercase tracking-widest text-[#e34234]">
                    {exp.date}
                  </p>
                </div>
                
                <div className="bg-white border-4 border-[#1c1c1c] shadow-[8px_8px_0px_#1c1c1c] p-8 md:p-12">
                  <ul className="space-y-6">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="exp-anim text-lg md:text-xl font-medium text-zinc-800 border-l-4 border-[#e34234] pl-6 leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
