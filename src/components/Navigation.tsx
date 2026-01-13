import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Главная", href: "#hero" },
  { name: "Персонажи", href: "#magic" },
  { name: "Салон", href: "#salon" },
  { name: "Создать", href: "#create" },
  { name: "Демо", href: "#demo" },
];

const Navigation = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <span className="dark:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
              Epochal Dialog
            </span>
          </motion.a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 dark:shadow-[0_0_8px_hsl(var(--primary))]" />
              </motion.a>
            ))}
          </div>

          {/* Right side: Theme toggle + CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <motion.a
              href="#cta"
              onClick={(e) => scrollToSection(e, "#cta")}
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors dark:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Начать
            </motion.a>
          </div>
        </div>
      </div>

      {/* Glow line in dark mode */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent dark:via-primary/30 dark:shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
    </motion.nav>
  );
};

export default Navigation;
