import { motion } from "framer-motion";
import { Feather, BookOpen, Users, Sparkles } from "lucide-react";

const signatures = [
  { name: "Leonardo da Vinci", style: "italic" },
  { name: "William Shakespeare", style: "normal" },
  { name: "Marie Curie", style: "italic" },
  { name: "Albert Einstein", style: "normal" },
  { name: "Cleopatra VII", style: "italic" },
  { name: "Oscar Wilde", style: "normal" },
];

const navLinks = [
  { name: "О проекте", href: "#hero" },
  { name: "Персонажи", href: "#magic" },
  { name: "Салон", href: "#salon" },
  { name: "Создать", href: "#create" },
];

const features = [
  { icon: BookOpen, text: "50+ исторических персонажей" },
  { icon: Users, text: "Групповые диалоги" },
  { icon: Sparkles, text: "ИИ нового поколения" },
];

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
      
      {/* Main footer background */}
      <div className="relative bg-secondary/80 dark:bg-secondary/50 pt-20 pb-8">
        {/* Paper texture */}
        <div className="absolute inset-0 texture-paper" />
        
        {/* Decorative quill pattern */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-10 dark:opacity-5">
          <Feather className="w-32 h-32 text-primary" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Top section with logo and features */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="font-display text-3xl font-semibold text-foreground">
                Epochal<span className="text-primary dark:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">Dialog</span>
              </span>
            </motion.div>
            
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Платформа для диалога с величайшими умами истории. 
              Погрузитесь в беседу с прошлым.
            </p>

            {/* Features row */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation and social links */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Navigation */}
            <div className="text-center md:text-left">
              <h4 className="font-display text-foreground font-medium mb-4 text-sm uppercase tracking-wider">
                Навигация
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle - CTA */}
            <div className="text-center">
              <motion.a
                href="#cta"
                onClick={(e) => scrollToSection(e, "#cta")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors dark:shadow-[0_0_25px_hsl(var(--primary)/0.4)]"
              >
                <Sparkles className="w-4 h-4" />
                Начать путешествие
              </motion.a>
            </div>

            {/* Social links */}
            <div className="text-center md:text-right">
              <h4 className="font-display text-foreground font-medium mb-4 text-sm uppercase tracking-wider">
                Связаться
              </h4>
              <div className="flex justify-center md:justify-end gap-3">
                {["TG", "VK", "YT"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary/50 transition-all font-display text-sm dark:shadow-[0_0_10px_hsl(var(--primary)/0.2)]"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Ornate divider */}
          <div className="relative flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="px-4">
              <Feather className="w-5 h-5 text-primary/50" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Signatures decoration */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8"
          >
            {signatures.map((sig, index) => (
              <motion.span
                key={sig.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className={`font-display text-sm text-muted-foreground cursor-default transition-all ${
                  sig.style === "italic" ? "italic" : ""
                }`}
              >
                {sig.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p className="flex items-center gap-1">
              © 2024 Epochal Dialog. 
              <span className="hidden sm:inline">Все права защищены.</span>
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>

        {/* Bottom glow effect for dark mode */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:shadow-[0_0_20px_hsl(var(--primary)/0.3)]" />
      </div>
    </footer>
  );
};

export default Footer;
