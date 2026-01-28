import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Negative for slower, positive for faster
  direction?: "up" | "down";
}

const ParallaxBackground = ({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxBackgroundProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 200 * speed * multiplier]
  );

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxBackground;
