import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Crown, Scroll } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const FinalCTA = () => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section id="cta" className="relative py-24 md:py-40 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated background pattern - hidden on mobile */}
      <div className="absolute inset-0 opacity-[0.02] hidden md:block" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23000' stroke-width='0.3'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23000' stroke-width='0.3'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }} />

      {/* Decorative floating elements - desktop only */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <motion.div
            className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative crown */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Crown className="w-12 h-12 text-accent dark:drop-shadow-[0_0_15px_hsl(var(--accent)/0.5)]" />
            </div>
          </div>

          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-accent" />
            <Sparkles className="w-5 h-5 text-accent" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>

          <motion.h2
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-8 leading-tight"
          >
            <span className="relative inline-block">
              {t("cta.title1")}
            </span>
            <br />
            <span className="text-primary italic dark:drop-shadow-[0_0_25px_hsl(var(--primary)/0.6)]">
              {t("cta.title2")}
            </span>
          </motion.h2>

          <motion.p
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t("cta.subtitle")}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reducedMotion ? 0 : 0.7 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
          >
            {[
              { value: "10K+", label: t("cta.stat1") },
              { value: "500K+", label: t("cta.stat2") },
              { value: "4.9", label: t("cta.stat3") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-1 dark:drop-shadow-[0_0_10px_hsl(var(--foreground)/0.2)]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.9 }}
            className="flex justify-center"
          >
            <button
              className="group relative px-10 py-5 bg-primary text-primary-foreground font-display text-lg rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 dark:shadow-[0_0_40px_hsl(var(--primary)/0.4)] flex items-center justify-center gap-3"
            >
              <Scroll className="w-5 h-5" />
              {t("cta.start")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="w-3 h-3 rotate-45 border-2 border-accent dark:shadow-[0_0_10px_hsl(var(--accent))]" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
