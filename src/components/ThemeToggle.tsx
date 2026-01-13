import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("epochal-theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("epochal-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("epochal-theme", "light");
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border hover:bg-secondary transition-colors group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative w-5 h-5"
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-primary absolute inset-0 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
        ) : (
          <Sun className="w-5 h-5 text-accent absolute inset-0 group-hover:drop-shadow-[0_0_8px_hsl(var(--accent))]" />
        )}
      </motion.div>
      
      {/* Glow effect for dark mode */}
      {isDark && (
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
