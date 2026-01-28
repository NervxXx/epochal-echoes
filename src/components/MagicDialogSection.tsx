import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Users, BookOpen } from "lucide-react";
import PortraitCard from "./PortraitCard";
import AnimatedText from "./AnimatedText";
import ParallaxBackground from "./ParallaxBackground";

import leonardoImg from "@/assets/portraits/leonardo.jpg";
import cleopatraImg from "@/assets/portraits/cleopatra.jpg";
import einsteinImg from "@/assets/portraits/einstein.jpg";
import fridaImg from "@/assets/portraits/frida.jpg";
import napoleonImg from "@/assets/portraits/napoleon.jpg";
import shakespeareImg from "@/assets/portraits/shakespeare.jpg";
import curieImg from "@/assets/portraits/curie.jpg";
import wildeImg from "@/assets/portraits/wilde.jpg";

const portraits = [
  {
    name: "Леонардо да Винчи",
    era: "Ренессанс, XV-XVI век",
    quote: "Познание без применения подобно дереву без плодов.",
    image: leonardoImg,
  },
  {
    name: "Клеопатра VII",
    era: "Древний Египет, I век до н.э.",
    quote: "Власть — это искусство делать невозможное неизбежным.",
    image: cleopatraImg,
  },
  {
    name: "Альберт Эйнштейн",
    era: "XX век",
    quote: "Воображение важнее знания.",
    image: einsteinImg,
  },
  {
    name: "Фрида Кало",
    era: "XX век",
    quote: "Я не больна — я разбита. Но счастлива быть живой.",
    image: fridaImg,
  },
  {
    name: "Наполеон Бонапарт",
    era: "XVIII-XIX век",
    quote: "Невозможно — слово из словаря глупцов.",
    image: napoleonImg,
  },
  {
    name: "Уильям Шекспир",
    era: "Эпоха Возрождения, XVI век",
    quote: "Весь мир — театр, а люди в нём — актёры.",
    image: shakespeareImg,
  },
  {
    name: "Мария Кюри",
    era: "XIX-XX век",
    quote: "В жизни нет ничего, чего следует бояться — только понимать.",
    image: curieImg,
  },
  {
    name: "Оскар Уайльд",
    era: "Викторианская эпоха, XIX век",
    quote: "Будь собой — все остальные роли уже заняты.",
    image: wildeImg,
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Исторических личностей" },
  { icon: BookOpen, value: "15", label: "Эпох и цивилизаций" },
  { icon: Sparkles, value: "∞", label: "Возможных диалогов" },
];

const MagicDialogSection = () => {
  return (
    <section id="magic" className="relative py-24 md:py-32 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 texture-paper" />
      
      {/* Parallax decorative pattern */}
      <ParallaxBackground speed={0.3} className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </ParallaxBackground>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Decorative top ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent" />
              <Sparkles className="w-6 h-6 text-accent dark:drop-shadow-[0_0_10px_hsl(var(--accent))]" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent" />
            </div>
          </motion.div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
            <AnimatedText text="Магия" delay={0.2} />{" "}
            <span className="relative inline-block">
              <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                <AnimatedText text="диалога" delay={0.4} />
              </span>
              <motion.svg
                viewBox="0 0 200 20"
                className="absolute -bottom-2 left-0 w-full h-4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M0 10 Q50 0 100 10 T200 10"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Общайтесь с 50+ величайшими умами и сердцами истории: от Леонардо да Винчи до Клеопатры,
            от Эйнштейна до Фриды Кало.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="w-5 h-5 text-accent mr-2 group-hover:scale-110 transition-transform" />
                <span className="font-display text-3xl md:text-4xl font-semibold text-foreground dark:drop-shadow-[0_0_10px_hsl(var(--foreground)/0.2)]">
                  {stat.value}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Ornate divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="w-24 md:w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="w-2 h-2 rotate-45 bg-accent dark:shadow-[0_0_10px_hsl(var(--accent))]" />
          <div className="w-24 md:w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>

        {/* Portrait Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {portraits.map((portrait, index) => (
            <PortraitCard
              key={portrait.name}
              {...portrait}
              delay={index * 0.08}
            />
          ))}
        </div>

        {/* More figures indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
              ...и ещё более 40 исторических личностей
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MagicDialogSection;
