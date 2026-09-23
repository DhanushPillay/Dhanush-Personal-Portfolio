import { useState, useEffect } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      const isNarrowScreen = window.innerWidth < 768
      
      const isTouchDevice = 
        "ontouchstart" in window || 
        navigator.maxTouchPoints > 0 || 
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
        
      setIsMobile(isNarrowScreen || isTouchDevice)
    }

    checkIsMobile()

    window.addEventListener("resize", checkIsMobile)
    
    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  return isMobile
}
