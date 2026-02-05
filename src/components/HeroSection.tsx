import { motion, useScroll, useTransform } from "framer-motion";
import { Scroll, Feather, Crown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 500], [0, reducedMotion ? 0 : 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useLanguage();

  const scrollToContent = () => {
    document.getElementById("magic")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: reducedMotion ? 0 : y }}
      >
        <img
          src={heroBackground}
          alt="Старинная карта мира с силуэтами исторических личностей — Леонардо да Винчи, Эйнштейна, Клеопатры"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </motion.div>

      {/* Animated vignette */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_70%,hsl(var(--background)/0.8)_100%)]" />
      </div>

      {/* Floating golden particles - disabled on mobile */}
      {!reducedMotion && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${10 + i * 20}%`,
                top: `${15 + (i % 3) * 25}%`,
                width: `${3 + (i % 2) * 2}px`,
                height: `${3 + (i % 2) * 2}px`,
                background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Decorative corner ornaments - hidden on mobile */}
      <div className="absolute top-24 left-8 z-20 opacity-20 dark:opacity-10 hidden md:block">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-accent">
          <path d="M0 0 L80 0 L80 10 L10 10 L10 80 L0 80 Z" fill="currentColor" />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-24 right-8 z-20 opacity-20 dark:opacity-10 hidden md:block">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-accent" style={{ transform: 'scaleX(-1)' }}>
          <path d="M0 0 L80 0 L80 10 L10 10 L10 80 L0 80 Z" fill="currentColor" />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity: reducedMotion ? 1 : opacity }}
      >
        {/* Decorative crown icon */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 1, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Crown className="w-10 h-10 text-accent/60 dark:drop-shadow-[0_0_10px_hsl(var(--accent)/0.5)]" />
            {!reducedMotion && (
              <motion.div
                className="absolute -inset-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border border-dashed border-accent/20" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Logo with enhanced styling */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="inline-block relative">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 blur-3xl bg-accent/20 dark:bg-accent/30 rounded-full scale-150" />
            
            <svg viewBox="0 0 300 80" className="w-64 h-20 md:w-80 md:h-24 mx-auto relative">
              <defs>
                <linearGradient id="goldGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" />
                  <stop offset="30%" stopColor="hsl(var(--ochre))" />
                  <stop offset="70%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="hsl(var(--ochre))" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Decorative lines */}
              <line x1="20" y1="40" x2="80" y2="40" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.5" />
              <line x1="220" y1="40" x2="280" y2="40" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.5" />
              <circle cx="85" cy="40" r="3" fill="hsl(var(--accent))" opacity="0.5" />
              <circle cx="215" cy="40" r="3" fill="hsl(var(--accent))" opacity="0.5" />
              
              <text
                x="150"
                y="38"
                textAnchor="middle"
                fill="url(#goldGradientHero)"
                filter="url(#glow)"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 600, letterSpacing: "8px" }}
              >
                EPOCHAL
              </text>
              <text
                x="150"
                y="60"
                textAnchor="middle"
                fill="hsl(var(--foreground))"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", letterSpacing: "12px" }}
              >
                DIALOG
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Main Tagline */}
        <motion.h1
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.6 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-8 leading-tight"
        >
          <span className="relative inline-block">
            {t("hero.tagline1")}
          </span>
          <br />
          <span className="text-primary italic dark:drop-shadow-[0_0_25px_hsl(var(--primary)/0.6)]">
            {t("hero.tagline2")}
          </span>
        </motion.h1>

        {/* Subtitle with icons */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          <Feather className="w-5 h-5 text-accent hidden sm:block" />
          <p>{t("hero.subtitle")}</p>
          <Scroll className="w-5 h-5 text-accent hidden sm:block" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 1 }}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <button
            className="group relative px-10 py-4 bg-primary text-primary-foreground font-display text-lg rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 dark:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Scroll className="w-5 h-5" />
              {t("hero.cta")}
            </span>
          </button>

          <span className="text-muted-foreground font-display italic text-sm">
            {t("hero.free")}
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-15 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
