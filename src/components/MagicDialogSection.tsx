import { motion } from "framer-motion";
import { Sparkles, Users, BookOpen } from "lucide-react";
import PortraitCard from "./PortraitCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

import leonardoImg from "@/assets/compressed/Leonardo da Vinci_compressed.webp";
import columbusImg from "@/assets/compressed/Christopher Columbus_compressed.webp";
import beethovenImg from "@/assets/compressed/Ludwig van Beethoven_compressed.webp";
import napoleonImg from "@/assets/compressed/Napoleon Bonaparte_compressed.webp";
import copernicusImg from "@/assets/compressed/Nicolaus Copernicus_compressed.webp";
import shakespeareImg from "@/assets/compressed/William Shakespeare_compressed.webp";
import mozartImg from "@/assets/compressed/Wolfgang Amadeus Mozart_compressed.webp";
import archimedesImg from "@/assets/compressed/Archimedes_compressed.webp";

const MagicDialogSection = () => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  const portraits = [
    {
      name: t("portrait.leonardo.name"),
      era: t("portrait.leonardo.era"),
      quote: t("portrait.leonardo.quote"),
      image: leonardoImg,
    },
    {
      name: t("portrait.columbus.name"),
      era: t("portrait.columbus.era"),
      quote: t("portrait.columbus.quote"),
      image: columbusImg,
    },
    {
      name: t("portrait.beethoven.name"),
      era: t("portrait.beethoven.era"),
      quote: t("portrait.beethoven.quote"),
      image: beethovenImg,
    },
    {
      name: t("portrait.archimedes.name"),
      era: t("portrait.archimedes.era"),
      quote: t("portrait.archimedes.quote"),
      image: archimedesImg,
    },
    {
      name: t("portrait.napoleon.name"),
      era: t("portrait.napoleon.era"),
      quote: t("portrait.napoleon.quote"),
      image: napoleonImg,
    },
    {
      name: t("portrait.shakespeare.name"),
      era: t("portrait.shakespeare.era"),
      quote: t("portrait.shakespeare.quote"),
      image: shakespeareImg,
    },
    {
      name: t("portrait.copernicus.name"),
      era: t("portrait.copernicus.era"),
      quote: t("portrait.copernicus.quote"),
      image: copernicusImg,
    },
    {
      name: t("portrait.mozart.name"),
      era: t("portrait.mozart.era"),
      quote: t("portrait.mozart.quote"),
      image: mozartImg,
    },
  ];

  const stats = [
    { icon: Users, value: "100+", label: t("magic.stat1") },
    { icon: BookOpen, value: "15", label: t("magic.stat2") },
    { icon: Sparkles, value: "∞", label: t("magic.stat3") },
  ];

  const animationProps = reducedMotion 
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {};

  return (
    <section id="magic" className="relative py-24 md:py-32 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 texture-paper" />
      
      {/* Static decorative pattern on mobile, parallax on desktop */}
      {!reducedMotion && (
        <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          {/* Decorative top ornament */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent" />
              <Sparkles className="w-6 h-6 text-accent dark:drop-shadow-[0_0_10px_hsl(var(--accent))]" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent" />
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
            {t("magic.title1")}{" "}
            <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
              {t("magic.title2")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("magic.subtitle")}
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="w-5 h-5 text-accent mr-2" />
                <span className="font-display text-3xl md:text-4xl font-semibold text-foreground dark:drop-shadow-[0_0_10px_hsl(var(--foreground)/0.2)]">
                  {stat.value}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Ornate divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-24 md:w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="w-2 h-2 rotate-45 bg-accent dark:shadow-[0_0_10px_hsl(var(--accent))]" />
          <div className="w-24 md:w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Portrait Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {portraits.map((portrait, index) => (
            <PortraitCard
              key={portrait.name}
              {...portrait}
              delay={reducedMotion ? 0 : index * 0.08}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* More figures indicator */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-full">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs text-muted-foreground">?</span>
                </div>
              ))}
            </div>
            <p className="font-display text-muted-foreground italic">
              {t("magic.more")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MagicDialogSection;
