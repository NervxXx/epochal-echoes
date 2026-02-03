import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Users, Star, Bookmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import napoleonImg from "@/assets/portraits/napoleon.jpg";
import shakespeareImg from "@/assets/portraits/shakespeare.jpg";
import curieImg from "@/assets/portraits/curie.jpg";

const SalonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  const portraits = [
    { name: t("salon.napoleon"), image: napoleonImg },
    { name: t("salon.shakespeare"), image: shakespeareImg },
    { name: t("salon.curie"), image: curieImg },
  ];

  const features = [
    { icon: Users, text: t("salon.feature1") },
    { icon: MessageCircle, text: t("salon.feature2") },
    { icon: Bookmark, text: t("salon.feature3") },
  ];

  return (
    <section id="salon" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Static decorative element on mobile */}
      {!reducedMotion && (
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] opacity-[0.02] dark:opacity-[0.01] pointer-events-none hidden md:block">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      )}

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8 }}
          >
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">{t("salon.badge")}</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
              {t("salon.title1")}{" "}
              <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                {t("salon.title2")}
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("salon.subtitle1")}{" "}
              <span className="text-foreground font-medium">{t("salon.subtitle1.names")}</span>?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t("salon.subtitle2")}
            </p>

            {/* Feature list */}
            <ul className="space-y-5">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground pt-2">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Salon Visualization - simplified for mobile */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8 }}
            className="relative h-[400px] md:h-[500px]"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />

            {/* Connection lines SVG - hidden on mobile */}
            {!reducedMotion && (
              <svg className="absolute inset-0 w-full h-full hidden md:block" viewBox="0 0 500 400">
                <defs>
                  <linearGradient id="lineGradientSalon" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {[
                  { x1: 80, y1: 120, x2: 220, y2: 280 },
                  { x1: 220, y1: 280, x2: 360, y2: 120 },
                  { x1: 360, y1: 120, x2: 80, y2: 120 },
                ].map((line, index) => (
                  <motion.line
                    key={index}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="url(#lineGradientSalon)"
                    strokeWidth="2"
                    strokeDasharray="1000"
                    initial={{ strokeDashoffset: 1000 }}
                    animate={isInView ? { strokeDashoffset: 0 } : {}}
                    transition={{ duration: 2, delay: 0.5 + index * 0.3 }}
                  />
                ))}
              </svg>
            )}

            {/* Portrait circles */}
            {portraits.map((portrait, index) => {
              const positions = [
                { left: "5%", top: "15%" },
                { left: "35%", top: "55%" },
                { left: "62%", top: "15%" },
              ];
              
              return (
                <motion.div
                  key={portrait.name}
                  initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.5 + index * 0.2, type: "spring" }}
                  className="absolute"
                  style={positions[index]}
                >
                  <div className="relative cursor-pointer group">
                    {/* Inner glow */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/40 to-primary/40 dark:shadow-[0_0_30px_hsl(var(--accent)/0.5)]" />

                    {/* Portrait */}
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-accent/50 shadow-portrait">
                      <img
                        src={portrait.image}
                        alt={portrait.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Name label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-display text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                        {portrait.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Message bubble - simplified */}
            <motion.div
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 1.5 }}
              className="absolute -bottom-16 left-1/4 -translate-x-1/4 w-full max-w-xs"
            >
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl px-5 py-4 shadow-elevated">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground italic font-display leading-relaxed">
                    "{t("salon.message")}"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SalonSection;
