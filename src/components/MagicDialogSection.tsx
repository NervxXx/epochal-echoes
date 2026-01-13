import { motion } from "framer-motion";
import PortraitCard from "./PortraitCard";

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

const MagicDialogSection = () => {
  return (
    <section id="magic-section" className="relative py-24 md:py-32 overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 texture-paper" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6">
            Магия <span className="text-primary italic">диалога</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Общайтесь с 50+ величайшими умами и сердцами истории: от Леонардо да Винчи до Клеопатры,
            от Эйнштейна до Фриды Кало.
          </p>
        </motion.div>

        {/* Ornate divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-16"
        />

        {/* Portrait Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {portraits.map((portrait, index) => (
            <PortraitCard
              key={portrait.name}
              {...portrait}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* More figures indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-display text-muted-foreground italic">
            ...и ещё более 40 исторических личностей
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MagicDialogSection;