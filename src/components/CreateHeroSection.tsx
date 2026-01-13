import { motion } from "framer-motion";
import { Sliders, BookOpen, MessageSquare, Sparkles } from "lucide-react";

const CreateHeroSection = () => {
  const features = [
    { icon: BookOpen, label: "Биография", value: "Загрузите книги и мемуары" },
    { icon: MessageSquare, label: "Стиль речи", value: "Формальный / Дружеский" },
    { icon: Sliders, label: "Характер", value: "Настройте личность" },
    { icon: Sparkles, label: "Эпоха", value: "Исторический контекст" },
  ];

  return (
    <section id="create" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Grimoire Interface */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Book/Grimoire styling */}
              <div className="relative bg-card rounded-sm shadow-elevated overflow-hidden dark:shadow-[0_0_40px_hsl(var(--accent)/0.15)] dark:border dark:border-border">
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-foreground/10 to-transparent" />

                {/* Header */}
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <h3 className="font-display text-lg text-foreground">
                    ✦ Создание нового персонажа
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Name input mock */}
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-display">
                      Имя исторической личности
                    </label>
                    <div className="bg-background border border-border rounded-sm px-4 py-3">
                      <span className="text-foreground">Никола Тесла</span>
                      <span className="animate-pulse text-accent">|</span>
                    </div>
                  </div>

                  {/* Feature sliders */}
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground font-medium">{feature.label}</span>
                          <span className="text-muted-foreground text-xs">{feature.value}</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent to-ochre"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${60 + index * 10}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Create button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-primary text-primary-foreground font-display rounded-sm hover:bg-primary/90 transition-colors"
                  >
                    Оживить персонажа
                  </motion.button>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-accent/30" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent/30" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
              Добавь своего <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">героя</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Нет вашего кумира? Добавьте его! Обучите ИИ-личность на основе биографий, речей и мемуаров.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Наш алгоритм проанализирует исторические источники и создаст уникальную личность, сохраняя
              аутентичность взглядов и манеру общения вашего персонажа.
            </p>

            <div className="bg-card border border-border rounded-sm p-4 shadow-paper">
              <p className="text-sm text-muted-foreground italic">
                💡 <strong className="text-foreground">Совет:</strong> Чем больше источников вы загрузите, тем
                глубже и достовернее будет личность вашего персонажа.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreateHeroSection;