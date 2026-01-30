import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles, Crown, Scroll } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section id="cta" className="relative py-24 md:py-40 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23000' stroke-width='0.3'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23000' stroke-width='0.3'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }} />

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles - optimized with useMemo-like static array */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/50 rounded-full"
            style={{
              left: `${15 + i * 8}%`,
              top: `${20 + (i % 5) * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Ornate frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative crown */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Crown className="w-12 h-12 text-accent dark:drop-shadow-[0_0_15px_hsl(var(--accent)/0.5)]" />
              <motion.div
                className="absolute -inset-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border border-dashed border-accent/30" />
              </motion.div>
            </div>
          </motion.div>

          {/* Top ornament */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-accent" />
            <Sparkles className="w-5 h-5 text-accent" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-8 leading-tight"
          >
            <span className="relative inline-block">
              {t("cta.title1")}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-1 left-0 h-2 bg-accent/20 -z-10"
              />
            </span>
            <br />
            <span className="text-primary italic dark:drop-shadow-[0_0_25px_hsl(var(--primary)/0.6)]">
              {t("cta.title2")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t("cta.subtitle")}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
          >
            {[
              { value: "10K+", label: t("cta.stat1") },
              { value: "500K+", label: t("cta.stat2") },
              { value: "4.9", label: t("cta.stat3") },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-1 dark:drop-shadow-[0_0_10px_hsl(var(--foreground)/0.2)]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsl(var(--primary) / 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-primary text-primary-foreground font-display text-lg rounded-sm overflow-hidden transition-all duration-300 dark:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Download className="w-5 h-5" />
                {t("cta.download")}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/30 via-transparent to-accent/30"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-transparent border-2 border-primary text-primary font-display text-lg rounded-sm transition-all duration-300 hover:bg-primary/10 flex items-center justify-center gap-3"
            >
              <Scroll className="w-5 h-5" />
              {t("cta.start")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              {t("cta.trust")}
            </span>
          </motion.div>

          {/* Bottom ornament */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-4 mt-16"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="w-3 h-3 rotate-45 border-2 border-accent dark:shadow-[0_0_10px_hsl(var(--accent))]" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
