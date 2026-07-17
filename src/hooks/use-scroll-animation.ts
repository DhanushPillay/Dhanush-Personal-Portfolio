import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(
  selector: string,
  options?: {
    y?: number
    x?: number
    stagger?: number
    duration?: number
    delay?: number
    start?: string
    scrub?: boolean | number
    scale?: number
  }
) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return

      const elements = ref.current.querySelectorAll(selector)
      if (elements.length === 0) return

      gsap.from(elements, {
        y: options?.y ?? 60,
        x: options?.x ?? 0,
        opacity: 0,
        scale: options?.scale ?? 1,
        duration: options?.duration ?? 1,
        stagger: options?.stagger ?? 0.15,
        delay: options?.delay ?? 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: options?.start ?? "top 80%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: ref }
  )

  return ref
}

export function useCountUp(
  endValue: number,
  duration: number = 2,
  start?: string
) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return

      const obj = { value: 0 }

      gsap.to(obj, {
        value: endValue,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${Math.round(obj.value)}+`
          }
        },
        scrollTrigger: {
          trigger: ref.current,
          start: start ?? "top 85%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: ref }
  )

  return ref
}
