import { motion } from "framer-motion"
import { ExternalLink, Award, ChevronRight } from "lucide-react"

// Mapped from your Credly profile for a native, custom UI
const credentials = [
  {
    id: "784c4883-68ae-4bfb-8f1e-2749922e7bc0",
    title: "Develop Serverless Applications on Cloud Run",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    summary: "Learn to build, containerize, and deploy highly scalable serverless applications seamlessly using Cloud Run.",
  },
  {
    id: "c2808b2b-c3a8-4d28-a79c-d53e67870c07",
    title: "Manage Kubernetes in Google Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    summary: "Master deploying, managing, and scaling complex containerized applications with Google Kubernetes Engine (GKE).",
  },
  {
    id: "9730c6c5-901c-4118-a676-bcc6ce7d590b",
    title: "Streaming Analytics into BigQuery",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    summary: "Design and implement real-time data streaming pipelines into BigQuery for instant enterprise analytics.",
  },
  {
    id: "90e38dd3-4100-4bb4-b458-90cd5a1f739a",
    title: "Implement CI/CD Pipelines on Google Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    summary: "Automate software delivery by building robust CI/CD pipelines using Cloud Build and Artifact Registry.",
  },
  {
    id: "02e343ac-1ba5-41b0-ae05-b6d867d69177",
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    summary: "Clean, transform, and structure raw data to effectively train and deploy Machine Learning models.",
  },
  {
    id: "9f29e4ba-3b53-48f2-8bd4-48647a7791c8",
    title: "Share Data Using Google Data Cloud",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    summary: "Learn secure and efficient patterns for sharing and governing datasets across organizations using BigQuery.",
  },
  {
    id: "d1078748-6b96-49f6-9f0e-a75aee250a10",
    title: "Store, Process, and Manage Data",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    summary: "Core fundamentals of GCP storage solutions, from Cloud SQL to Bigtable and robust data processing techniques.",
  },
  {
    id: "google-generative-ai",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    link: "https://www.skills.google/public_profiles/37f1143b-3f88-4139-af4d-1db049b5d440/badges/20885114",
    summary: "Explore the foundational concepts of Large Language Models and how to leverage Google's Gen AI tools.",
  },
  {
    id: "google-network-architecture",
    title: "Networking in Google Cloud Network Architecture",
    issuer: "Google Cloud",
    image: "/logos/google.svg",
    link: "https://www.skills.google/public_profiles/37f1143b-3f88-4139-af4d-1db049b5d440/badges/20884943",
    summary: "Architect secure, scalable VPCs, load balancers, and hybrid connectivity solutions across global infrastructure.",
  },
  {
    id: "ce14c476-3163-4337-bad9-8956a8a87fe6",
    title: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
    summary: "Understand foundational AWS cloud concepts, global infrastructure, and core security principles.",
  },
  {
    id: "8bd1785b-33ee-4700-890c-7595911e7cad",
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
    summary: "A hands-on introduction to deploying applications and navigating the AWS Management Console.",
  },
  {
    id: "aws-billing-cost",
    title: "AWS Billing and Cost Management",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
    link: "https://drive.google.com/file/d/1Z6M6IWQipGC9ke8Z6UeWPgnns5wV1MUY/view?usp=drivesdk",
    summary: "Master cloud economics by tracking usage, setting budgets, and optimizing overall AWS costs.",
  },
  {
    id: "aws-ebadge",
    title: "AWSEBadge",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
    link: "https://drive.google.com/file/d/1hAcePaBoB63rf4Vb0sx5guhgRwJ-s5Xf/view?usp=drivesdk",
    summary: "AWS Educate overarching certification for demonstrated proficiency in core cloud computing concepts.",
  },
  {
    id: "aws-cloud-essentials-assessment",
    title: "Cloud Essentials Knowledge Badge Assessment",
    issuer: "Amazon Web Services",
    image: "/logos/aws.svg",
    link: "https://drive.google.com/file/d/1SvQQfNlWgC9Tk14LQf7hSDssGoDE-w1r/view?usp=drivesdk",
    summary: "Comprehensive assessment of foundational cloud knowledge, security, and global infrastructure principles.",
  },
  {
    id: "bfbf8b9c-d9c5-4d42-8937-d41d3f98839c",
    title: "Machine Learning with Python (V2)",
    issuer: "Coursera",
    image: "/logos/coursera.svg",
    summary: "Build predictive models using Python's scikit-learn, covering regression, classification, and clustering.",
  },
  {
    id: "fc07c0cc-6aba-4f9f-8ffb-40bdec1616f8",
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/logos/ibm.svg",
    summary: "Discover essential concepts of threat landscapes, cryptography, and securing modern IT environments.",
  },
  {
    id: "8e2e36c8-1d3f-46e6-b6e6-27b30887e1fc",
    title: "Networking Basics",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
    summary: "Learn the foundations of network protocols, IP addressing, and how the internet physically works.",
  },
  {
    id: "d3fe93e3-bb58-4510-bb8c-d0d0fce1fc10",
    title: "Intro to Cybersecurity",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
    summary: "Understand how to protect personal privacy and defend networks against modern cyber threats.",
  },
  {
    id: "9efd5628-2e4b-44d6-9f60-a484c567462c",
    title: "Python Essentials 1",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
    summary: "Master the fundamentals of Python programming, including data types, variables, and basic control structures.",
  },
  {
    id: "ffe9ae7a-019c-42b7-9fb3-d20b7ce75091",
    title: "Python Essentials 2",
    issuer: "Cisco",
    image: "/logos/cisco.svg",
    summary: "Advance to intermediate Python, learning object-oriented programming, file handling, and comprehensive modules.",
  },
  {
    id: "oracle-ai-foundations-associate",
    title: "AI Foundations Associate",
    issuer: "Oracle",
    image: "/logos/oracle.svg",
    link: "https://drive.google.com/file/d/1kN5EYMZNDBUvExPVA3Y8E_UB6RHdo9PT/view?usp=drivesdk",
    summary: "Gain a foundational understanding of AI, machine learning, and deep learning concepts within the Oracle ecosystem.",
  },
  {
    id: "oracle-foundations-associate",
    title: "Foundations Associate",
    issuer: "Oracle",
    image: "/logos/oracle.svg",
    link: "https://drive.google.com/file/d/1I9EPP0N-xuG2zsscZHiev0jFsaC5gemj/view?usp=drivesdk",
    summary: "Core principles of Oracle Cloud Infrastructure (OCI), covering compute, storage, networking, and identity.",
  },
  {
    id: "nvidia-ai-jetson",
    title: "AI & Jetson Nano",
    issuer: "NVIDIA",
    image: "/logos/nvidia.svg",
    link: "https://drive.google.com/file/d/180dsFOkDpQuQNMPgR3frH7pPd9G_SprE/view?usp=drivesdk",
    summary: "Hands-on experience building AI projects and deploying computer vision models on edge devices.",
  },
  {
    id: "forage-aws",
    title: "AWS Solutions Architecture - Job Simulation",
    issuer: "Forage",
    image: "/logos/forage.jpg",
    link: "https://drive.google.com/file/d/1GNZqEnu_Pig-dt3GWFUduXi1mjEJUIh3/view?usp=drivesdk",
    summary: "Practical experience designing scalable cloud architectures and presenting solutions to stakeholders.",
  },
  {
    id: "forage-deloitte",
    title: "Deloitte Cyber - Job Simulation",
    issuer: "Forage",
    image: "/logos/forage.jpg",
    link: "https://drive.google.com/file/d/1FxrSb0WsNv9pPvxwTVlkicfXMC_r7W6r/view?usp=drivesdk",
    summary: "Experience real-world scenarios in enterprise security auditing, incident response, and risk management.",
  },
  {
    id: "forage-verizon",
    title: "Verizon Cloud Platform - Job Simulation",
    issuer: "Forage",
    image: "/logos/forage.jpg",
    link: "https://drive.google.com/file/d/1VAUA0X6exr5mNYBx6Z7XxqOzTbhQK-rT/view?usp=drivesdk",
    summary: "Simulate deploying and managing scalable network infrastructure and cloud-native services for Verizon.",
  },
]

