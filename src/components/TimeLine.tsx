import { motion, useScroll, useTransform } from "framer-motion";

const eras = [
  { name: "Античность", year: "3000 до н.э. — 476" },
  { name: "Средневековье", year: "476 — 1453" },
  { name: "Ренессанс", year: "1453 — 1600" },
  { name: "Просвещение", year: "1600 — 1800" },
  { name: "Современность", year: "1800 — наши дни" },
];

const TimeLine = () => {
  const { scrollYProgress } = useScroll();
  const indicatorPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border py-2 hidden lg:block"
    >
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Timeline track */}
          <div className="h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-ochre"
              style={{ width: indicatorPosition }}
            />
          </div>

          {/* Era markers */}
          <div className="flex justify-between mt-2">
            {eras.map((era, index) => (
              <div key={era.name} className="text-center flex-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                >
                  <span className="text-xs font-display text-muted-foreground">
                    {era.name}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimeLine;