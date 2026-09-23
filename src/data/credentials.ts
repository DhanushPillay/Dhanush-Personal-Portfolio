import { SiGooglecloud, SiNvidia } from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"
import type { IconType } from "react-icons"

export type Credential = {
  id: string
  title: string
  issuer: string
  icon: IconType
  iconColor: string
  link?: string
}

export const credentials: Credential[] = [
  {
    id: "784c4883-68ae-4bfb-8f1e-2749922e7bc0",
    title: "Develop Serverless Applications on Cloud Run",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "c2808b2b-c3a8-4d28-a79c-d53e67870c07",
    title: "Manage Kubernetes in Google Cloud",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "9730c6c5-901c-4118-a676-bcc6ce7d590b",
    title: "Streaming Analytics into BigQuery",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "90e38dd3-4100-4bb4-b458-90cd5a1f739a",
    title: "Implement CI/CD Pipelines on Google Cloud",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "02e343ac-1ba5-41b0-ae05-b6d867d69177",
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "9f29e4ba-3b53-48f2-8bd4-48647a7791c8",
    title: "Share Data Using Google Data Cloud",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "d1078748-6b96-49f6-9f0e-a75aee250a10",
    title: "Store, Process, and Manage Data",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
  },
  {
    id: "google-generative-ai",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
    link: "https://www.skills.google/public_profiles/37f1143b-3f88-4139-af4d-1db049b5d440/badges/20885114",
  },
  {
    id: "google-network-architecture",
    title: "Networking in Google Cloud Network Architecture",
    issuer: "Google Cloud",
    icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
    link: "https://www.skills.google/public_profiles/37f1143b-3f88-4139-af4d-1db049b5d440/badges/20884943",
  },
  {
    id: "ce14c476-3163-4337-bad9-8956a8a87fe6",
    title: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services",
    icon: FaAws,
    iconColor: "text-[#FF9900]",
  },
  {
    id: "aws-billing-cost",
    title: "AWS Billing and Cost Management",
    issuer: "Amazon Web Services",
    icon: FaAws,
    iconColor: "text-[#FF9900]",
    link: "https://drive.google.com/file/d/1Z6M6IWQipGC9ke8Z6UeWPgnns5wV1MUY/view?usp=drivesdk",
  },
  {
    id: "aws-cloud-essentials-assessment",
    title: "Cloud Essentials Knowledge Badge Assessment",
    issuer: "Amazon Web Services",
    icon: FaAws,
    iconColor: "text-[#FF9900]",
    link: "https://drive.google.com/file/d/1SvQQfNlWgC9Tk14LQf7hSDssGoDE-w1r/view?usp=drivesdk",
  },
  {
    id: "oracle-ai-foundations-associate",
    title: "AI Foundations Associate",
    issuer: "Oracle",
    icon: GrOracle,
    iconColor: "text-[#F80000]",
    link: "https://drive.google.com/file/d/1kN5EYMZNDBUvExPVA3Y8E_UB6RHdo9PT/view?usp=drivesdk",
  },
  {
    id: "oracle-foundations-associate",
    title: "Foundations Associate",
    issuer: "Oracle",
    icon: GrOracle,
    iconColor: "text-[#F80000]",
    link: "https://drive.google.com/file/d/1I9EPP0N-xuG2zsscZHiev0jFsaC5gemj/view?usp=drivesdk",
  },
  {
    id: "nvidia-ai-jetson",
    title: "AI & Jetson Nano",
    issuer: "NVIDIA",
    icon: SiNvidia,
    iconColor: "text-[#76B900]",
    link: "https://drive.google.com/file/d/180dsFOkDpQuQNMPgR3frH7pPd9G_SprE/view?usp=drivesdk",
  },
]