// Group credentials by issuer, maintaining insertion order
function groupByIssuer(creds: typeof credentials) {
  const groups: { issuer: string; image: string; items: typeof credentials }[] = []
  const map = new Map<string, typeof credentials>()

  for (const cred of creds) {
    if (!map.has(cred.issuer)) {
      const items: typeof credentials = []
      map.set(cred.issuer, items)
      groups.push({ issuer: cred.issuer, image: cred.image, items })
    }
    map.get(cred.issuer)!.push(cred)
  }

  return groups
}

const grouped = groupByIssuer(credentials)

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >

          <h2 className="text-5xl md:text-7xl font-bold text-center text-white tracking-tight">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Badges
            </span>
          </h2>
        </motion.div>

        {/* Provider Groups */}
        <div className="space-y-12 mb-16">
          {grouped.map((group, groupIndex) => (
            <motion.div
              key={group.issuer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              {/* Provider Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="px-4 bg-zinc-200/95 rounded-xl shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] h-12 flex items-center justify-center flex-shrink-0 min-w-[80px]">
                  <img src={group.image} alt={group.issuer} className="h-6 w-auto max-w-[160px] object-contain drop-shadow-sm" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500/60 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    {group.items.length} {group.items.length === 1 ? "cert" : "certs"}
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
              </div>

              {/* Horizontal Scroll Row */}
              <div className="relative group/scroll">
                {/* Right fade mask */}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div
                  className="flex items-start gap-3 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory custom-scrollbar"
                >
                  {group.items.map((cred) => (
                    <a
                      key={cred.id}
                      href={cred.link || `https://www.credly.com/badges/${cred.id}/public_url`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-shrink-0 snap-start block outline-none"
                    >
                      <div className="flex flex-col px-5 py-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 hover:bg-amber-500/[0.05] transition-all duration-500 w-[320px] shadow-sm hover:shadow-[0_8px_30px_rgba(245,158,11,0.05)]">
                        <div className="flex items-center justify-between gap-3 w-full">
                          <p className="text-sm font-semibold text-zinc-200 group-hover:text-amber-400 transition-colors truncate leading-snug">
                            {cred.title}
                          </p>
                          <ChevronRight size={14} className="text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </div>
                        
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                          <div className="overflow-hidden">
                            <p className="text-xs text-zinc-400 pt-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                              {cred.summary}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://www.credly.com/users/dhanush-pillay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:-translate-y-1"
          >
            <Award size={18} />
            View all credentials on Credly
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
