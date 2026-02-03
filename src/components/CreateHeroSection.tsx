import { motion } from "framer-motion";
import { Sliders, BookOpen, MessageSquare, Sparkles, Wand2, Upload, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const CreateHeroSection = () => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

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

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Grimoire Interface */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Book shadow */}
              <div className="absolute -bottom-4 left-8 right-8 h-8 bg-foreground/10 blur-xl rounded-full" />
              
              {/* Book/Grimoire */}
              <div className="relative bg-card rounded-sm shadow-elevated overflow-hidden dark:shadow-[0_0_50px_hsl(var(--accent)/0.2)] border border-border">
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-foreground/15 via-foreground/5 to-transparent">
                  <div className="absolute left-2 top-4 bottom-4 w-0.5 bg-accent/30" />
                </div>

                {/* Header */}
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
                        <div
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
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`w-12 h-0.5 mx-1 ${step.done ? 'bg-accent' : 'bg-border'}`} />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Name input */}
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-display">
                      {t("create.name.label")}
                    </label>
                    <div className="bg-background border-2 border-accent/30 rounded-sm px-4 py-3 relative overflow-hidden">
                      <span className="text-foreground font-display">
                        {t("create.name.value")}
                      </span>
                      <span className="text-accent animate-pulse">|</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Feature sliders */}
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.4 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-foreground font-medium">{feature.label}</span>
                            <span className="text-muted-foreground text-xs">{feature.value}</span>
                          </div>
                          <div className="h-2 bg-background rounded-full overflow-hidden relative">
                            <motion.div
                              className="h-full bg-gradient-to-r from-accent via-ochre to-accent rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${feature.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: reducedMotion ? 0 : 1.2, delay: reducedMotion ? 0 : 0.5 + index * 0.15, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Create button */}
                  <button
                    className="w-full py-4 bg-gradient-to-r from-primary via-primary to-accent/80 text-primary-foreground font-display rounded-sm relative overflow-hidden group hover:scale-[1.02] transition-transform"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      {t("create.button")}
                    </span>
                  </button>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-accent/40 rounded-tr-sm" />
                <div className="absolute bottom-3 left-8 w-10 h-10 border-b-2 border-l-2 border-accent/40 rounded-bl-sm" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Wand2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{t("create.badge")}</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
              {t("create.title1")}{" "}
              <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                {t("create.title2")}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("create.subtitle1")} <span className="text-foreground font-medium">{t("create.subtitle1.action")}</span> {t("create.subtitle1.text")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("create.subtitle2")}
            </p>

            {/* Tip card */}
            <div className="relative bg-card border border-border rounded-sm p-5 shadow-paper overflow-hidden">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreateHeroSection;
