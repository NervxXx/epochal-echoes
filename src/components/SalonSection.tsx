import { motion } from "framer-motion";
import napoleonImg from "@/assets/portraits/napoleon.jpg";
import shakespeareImg from "@/assets/portraits/shakespeare.jpg";
import curieImg from "@/assets/portraits/curie.jpg";

const SalonSection = () => {
  const portraits = [
    { name: "Наполеон", image: napoleonImg, x: 0, y: 0 },
    { name: "Шекспир", image: shakespeareImg, x: 200, y: 80 },
    { name: "Мария Кюри", image: curieImg, x: 400, y: 20 },
  ];

  return (
    <section id="salon" className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
              Создай свой <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">салон</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Соберите уникальные группы. Что обсудят в одной комнате Цезарь, Tesla и Будда?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Станьте режиссёром исторического диспута. Наблюдайте, как великие умы обмениваются идеями,
              спорят и находят неожиданные точки соприкосновения.
            </p>

            <ul className="space-y-4">
              {[
                "Создавайте групповые чаты с любыми историческими персонажами",
                "Задавайте темы для дискуссии или наблюдайте свободный диалог",
                "Сохраняйте лучшие моменты бесед",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
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
            className="relative h-80 md:h-96"
          >
            {/* Connection lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Lines connecting portraits */}
              {[
                { x1: 60, y1: 80, x2: 260, y2: 160 },
                { x1: 260, y1: 160, x2: 460, y2: 100 },
                { x1: 60, y1: 80, x2: 460, y2: 100 },
              ].map((line, index) => (
                <motion.line
                  key={index}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  initial={{ strokeDashoffset: 1000 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 + index * 0.3 }}
                />
              ))}

              {/* Animated dots on lines */}
              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={i}
                  r="4"
                  fill="hsl(var(--accent))"
                  animate={{
                    cx: [60, 260, 460, 60][i % 4],
                    cy: [80, 160, 100, 80][i % 4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }}
                />
              ))}
            </svg>

            {/* Portrait circles */}
            {portraits.map((portrait, index) => (
              <motion.div
                key={portrait.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="absolute"
                style={{
                  left: `${10 + index * 30}%`,
                  top: index === 1 ? "50%" : "20%",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  {/* Glow ring */}
                  <div className="absolute -inset-2 rounded-full bg-accent/20 animate-glow dark:bg-accent/30 dark:shadow-[0_0_30px_hsl(var(--accent)/0.5)]" />

                  {/* Portrait */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-accent/30 shadow-portrait">
                    <img
                      src={portrait.image}
                      alt={portrait.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name label */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs md:text-sm font-display text-muted-foreground">
                      {portrait.name}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Message bubbles */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-4 py-2 shadow-paper"
            >
              <p className="text-sm text-muted-foreground italic font-display">
                "А что думает об этом мадам Кюри?"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SalonSection;