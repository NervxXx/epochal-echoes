import { motion } from "framer-motion";
import { Sliders, BookOpen, MessageSquare, Sparkles, Wand2, Upload, Check } from "lucide-react";
import AnimatedText from "./AnimatedText";
import ParallaxBackground from "./ParallaxBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const CreateHeroSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: BookOpen, label: t("create.feature1.label"), value: t("create.feature1.value"), progress: 85 },
    { icon: MessageSquare, label: t("create.feature2.label"), value: t("create.feature2.value"), progress: 70 },
    { icon: Sliders, label: t("create.feature3.label"), value: t("create.feature3.value"), progress: 90 },
    { icon: Sparkles, label: t("create.feature4.label"), value: t("create.feature4.value"), progress: 75 },
  ];

  const steps = [
    { icon: Upload, text: t("create.step1"), done: true },
    { icon: Wand2, text: t("create.step2"), done: true },
    { icon: Sparkles, text: t("create.step3"), done: false },
  ];

  return (
    <section id="create" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30" />
      <ParallaxBackground speed={0.25} className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </ParallaxBackground>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Grimoire Interface */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 perspective-1000"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Book shadow */}
              <div className="absolute -bottom-4 left-8 right-8 h-8 bg-foreground/10 blur-xl rounded-full" />
              
              {/* Book/Grimoire with 3D effect */}
              <motion.div
                whileHover={{ rotateY: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-card rounded-sm shadow-elevated overflow-hidden dark:shadow-[0_0_50px_hsl(var(--accent)/0.2)] border border-border"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-foreground/15 via-foreground/5 to-transparent">
                  <div className="absolute left-2 top-4 bottom-4 w-0.5 bg-accent/30" />
                </div>

                {/* Page edge effect */}
                <div className="absolute right-0 top-2 bottom-2 w-1 bg-gradient-to-l from-background/50 to-transparent" />

                {/* Header with book title styling */}
                <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-accent/10 px-8 py-5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Wand2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">
                        {t("create.grimoire.title")}
                      </h3>
                      <p className="text-xs text-muted-foreground">{t("create.grimoire.subtitle")}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Progress steps */}
                  <div className="flex items-center justify-between mb-8">
                    {steps.map((step, index) => (
                      <div key={step.text} className="flex items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.done 
                              ? 'bg-accent text-accent-foreground' 
                              : 'bg-secondary text-muted-foreground border-2 border-dashed border-accent/50'
                          }`}
                        >
                          {step.done ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <step.icon className="w-4 h-4" />
                          )}
                        </motion.div>
                        {index < steps.length - 1 && (
                          <div className={`w-12 h-0.5 mx-1 ${step.done ? 'bg-accent' : 'bg-border'}`} />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Name input with typewriter effect */}
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-display">
                      {t("create.name.label")}
                    </label>
                    <div className="bg-background border-2 border-accent/30 rounded-sm px-4 py-3 relative overflow-hidden">
                      <motion.span 
                        className="text-foreground font-display"
                        initial={{ width: 0 }}
                        whileInView={{ width: "auto" }}
                        viewport={{ once: true }}
                      >
                        {t("create.name.value")}
                      </motion.span>
                      <motion.span 
                        className="text-accent"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        |
                      </motion.span>
                      {/* Decorative glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Feature sliders with enhanced styling */}
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-foreground font-medium">{feature.label}</span>
                            <span className="text-muted-foreground text-xs">{feature.value}</span>
                          </div>
                          <div className="h-2 bg-background rounded-full overflow-hidden relative">
                            <motion.div
                              className="h-full bg-gradient-to-r from-accent via-ochre to-accent rounded-full relative"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${feature.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.5 + index * 0.15, ease: "easeOut" }}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 + index * 0.2 }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Create button with enhanced effect */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-primary via-primary to-accent/80 text-primary-foreground font-display rounded-sm relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      {t("create.button")}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.button>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-accent/40 rounded-tr-sm" />
                <div className="absolute bottom-3 left-8 w-10 h-10 border-b-2 border-l-2 border-accent/40 rounded-bl-sm" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <Wand2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{t("create.badge")}</span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
              <AnimatedText text={t("create.title1")} delay={0.2} />{" "}
              <span className="relative inline-block">
                <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                  <AnimatedText text={t("create.title2")} delay={0.5} />
                </span>
                <motion.svg
                  viewBox="0 0 100 10"
                  className="absolute -bottom-2 left-0 w-full h-3"
                >
                  <motion.path
                    d="M0 5 Q25 0 50 5 T100 5"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </motion.svg>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("create.subtitle1")} <span className="text-foreground font-medium">{t("create.subtitle1.action")}</span> {t("create.subtitle1.text")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("create.subtitle2")}
            </p>

            {/* Tip card with decorative border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative bg-card border border-border rounded-sm p-5 shadow-paper overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent" />
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">{t("create.tip.title")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("create.tip.text")}
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

export default CreateHeroSection;
