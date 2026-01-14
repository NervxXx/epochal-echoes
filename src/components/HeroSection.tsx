import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Scroll, Feather, Crown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToContent = () => {
    document.getElementById("magic")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <motion.img
          src={heroBackground}
          alt="Historical map with silhouettes"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2, filter: "blur(10px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </motion.div>

      {/* Animated vignette */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_70%,hsl(var(--background)/0.8)_100%)]" />
      </div>

      {/* Floating golden particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -50 - Math.random() * 50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Decorative corner ornaments */}
      <div className="absolute top-24 left-8 z-20 opacity-20 dark:opacity-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-accent">
            <path d="M0 0 L80 0 L80 10 L10 10 L10 80 L0 80 Z" fill="currentColor" />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute top-24 right-8 z-20 opacity-20 dark:opacity-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-accent" style={{ transform: 'scaleX(-1)' }}>
            <path d="M0 0 L80 0 L80 10 L10 10 L10 80 L0 80 Z" fill="currentColor" />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        {/* Decorative crown icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Crown className="w-10 h-10 text-accent/60 dark:drop-shadow-[0_0_10px_hsl(var(--accent)/0.5)]" />
            <motion.div
              className="absolute -inset-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full border border-dashed border-accent/20" />
            </motion.div>
          </div>
        </motion.div>

        {/* Logo with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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

        {/* Main Tagline with dramatic reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-8 leading-tight"
        >
          <span className="relative inline-block">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-2 left-0 h-3 bg-accent/20 -z-10"
            />
            Оживи голоса прошлого.
          </span>
          <br />
          <span className="text-primary italic dark:drop-shadow-[0_0_25px_hsl(var(--primary)/0.6)]">
            Веди диалог с историей.
          </span>
        </motion.h1>

        {/* Subtitle with icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          <Feather className="w-5 h-5 text-accent hidden sm:block" />
          <p>Погрузитесь в беседу с величайшими умами человечества — от философов древности до гениев XX века</p>
          <Scroll className="w-5 h-5 text-accent hidden sm:block" />
        </motion.div>

        {/* CTA Button with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--primary) / 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 bg-primary text-primary-foreground font-display text-lg rounded-sm overflow-hidden transition-all duration-300 dark:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Scroll className="w-5 h-5" />
              Начать путешествие
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/30 via-transparent to-accent/30"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>

          <span className="text-muted-foreground font-display italic text-sm">
            Бесплатно • Без регистрации
          </span>
        </motion.div>

        {/* Scroll Indicator with enhanced animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="font-display text-sm italic tracking-wide">Разверните свиток</span>
            <div className="relative">
              <ChevronDown className="w-6 h-6 group-hover:text-accent transition-colors" />
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-15 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
