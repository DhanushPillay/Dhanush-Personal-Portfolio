import { useRef, useEffect } from "react"
import gsap from "gsap"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    gsap.set(cursor, { xPercent: -50, yPercent: -50 })
    gsap.set(follower, { xPercent: -50, yPercent: -50 })

    const cursorXSetter = gsap.quickTo(cursor, "x", {
      duration: 0.15,
      ease: "power3.out",
    })
    const cursorYSetter = gsap.quickTo(cursor, "y", {
      duration: 0.15,
      ease: "power3.out",
    })
    const followerXSetter = gsap.quickTo(follower, "x", {
      duration: 0.5,
      ease: "power3.out",
    })
    const followerYSetter = gsap.quickTo(follower, "y", {
      duration: 0.5,
      ease: "power3.out",
    })

    const onMouseMove = (e: MouseEvent) => {
      cursorXSetter(e.clientX)
      cursorYSetter(e.clientY)
      followerXSetter(e.clientX)
      followerYSetter(e.clientY)
    }

    window.addEventListener("mousemove", onMouseMove)

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    )

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(follower, {
        scale: 2.5,
        backgroundColor: "rgba(245, 158, 11, 0.15)",
        border: "1.5px solid rgba(245, 158, 11, 0.6)",
        duration: 0.4,
        ease: "power2.out",
      })
    }

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "rgba(245, 158, 11, 0.08)",
        border: "1px solid rgba(245, 158, 11, 0.3)",
        duration: 0.4,
        ease: "power2.out",
      })
    }

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter)
      el.addEventListener("mouseleave", onMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter)
        el.removeEventListener("mouseleave", onMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      >
        <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
      </div>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
      >
        <div className="w-10 h-10 rounded-full border border-amber-400/30 bg-amber-400/5" />
      </div>
    </>
  )
}
