export function BrandLogo({ brand, className = "" }: { brand: "hf" | "haystack"; className?: string }) {
  const src = brand === "hf" ? "/logos/hf-logo.svg" : "/logos/haystack.png"
  const alt = brand === "hf" ? "Hugging Face logo" : "Haystack by deepset logo"
  return (
    <span
      className={`inline-flex items-center justify-center w-10 h-10 shrink-0 bg-white border-2 border-[#1c1c1c] rounded-md overflow-hidden ${className}`}
    >
      <img src={src} alt={alt} width={40} height={40} loading="lazy" decoding="async" className="w-7 h-7 object-contain" />
    </span>
  )
}
