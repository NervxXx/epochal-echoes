import { motion } from "framer-motion";
import { useState } from "react";

interface PortraitCardProps {
  name: string;
  era: string;
  quote: string;
  image: string;
  delay?: number;
}

const PortraitCard = ({ name, era, quote, image, delay = 0 }: PortraitCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Frame */}
      <div className="relative overflow-hidden rounded-sm shadow-portrait bg-card">
        {/* Ornate border */}
        <div className="absolute inset-0 border-4 border-accent/20 z-10 pointer-events-none" />
        <div className="absolute inset-2 border border-accent/10 z-10 pointer-events-none" />

        {/* Image container */}
        <motion.div
          className="relative aspect-[3/4] overflow-hidden"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Quote on hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-display text-sm italic text-primary-foreground leading-relaxed">
              "{quote}"
            </p>
          </motion.div>
        </motion.div>

        {/* Name plate */}
        <div className="p-4 bg-card border-t border-border">
          <h3 className="font-display text-lg font-medium text-foreground">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{era}</p>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 shadow-glow opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Floating indicator */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? 1 : 0.6,
        }}
        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.div>
  );
};

export default PortraitCard;