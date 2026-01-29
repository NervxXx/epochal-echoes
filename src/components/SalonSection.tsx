import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Users, Star, Bookmark } from "lucide-react";
import AnimatedText from "./AnimatedText";
import ParallaxBackground from "./ParallaxBackground";
import napoleonImg from "@/assets/portraits/napoleon.jpg";
import shakespeareImg from "@/assets/portraits/shakespeare.jpg";
import curieImg from "@/assets/portraits/curie.jpg";

const SalonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const portraits = [
    { name: "Наполеон", image: napoleonImg },
    { name: "Шекспир", image: shakespeareImg },
    { name: "Мария Кюри", image: curieImg },
  ];

  const features = [
    { icon: Users, text: "Создавайте групповые чаты с любыми историческими персонажами" },
    { icon: MessageCircle, text: "Задавайте темы для дискуссии или наблюдайте свободный диалог" },
    { icon: Bookmark, text: "Сохраняйте лучшие моменты бесед в коллекцию" },
  ];

  return (
    <section id="salon" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Parallax decorative background elements */}
      <ParallaxBackground speed={0.4} className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] opacity-[0.02] dark:opacity-[0.01]"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="200"
                y1="20"
                x2="200"
                y2="380"
                stroke="currentColor"
                strokeWidth="0.3"
                transform={`rotate(${i * 30} 200 200)`}
              />
            ))}
          </svg>
        </motion.div>
      </ParallaxBackground>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Эксклюзивная функция</span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
              <AnimatedText text="Создай свой" delay={0.2} />{" "}
              <span className="relative inline-block">
                <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                  <AnimatedText text="салон" delay={0.5} />
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-accent to-primary/50"
                />
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Соберите уникальные группы. Что обсудят в одной комнате{" "}
              <span className="text-foreground font-medium">Цезарь, Tesla и Будда</span>?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Станьте режиссёром исторического диспута. Наблюдайте, как великие умы обмениваются идеями,
              спорят и находят неожиданные точки соприкосновения.
            </p>

            {/* Feature list with enhanced styling */}
            <ul className="space-y-5">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground pt-2">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Interactive Salon Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px]"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />

            {/* Connection lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400">
              <defs>
                <linearGradient id="lineGradientSalon" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glowLine">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Triangular connection lines */}
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
                  filter="url(#glowLine)"
                  strokeDasharray="1000"
                  initial={{ strokeDashoffset: 1000 }}
                  animate={isInView ? { strokeDashoffset: 0 } : {}}
                  transition={{ duration: 2, delay: 0.5 + index * 0.3 }}
                />
              ))}

              {/* Animated message pulses along lines */}
              {isInView && [...Array(3)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="6"
                  fill="hsl(var(--accent))"
                  filter="url(#glowLine)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [80, 220, 360, 80][i % 3 === 0 ? 0 : i % 3],
                    cy: [120, 280, 120, 120][i % 3 === 0 ? 0 : i % 3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 1.5,
                    repeatDelay: 2,
                  }}
                />
              ))}
            </svg>

            {/* Portrait circles with enhanced styling */}
            {portraits.map((portrait, index) => {
              const positions = [
                { left: "5%", top: "15%" },
                { left: "35%", top: "55%" },
                { left: "62%", top: "15%" },
              ];
              
              return (
                <motion.div
                  key={portrait.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2, type: "spring" }}
                  className="absolute"
                  style={positions[index]}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative cursor-pointer group"
                  >
                    {/* Outer glow ring */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      className="absolute -inset-4 rounded-full bg-accent/20 blur-md dark:bg-accent/30"
                    />

                    {/* Inner glow */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/40 to-primary/40 dark:shadow-[0_0_30px_hsl(var(--accent)/0.5)]" />

                    {/* Portrait */}
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-accent/50 shadow-portrait">
                      <img
                        src={portrait.image}
                        alt={portrait.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Name label */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                    >
                      <span className="text-sm font-display text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                        {portrait.name}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Message bubbles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-xs"
            >
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl px-5 py-4 shadow-elevated">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground italic font-display leading-relaxed">
                    "Мадам Кюри, как вы относитесь к военному применению науки?"
                  </p>
                </div>
              </div>
              
              {/* Typing indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                className="mt-3 ml-8"
              >
                <div className="inline-flex items-center gap-1 bg-secondary/80 px-3 py-2 rounded-full">
                  <span className="text-xs text-muted-foreground">Мария Кюри печатает</span>
                  <div className="flex gap-0.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SalonSection;
