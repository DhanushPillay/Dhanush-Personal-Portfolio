import { useState, useEffect } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      // Check screen width (standard Tailwind md breakpoint is 768px)
      const isNarrowScreen = window.innerWidth < 768
      
      // Check for touch capability
      const isTouchDevice = 
        "ontouchstart" in window || 
        navigator.maxTouchPoints > 0 || 
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
        
      setIsMobile(isNarrowScreen || isTouchDevice)
    }

    // Initial check
    checkIsMobile()

    // Add event listener for resize
    window.addEventListener("resize", checkIsMobile)
    
    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  return isMobile
}
