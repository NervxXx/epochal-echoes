import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check for mobile device
    const checkMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
    
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    setShouldReduceMotion(checkMobile() || prefersReducedMotion);

    const handleResize = () => {
      setShouldReduceMotion(checkMobile() || prefersReducedMotion);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return shouldReduceMotion;
}
